// create router function
module.exports = function(router) {
    var invtList = require('./controller');

// invtList Routes

// get and post request for /Invt endpoints
    router
    .route("/inventory")
    .get(invtList.listAllInvt)
    .post(invtList.createNewInvt);

// put and delete request for /Invt endpoints
    router
    .route("/inventorys/:id")
    .get(invtList.getInvt)
    .put(invtList.updateInvt)
    .delete(invtList.deleteInvt);
};