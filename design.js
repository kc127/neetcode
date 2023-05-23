/*
Design a messaging service that can
1. get all the messages in your inbox
2. send a nessage to another person
3. delete a message sent (either from sent folder or inbox)
4. get a specific message

assumption
- does not have to real time
- messages can live in-memory (not-persisted)
- no worries about auth
- pre-populated list of names given

question
- 2 people vs 50 people vs n-people

*/

names = an array of unique list of names of receiver, senders

name = {nameId, firstName, lastName}

messagesHashMap = {name: {message1, message2, ......, messageN},
                   name2: {.....}}

message = {
  messageId,
  text
  sender
  receiver
  date
}


function getMessages(name) => return the list of messages that the input name has received
                              if successful 200
                              if error return 404

function sendMessage(sender, receiver, message) =>
    if receiver or sender don't exists in names array > return 404

    return 201 if successfully message sent
      construct message object and append it to messagesHashMap for this specific receiver
    return 400 if unable to send a message
      throw an exception message

function deleteMessage(messageId, receiver)
    getMessage(messageId, receiver)

    delete it
    if deleted successfully return 200
    else return 500 (a good catch all)


function getMessage(messageId, receiver)
  check if the receiver is in names
  if not return 404

  retrieve the messag e from messages HashMap for receiver
  if it does not exist return 404

