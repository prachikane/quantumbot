const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {logger} = functions;

exports.getMessages = functions.https.onCall(async (data, context) => {
  try {
    logger.log("Request to retrieve messages for user: ", data);

    // Check for valid arguments
    if (!data.userId) {
      logger.log("Invalid arguments");
      throw new functions.https.HttpsError(
          "invalid-argument",
          "required field userid not found",
      );
    }

    const {userId} = data;

    // Get messages from the user collection
    const messagesSnapshot = await admin
        .firestore()
        .collection("chats")
        .doc(userId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .get();

    // Extract data from each document
    const messages = messagesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    logger.log("Retrieved messages successfully for userId: ", userId);

    return {status: "Success", messages};
  } catch (error) {
    logger.error("Error retrieving messages: ", error);

    throw new functions.https.HttpsError(
        "unknown",
        "An error occurred while retrieving messages",
        error.message,
    );
  }
});
