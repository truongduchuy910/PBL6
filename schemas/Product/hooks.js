const { gql } = require("@apollo/client");

/**
 *
 * @param {[][]} a
 * @returns
 */
function generation(a = [], index) {
  if (index < a.length - 1) {
    var d = [];
    a[index].map((b) => {
      return generation(a, index + 1).map((c) => {
        d.push([b, ...c]);
      });
    });
    return d;
  } else
    return a[index].map((b) => {
      return [b];
    });
}

module.exports.attributes = {
  validateInput: async ({ resolvedData, context, existingItem }) => {
    console.log("validateInput", resolvedData);
    if (existingItem) {
      // delete all old stock
      // get attributes (attributes group)
      const {
        data: { Product: product },
      } = await context.executeGraphQL({
        context,
        query: gql`
          query($id: ID!) {
            Product(where: { id: $id }) {
              attributes {
                id
              }
              stocks {
                attributeValues {
                  id
                  value
                }
                id
              }
            }
          }
        `,
        variables: { id: existingItem.id },
      });
      await context.executeGraphQL({
        context,
        query: gql`
          mutation($ids: [ID!]!) {
            deleteProductStocks(ids: $ids) {
              id
              createdBy {
                phone
              }
            }
          }
        `,
        variables: {
          ids: product.stocks.map((stock) => stock.id),
        },
      });
      // assign attributes group
      if (!resolvedData.attributes)
        resolvedData.attributes = product.attributes.map((attr) => attr.id);
    }
    /**
     *
     */

    // get attributes value (childs of attributes group)
    const {
      data: { allProductAttributes },
    } = await context.executeGraphQL({
      context,
      query: gql`
        query($ids: [ID]) {
          allProductAttributes(where: { id_in: $ids }) {
            id
            name
            values {
              id
              value
            }
          }
        }
      `,
      variables: { ids: resolvedData.attributes },
    });

    //
    if (allProductAttributes && allProductAttributes.length) {
      // if exist, create generation stock
      // else create default stock
      const a = allProductAttributes.map((attribute) => {
        return attribute.values.map((value) => {
          return value.id;
        });
      });
      const data = generation(a, 0).map((values) => {
        return {
          data: {
            attributeValues: {
              connect: values.map((value) => ({
                id: value,
              })),
            },
            quantity: 10,
          },
        };
      });
      const {
        data: { createProductStocks },
      } = await context.executeGraphQL({
        context,
        query: gql`
          mutation($data: [ProductStocksCreateInput]) {
            createProductStocks(data: $data) {
              id
            }
          }
        `,
        variables: { data },
      });
      resolvedData.stocks = createProductStocks.map((stock) => stock.id);
    } else {
      const {
        data: { createProductStock },
      } = await context.executeGraphQL({
        context,
        query: gql`
          mutation($data: ProductStockCreateInput) {
            createProductStock(data: $data) {
              id
            }
          }
        `,
        variables: {
          data: {
            quantity: 10,
          },
        },
      });
      console.log("createProductStock", createProductStock);
      resolvedData.attributes = [];
      resolvedData.stocks = [createProductStock.id];
    }
    return resolvedData;
  },
};
