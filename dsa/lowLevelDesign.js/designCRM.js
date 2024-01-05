/*
Model Customer Relationship Management Software

DanCo competes with Salesforce to develop customer relationship management (CRM) software. CRM is a versatile tool for businesses to leverage historical data to drive future decisions. Companies use CRM to get a holistic view of past interactions, contact information, and relationship details with customers and other organizations. It allows them to perform data analytics on historical and aggregated information to identify valuable partnerships and marketing campaigns to continue, improve customer service, find the most valuable sales channels, and more.

For example, Walmazon, an e-commerce company, will use DanCo's CRM to analyze customer support conversations for the most effective way to communicate with customers and to view a customer's past support requests to determine if they're a difficult or long-time customer. Alternatively, FuelCo, a gas and oil refinery, will use DanCo's CRM to monitor the $/gallon rate of gasoline they charge each gas station to fill their underground tanks, the volume each station has purchased, and the date of those transactions. FuelCo uses this information to charge stations competitive rates and offer bulk discounts to long-time buyers.

DanCo's initial CRM product is very rudimentary, so they want to design for the most common use cases to appeal to a large user base. Once their software is proven, they'll expand into more niche information tracking and features.

Design DanCo's software as a set of classes with their attributes and APIs.

goal: crm data model is a conceptual formalization of the objects and their relationships used to manage the relationship between customer and the business organization

general goals:
  1. keep track of customer contact details such as name, email, phoneNumber
  2. keep track of customer transactions with business
  3. keep track of customer communication with business e.g. for support, notifications, inquiries

  business side:
  1. set up an account for an employee
  2. allow them to send notifications regarding tickets to customers
  3. allow them to interact with customers or other employees

  customer side:
  1. set up an account for customer
  2. allow them to contact support via tickets or email or chat
  3. allow them to buy products or consume service

/*
Kanchan
notes: MVC

Contact: MODEL
  contactId: int
  firstName: string
  lastName: string
  address: string
  email: string
  phoneNumber: int
  Company : String
  department: Department

  createTicket()
  startChat()
  sendEmail()

ContactServiceClass  VIEW
  addContact
  getContact
  deleteContact

CONTROLLER: api signature with query params

Department: enumeration
  Sales
  Marketing
  Developer
  Legal

Company
  companyId
  name
  address
  phoneNumber
  companyType: CompanyType

CompanyType
  INDIVIDUAL
  BUSINESS
  NON-PROFIT


Customer Extends Contact
  customerStatus: customerType

Employee Extends Contact
  department: string

Interactions
  interactionId: int
  date: dateTime
  notes: string
  contact: Contact +


CustomerType: enumeration
  NEW
  FORMER
  INTERNAL
  EXTERNAL
  POTENTIAL

Product
  id
  name
  type
  desc

Transactions
  transactionId
  Contact : contactId
  productId
  quantity
  amountPerunit
  date: dateTime
  remarks: string

ServiceLayerClass
  listTransactions()
  listInteractions()
  listTickets()
  listCustomerDetails(customerId)
  listAllCustomers()
  //CRUD operations

Communication
  communicationId
  senderId
  receiverId (??)

Email extends Communication
Chat extends Communication

Tickets
  ticketId
  customerId
  employeeId
  productId
  desc
  date


*/
