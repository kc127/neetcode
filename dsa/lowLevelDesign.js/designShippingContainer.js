BoxCo is a cargo logistics company providing shipping solutions for distribution centers along the supply chain.  BoxCo's clients use their products to transfer cargo between harbors, airports, and warehouses efficiently. BoxCo wants to modernize its operations to remain competitive by providing its clients with software to manage loading and unloading shipping containers at the loading dock quickly.

BoxCo offers multiple container sizes, like crates, pods, pallets, etc., to accommodate different infrastructure and cargo loads along the supply chain. Assume that both the containers and inventory are limited to rectangular volumes and that containers have a maximum weight limit.

Their clients also want a control panel at each distribution center to track incoming inventory and efficiently allocate them to available containers. The clients use a separate solution to ensure all products loaded into the containers go to the same destination so your system doesn't have to manage it.

Design BoxCo's software as a set of classes with their attributes and APIs.


class Container
- volume
- maxWeight
- size: Size
- destination: str
- isTransfered: boolean


class Size:Enum
crates
pallet

class InventoryTransfer
transferId
containerid
type:str
unit:int
date:



class ContainerService
getIncomingInventory()-> transferId
LoadingToContainer(id, units, inventory)

getAvailableContainer


Inventory
- currentInventory

ContainerService
- containers[]:



class DistributionCenterPanel

InventoryService: triages your incoming inventory
ContainerService: manages the containers
-loadInventory(Inventory): "returns exact container to load"
-



///////////////////////////////

Requirements:
1. System takes orders to deliver to a given destination.
2. Clients can track their order.
3. Orders will be shippped in containers with multiple sizes.

Cargo  // represents items that will be shipped
  cargoId: integer
  name: string
  price: integer
  volume: integer
  weight: integer

  setters/getters

Container // represents what will be used to ship/deliver an order
  containerId: integer
  capacity: integer
  ContainerSize: ContainerSize
  location: destination
  containerStatus: ContainerStatus

ContainerSize: enum
  CRATES
  PODS
  PALLETS

ContainerStatus: enum
  OCCUPIED
  AVAILABLE
  NOTWORKING

Destination  // respresents location or address
  longitude: integer
  latitude: integer

  setters/getters

ControlPanel
  getAvailableContainer(cargo) => return Container



###
ControlPanel
    containersOnDock: dict[str, ShippingContainer]
    // Function to pseudo-code
    // optimize for weight, volume, or a mixture of the two
    findOptimalContainer(Cargo): ShippingContainer

ShippingContainer
    length: int
    weight: int
    height: int
    maxWeight: int
    currentWeight: int
    state: ContainerState

Cargo
    length: int
    weight: int
    height: int
    isFragile: int
    tempRange: tuple[int, int]
    mustDeliverBy: DateTime

ContainerState:enumeration
    EMPTY
    UNLOADING
    LOADING
    FULL



    What were the most relevant design choices for this scenario?
    Knowing what you know now, would you design it differently?
    Which areas needed more attention to detail?
    Which areas were over-engineered or under-engineered?















