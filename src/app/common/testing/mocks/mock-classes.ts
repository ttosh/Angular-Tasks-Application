import { FlightModel, EmployeeModel, Flight, Task } from '../../../common/models/app.models';

export class MockFlight  {
  static mockFlightdata(): Flight {
    const flight = new Flight();
    flight.Aircraft = '3AC';
    flight.ActualArrival = '7/7/2017 1:00';
    flight.Airline = 'AA';
    return flight;
  }
}

export class MockEmployee {
  static employeeData(): EmployeeModel {
    const employeeData = new EmployeeModel();
    employeeData.EmployeeID = '941350';
    employeeData.FirstName = 'Timothy';
    employeeData.LastName = 'Tosh';
    employeeData.Station = 'TUL';
    return employeeData;
  }
}

export class MockTask {
  static mockTaskData(): Task {
    const mockTask = new Task();
    mockTask.TaskID = '1';
    mockTask.AssignedOn = '07/12/2017 03:30';
    mockTask.AssignedBy = 'Roger Waters';
    mockTask.AssignedTo = 'Reggie Brooks';
    mockTask.DiscrepancyShort = 'Short Discrepancy data!'
    return mockTask;
  }
}

export class MockFlightModel {
  static flightModelData(): FlightModel {
    const flightModel = new FlightModel();
    flightModel.Flights = new Array<Flight>();

    const flight: Flight = new Flight();
    flight.Aircraft = '3AC';
    flight.ActualArrival = '7/7/2017 1:00';
    flight.Airline = 'AA';

    const task: Task = new Task();
    task.TaskID = '1';
    task.AssignedOn = '07/12/2017 03:30';
    task.AssignedBy = 'Roger Waters';
    task.AssignedTo = 'Reggie Brooks';
    task.DiscrepancyShort = 'Short Discrepancy data!'

    task.Instructions = `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum justo eget imperdiet tempor.
      Ut eget lacus et est rutrum dictum quis in ipsum. Nunc venenatis posuere lacus, id rutrum velit dictum quis.
      Morbi suscipit purus id vestibulum egestas. Mauris ut tempor tortor. Quisque ac tellus blandit, pharetra est id,
      mattis dui. Aliquam semper gravida lectus et consequat. Duis in mi ac eros gravida condimentum vel ut quam. Cras
      placerat nunc vel feugiat interdum. Fusce eu est vel sem congue congue efficitur ac massa. In mattis quam turpis,
      a hendrerit ex accumsan aliquet. Nam eget neque eu metus tempor faucibus quis sed sapien. Vivamus laoreet sollicitudin
      aliquet. Etiam scelerisque venenatis ipsum eget laoreet.`;

    flight.Tasks = new Array<Task>();
    flight.Tasks[0] = task;
    flightModel.Flights[0] = flight;
    return flightModel;
  }
}

