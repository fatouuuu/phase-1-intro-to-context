// Your code here
function createEmployeeRecord([firstName, familyName, title, payRate]){
    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payRate,
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeeRecords){
    let records = []
    for(const employee of employeeRecords){
        records.push(createEmployeeRecord(employee))
    }
  return records
}

function createTimeInEvent (record, timeStamp){
    let [date, time] = timeStamp.split(' ')
    const timeObj = {
        type: "TimeIn",
        hour: parseInt(time, 10),
        date: date,
    }
    record.timeInEvents.push(timeObj)
    return record
}

function createTimeOutEvent (record, timeStamp){
    let [date, time] = timeStamp.split(' ')
    const timeObj = {
        type: "TimeOut",
        hour: parseInt(time, 10),
        date: date,
    }
    record.timeOutEvents.push(timeObj)
    return record
}

function hoursWorkedOnDate (record){
    return (record.timeOutEvents[0].hour - record.timeInEvents[0].hour) / 100;
}

function wagesEarnedOnDate(record, ){
    let wage = 0
    wage += hoursWorkedOnDate(record) * record.payPerHour
    return wage
}

function allWagesFor(record){
    let wage = 0
    for (let event of record.timeInEvents) {
            pay += wagesEarnedOnDate(record, event.date)
        }
    return wage
}

function findEmployeeByFirstName(employeeRecords, firstName) {
    return employeeRecords.find(function(record){
      return record.firstName === firstName
    })
  }



