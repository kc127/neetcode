
Customer
        +customerId: string
	+name: string
	+email: string
	+phoneNumber: integer
	+location: string
	+licenseNumber: integer
	+licenseStatus: licenseStatus
	-placeReservationRequest(location,startDate,endDate,vehicleSize)
          //returns requestId

Request
       +requestId : string
       +location : string
       +startDate : date
       +endDate : date
       +vehicleSize : VehicleSize
       +customerId : string

LicenseStatus
	+expired: string
	+active: string

Vehicle
	+vehicleId : string
	+vehicleSize: VehicleSize
	+licenseNumber: integer
	+mileage: integer
	+status: vehicleStatus
        +location: string
        -getAllVehicles()

VehicleStatus
	+reserved: string
	+available: string
	+notAvailable : string

VehicleSize
	+Sedan: string
	+SUV: string
	+Van: string
	+Truck: string

Reservations
	+reservationId: string
	+date: date
	-getAllReservations(location,vehicleSize="")
        -getAllActiveReservations(location,vehicleSize="")


CarRentalApp
	-checkAvailability(location, starDate, endDate, vehicleSize = "")
           // getAllVehicles and store it in an array
          // loop through all vehicles
                 // for each vehicle, if the status is available and location matches with input
                //location, return a list of available vehicles
       -makeReservation(RequestId)
          //call checkAvailability to get list of available vehicles
         // loop through available vehicles
             // for each vehicle, if it matches the requested vehicleSize
             // update the vehicle status to RESERVED
            // update startDate and endDate
            // return reservationId




Customer--*>Person