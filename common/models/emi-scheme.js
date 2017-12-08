module.exports = function (EmiScheme) {

  // EmiScheme.nestRemoting('Tenure');

  // Remote hook executed before the find for model EmiScheme is executed
  EmiScheme.beforeRemote('find', function (ctx, unused, next) {
    // checking if the query has a parameter of amount
    if (ctx.req.query && ctx.req.query.amount) {
      var amountQueryParsed = ctx.req.query.amount;
      ctx.req.query = { 'include': { 'relation': 'tenures', 'scope': { 'where': { 'amount': { 'gt': amountQueryParsed } } } } };
      // ctx.req.query = {"fields": ["bank", "months", "amount","rate"],    "include": {      "relation": "tenures",      "scope": {        "where": {"amount":1}      }    }};
      // ctx.args= {"include": { "relation": "tenures", "scope": { "where": { "amount": {"gt": amountQueryParsed} } } }};
    }
    next();
  });

  // Remote hook executed after the find for model EmiScheme is executed
  EmiScheme.afterRemote('find', function (ctx, unused, next) {
    // console.log("RESULT IS : ", ctx.res);
    next();
  });

  // Remote hook executed before the loadCsv remote method for model EmiScheme is executed
  EmiScheme.beforeRemote('loadCsv', function (ctx, unused, next) {
    console.info('Printing ctx before remote of import');
  });
};
