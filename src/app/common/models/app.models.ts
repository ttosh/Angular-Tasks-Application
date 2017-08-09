export class FlightModel {
    Flights: Flight[];
}
export class Flight {
    ArrivalFlightID: string;
    ActualArrival: string;
    Aircraft: string;
    Airline: string;
    ArrivalFlight: string;
    ArrivalGate: string;
    ArrivalStatus: string;
    DepartureFlight: string;
    DepartureGate: string;
    ScheduledDeparture: string;
    StationFrom: string;
    StationTo: string;
    Arrived: string;
    Status: string;
    Tasks: Task[];
}
export class Task {
    TaskID: string;
    ArrivalFlightID: string;
    Acknowledged: string;
    AssignedBy: string;
    AssignedOn: string;
    AssignedTo: string;
    Discrepancy: string;
    DiscrepancyShort: string;
    LastUpdated: string;
    Status: string;
    Instructions: string;
    CloseComments: string;
}

export class EmployeeModel {
    EmployeeID: string;
    FirstName: string;
    LastName: string;
    Station: string;
}
