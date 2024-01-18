/*
ParkCo is a parking management company providing a ticketing and traffic flow solution for parking lots and structures. ParkCo's clients use their products to facilitate efficient parking services for their customers. ParkCo wants to modernize its operations to remain competitive by providing its clients with software to quickly inform customers about the number and size of open spots.

Parking lot owners have many needs for managing their spaces. They use an automated entrance/exit ticket kiosk that tracks multiple spot sizes, like regular, compact, motorcycle-only, and handicap-only, to accommodate different vehicles. The drivers select the spot size, and the terminal uses it to calculate the cost based on the duration of their stay when they exit. You do not need to manage the entrance and exit barrier arms. The terminals must accurately display the remaining number of spots of each size.
Standard: 50, Compact: 17, Handicap: 6, Motorcycle: 3

Design ParkCo's software as a set of classes with their attributes and APIs.


//////////////////////////

Core Requirements:
1. Parking Lot should have the capacity to park vehicles.
2. Parking Spots can be of different sizes.
    i) regular
    ii) compact
    iii) motorcycle-only
    iv) handicap-only
3. System should inform customers (drivers) about the number and size of open spots in the form of a display.


Actors: System (Parking Lot), Clients (Business), Customers(Drivers)

Use Cases:
  System
    1. Assign Parking Spots to Vehicles
    2. Show available parking spots for different vehicles
    3. Show all used parking spots
    4. Make Parking spot available once customer removes vehicle
    5. Make Parking spot not available once customer parks vehicle

  Customer (Driver)
    1. Check if parking spot available for their vehicle type
    2. Park Vehicle if spot available for their vehicle type
    2. Remove Vehicle

Flow:
  Driver arrives
  Display Board shows available spots
  Driver selects the spot
  Driver exits

*/
// Enumeration vs Abstract Class
// Abstract class is a better idea because Enumeration is not scalable
// and violates Open Closed Principle (which states that classes can be extended but not modified)
// Enums okay for Vehicle and ParkingSpot here
Vehicle
  licenseNo
  assignParkingTicket()

ParkingSpot
  parkingSpotId
  isAvailable: boolean


Regular extends ParkingSpot

Compact extends ParkingSpot

Motorcycle extends ParkingSpot

Handicap extends ParkingSpot

DisplayBoard
  id
  parkingSpot: HashMap {parkingSpotType: [set of free spots]}
    Regular: Set[1, 2, 3, 4]
    Compact: Set [7, 10, 9, ]

  updateParkingSpotHashMap()

  showFreeSpot()


ParkingTicket
  ticketNo
  entranceTimeStamp
  exitTimeStamp
  amount
  vehicle: Vehicle
  parkingSpot: ParkingSpot

ParkingLotController
  id
  name
  address
  floors
  buildingNumber

  addEntrance(parkingTicket)
    update the availableParkingSpot hashMap
  addExit(parkingTicket)
    update the availableParkingSpot hashMap


/*
SpotSize:enumeration
    STANDARD
    COMPACT
    HANDICAP
    MOTORCYCLE

Terminal
    parkingLot: ParkingLot
    dispenseTicket(spotSize): Ticket?
    calculateCost(ticket): float

Ticket
    id: int
    spotSize: SpotSize
    parkingLot: ParkingLot
    entryTime: datetime

ParkingLot
    owner: string
    location: string
    ticketBooth: Terminal
    activeTickets: dict[int, Ticket]

    enter(spotSize): Ticket
    exit(ticket): void

    openStandardSpots: int
    openCompactSpots: int
    openHandicapSpots: int
    openMotorcycleSpots: int
    totalStandardSpots: int
    totalCompactSpots: int
    totalHandicapSpots: int
    totalMotorcycleSpots: int

    *retailTicketBooth: Terminal
    *employeeTicketBooth: Terminal
    *uTurnTerminal: Terminal


EXTENSIONS

1. Implement the logic to support multiple entrances and exits where drivers can take and return parking tickets through a ticketing terminal.

Although it's difficult to completely prevent real-world situations when cars enter the lot with zero spots remaining, the software solution should minimize overpromising as much as possible. Assume that the owners will use product solutions to accompany your software, like granting a free size upgrade, free parking for the first 5 minutes, or providing a U-turn lane so drivers can exit without payment.


2. Design for assigned parking spots.

    */