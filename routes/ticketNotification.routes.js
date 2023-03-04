const notificationController = require("../controllers/ticketNotification.controller")

module.exports = function (app) {
     app.post("/notifiService/api/notifications/", notificationController.acceptNotificationRequest)
     app.get("/notifiService/api/notifications/:id", notificationController.getNotificationStatus)
}