const { ram } = require("@itoa/cache");
var whitelist = ["itoa.vn", "ecom.itoa.vn", "seller.itoa.vn"];
if (process.env.NODE_ENV === "development") whitelist.push("localhost");
/**
 *
 * @param {Object} context
 * @returns {String} domain
 */

function domain(context = {}, authentication = {}) {
  const { item: user } = authentication;
  if (!context.req) throw new Error("Missing request");
  const { sessionID, headers } = context.req;
  if (!sessionID) throw new Error("Missing session");
  if (!headers) throw new Error("Missing headers");
  var { referer, as } = headers;
  var host = as && as !== "null" ? as : referer;
  var domain = host.split("/")[2] || host;
  if (user && user.isSeller && whitelist.includes(domain)) {
    return user.domain;
  }
  return domain;
}

/**
 *
 * @param {String} domain
 * @return UserWhereUniqueInput
 */
function user(domain) {
  if (!domain) throw new Error("Missing domain.");
  const { allUsers = [] } = ram;

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
  return Boolean(authentication.item);
}

/**
 *
 * @param {Object} authentication
 * @return {Boolean} user is createdBy
 */
function isAdmin(authentication) {
  if (!isAuth(authentication)) return false;
  const { item: user } = authentication;
  return Boolean(user && user.isAdmin);
}

/**
 *
 * @param {Object} authentication
 * @return {Boolean} user is seller
 */
function isSeller(authentication) {
  if (!isAuth(authentication)) return false;
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
  const createdBy = user(domain(context, authentication));
  return createdBy ? { createdBy } : isAdmin(authentication);
}

function sellerCreate({ authentication = {}, context }) {
  if (isAdmin(authentication)) return true;
  if (!isSeller(authentication)) throw new Error("Only seller can create.");
  domain(context, authentication);
  return true;
}

function sellerUpdate({ authentication = {}, context }) {
  if (isAdmin(authentication)) return true;
  if (!isSeller(authentication)) throw new Error("Only seller can update.");
  domain(context, authentication);
  return isCreatedBy(authentication);
}

function sellerDelete({ authentication = {}, context }) {
  if (isAdmin(authentication)) return true;
  if (!isSeller(authentication)) throw new Error("Only seller can delete.");
  domain(context, authentication);
  return isCreatedBy(authentication);
}
const roleSeller = {
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
  domain(context, authentication);
  return true;
}

function memberUpdate({ authentication = {}, context }) {
  if (isAdmin(authentication)) return true;
  domain(context, authentication);
  return isCreatedBy(authentication);
}

function memberDelete({ authentication = {}, context }) {
  if (isAdmin(authentication)) return true;
  domain(context, authentication);
  return isCreatedBy(authentication);
}

const roleMember = {
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
  const {
    req: { session },
  } = context;
  if (!session.anyRead) {
    const _domain = domain(context, authentication);
    // console.log("anyRead cache for", _domain);
    if (isAdmin(authentication)) session.anyRead = true;
    session.anyRead = { of: user(_domain) };
  }
  return session.anyRead;
}

function anyCreate({ authentication = {}, context }) {
  return true;
}

function anyUpdate({ authentication = {}, context }) {
  if (isAdmin(authentication)) return true;
  return { of: user(domain(context, authentication)) };
}

function anyDelete({ authentication = {}, context }) {
  if (isAdmin(authentication)) return true;
  return { of: user(domain(context, authentication)) };
}
const roleAny = {
  name: "roleAny",
  read: anyRead,
  create: anyCreate,
  update: anyUpdate,
  delete: anyDelete,
};
/**
 * PAGE
 */
const modelPage = {
  name: "modelPage",
  read: sellerRead,
  create: sellerCreate,
  update: sellerUpdate,
  delete: sellerDelete,
};
/**
 * USER
 */
function userRead({ authentication = {}, context }) {
  const {
    req: { session },
  } = context;
  if (!session.userRead) {
    const _domain = domain(context, authentication);
    // console.log("userRead cache for", _domain);
    if (isAdmin(authentication)) return true;
    const { item = {} } = authentication;
    session.userRead = item.isSeller
      ? { id: authentication.item.id }
      : { domain: _domain };
  }
  return session.userRead;
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
  return false;
}
const modelUser = {
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
  modelPage,
  modelUser,
  domain,
  user,
};
