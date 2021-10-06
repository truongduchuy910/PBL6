const { cache } = require("@itoa/lib/cache");

/**
 *
 * @param {Object} context
 * @returns {String} domain
 */
function domain(context = {}) {
  if (context.req && context.req.headers) {
    const { user } = context.req;
    var { referer, as } = context.req.headers;
    var host = as && as !== "null" ? as : referer;
    // domain do not contain protocal
    var domain = host.split("/")[2] || host;
    if (
      user &&
      user.isSeller &&
      user.domain &&
      [
        process.env.NODE_ENV === "production"
          ? "ecom.itoa.vn"
          : "localhost:7005",
        ,
        "seller.itoa.vn",
      ].includes(domain)
    ) {
      domain = user.domain;
    }
    return domain;
  }
  new Error("Not found request in context.");
}

/**
 *
 * @param {String} domain
 * @return UserWhereUniqueInput
 */
function user(domain) {
  if (!domain) throw new Error("Missing domain.");
  const { allUsers = [] } = cache;

  const _user = allUsers.find((_user) => {
    const { id, domain: _domain } = _user;
    return _domain === domain;
  });

  if (!_user) return false;
  return { id: _user.id };
}

/**
 *
 * @param {Object} authentication
 * @return {Boolean} user is auth
 */
function isAuth(authentication) {
  return Boolean(authentication);
}

/**
 *
 * @param {Object} authentication
 * @return {Boolean} user is createdBy
 */
function isAdmin(authentication) {
  const { item: user } = authentication;
  return Boolean(user && user.isAdmin);
}

/**
 *
 * @param {Object} authentication
 * @return {Boolean} user is seller
 */
function isSeller(authentication) {
  const { item: user } = authentication;
  return Boolean(user && user.isSeller);
}

/**
 *
 * @param {Object} authentication
 * @return access control
 */
function isCreatedBy(authentication) {
  return { createdBy: { id: authentication.item.id } };
}

/**
 * ITEM CREATED BY SELLER
 *
 */
function sellerRead({ authentication = {}, context }) {
  if (isAuth(authentication) && isAdmin(authentication)) return true;
  const createdBy = user(domain(context));
  return createdBy ? { createdBy } : false;
}

function sellerCreate({ authentication = {}, context }) {
  if (!isAuth(authentication)) throw new Error("You need to login first.");
  if (isAdmin(authentication)) return true;
  if (!isSeller(authentication)) throw new Error("Only seller can create.");
  domain(context);
  return true;
}

function sellerUpdate({ authentication = {}, context }) {
  if (!isAuth(authentication)) throw new Error("You need to login first.");
  if (isAdmin(authentication)) return true;
  if (!isSeller(authentication)) throw new Error("Only seller can update.");
  domain(context);
  return isCreatedBy(authentication);
}

function sellerDelete({ authentication = {}, context }) {
  if (!isAuth(authentication)) throw new Error("You need to login first.");
  if (isAdmin(authentication)) return true;
  if (!isSeller(authentication)) throw new Error("Only seller can delete.");
  domain(context);
  return isCreatedBy(authentication);
}
const roleSeller = process.env.DISABLE_AUTH
  ? { name: "roleSeller", read: true, create: true, update: true, delete: true }
  : {
      name: "roleSeller",
      read: sellerRead,
      create: sellerCreate,
      update: sellerUpdate,
      delete: sellerDelete,
    };

/**
 * ITEM CREATED BY MEMBER
 *
 */
function memberRead({ authentication = {}, context }) {
  return true;
}

function memberCreate({ authentication = {}, context }) {
  if (!isAuth(authentication)) throw new Error("You need to login first.");
  domain(context);
  return true;
}

function memberUpdate({ authentication = {}, context }) {
  if (!isAuth(authentication)) throw new Error("You need to login first.");
  if (isAdmin(authentication)) return true;
  domain(context);
  return isCreatedBy(authentication);
}

function memberDelete({ authentication = {}, context }) {
  if (!isAuth(authentication)) throw new Error("You need to login first.");
  if (isAdmin(authentication)) return true;
  domain(context);
  return isCreatedBy(authentication);
}

const roleMember = process.env.DISABLE_AUTH
  ? { name: "roleMember", read: true, create: true, update: true, delete: true }
  : {
      name: "roleMember",
      read: memberRead,
      create: memberCreate,
      update: memberUpdate,
      delete: memberDelete,
    };

/**
 * ITEM CREATED BY ANY
 *
 */
function anyRead({ authentication = {}, context }) {
  if (isAuth(authentication) && isAdmin(authentication)) return true;
  return { of: user(domain(context)) };
}

function anyCreate({ authentication = {}, context }) {
  return true;
}

function anyUpdate({ authentication = {}, context }) {
  if (isAuth(authentication) && isAdmin(authentication)) return true;
  return { of: user(domain(context)) };
}

function anyDelete({ authentication = {}, context }) {
  if (isAuth(authentication) && isAdmin(authentication)) return true;
  return { of: user(domain(context)) };
}
const roleAny = process.env.DISABLE_AUTH
  ? { name: "roleAny", read: true, create: true, update: true, delete: true }
  : {
      name: "roleAny",
      read: anyRead,
      create: anyCreate,
      update: anyUpdate,
      delete: anyDelete,
    };

/**
 * ITEM CREATED BY ANY
 *
 */
function simpleRead({ authentication = {}, context }) {
  if (isAuth(authentication) && isAdmin(authentication)) return true;
  return { of: user(domain(context)) };
}

function simpleCreate({ authentication = {}, context }) {
  return isAuth(authentication);
}

function simpleUpdate({ authentication = {}, context }) {
  return isCreatedBy(authentication);
}

function simpleDelete({ authentication = {}, context }) {
  return isCreatedBy(authentication);
}

const roleSimple = process.env.DISABLE_AUTH
  ? { name: "roleSimple", read: true, create: true, update: true, delete: true }
  : {
      name: "roleSimple",
      read: simpleRead,
      create: simpleCreate,
      update: simpleUpdate,
      delete: simpleDelete,
    };
/**
 * PAGE
 */
const modelPage = process.env.DISABLE_AUTH
  ? { name: "modelPage", read: true, create: true, update: true, delete: true }
  : {
      name: "modelPage",
      read: sellerRead,
      create: sellerCreate,
      update: sellerUpdate,
      delete: sellerDelete,
    };

/**
 * USER
 */
function userRead({ authentication, context }) {
  return true;
}
function userCreate({ authentication, context }) {
  return true;
}
function userUpdate({ authentication, context }) {
  if (!isAuth(authentication)) throw new Error("You need to login first.");
  if (isAdmin(authentication)) return true;
  return { id: authentication.item.id };
}
function userDelete({ authentication, context }) {
  if (!isAuth(authentication)) throw new Error("You need to login first.");
  if (isAdmin(authentication)) return true;
  return { id: authentication.item.id };
}
const modelUser = process.env.DISABLE_AUTH
  ? { name: "modelUser", read: true, create: true, update: true, delete: true }
  : {
      name: "modelUser",
      read: userRead,
      create: userCreate,
      update: userUpdate,
      delete: userDelete,
    };
module.exports = {
  roleSeller,
  roleAny,
  roleMember,
  roleSimple,
  modelPage,
  modelUser,
  domain,
  user,
};
