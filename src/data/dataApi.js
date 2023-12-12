export const senSorsApi = 
  [
    {
      "description": "It is a test Sensor 1 in DB",
      "id": 1,
      "name": "Test Sensor 1",
      "protocolType": "ANALOG"
    },
    {
      "description": "It is a test Sensor 2 in DB",
      "id": 2,
      "name": "Test Sensor 2",
      "protocolType": "ANALOG"
    }
  ]
 
export const ThingsApi = [
  {
    "descriptionThing": "It is a test thing in DB",
    "locationId": 1,
    "multiDataStreamDTOs": [
      {
        "multiDataStreamDescription": "It is a test MultiDataStream 1 in DB",
        "multiDataStreamId": 1,
        "multiDataStreamName": "Test MultiDataStream 1",
        "sensor": {
          "sensorDescription": "It is a test Sensor 1 in DB",
          "sensorId": 1,
          "sensorName": "Test Sensor 1"
        }
      },
      {
        "multiDataStreamDescription": "It is a test MultiDataStream 2 in DB",
        "multiDataStreamId": 2,
        "multiDataStreamName": "Test MultiDataStream 2",
        "sensor": {
          "sensorDescription": "It is a test Sensor 2 in DB",
          "sensorId": 2,
          "sensorName": "Test Sensor 2"
        }
      }
    ],
    "nameThing": "Test Thing",
    "station": {
      "description": "It is a test Station 1 in DB",
      "id": 1,
      "name": "Test Station 1",
      "node": "Test node",
      "status": "Active"
    },
    "thingId": 1
  },
  {
    "descriptionThing": "A new lemon tree for CIT",
    "locationId": 1,
    "multiDataStreamDTOs": [
      {
        "multiDataStreamDescription": "Test description!! 22",
        "multiDataStreamId": 3,
        "multiDataStreamName": "My test MultiDataStream 22",
        "sensor": {
          "sensorDescription": "It is a test Sensor 1 in DB",
          "sensorId": 1,
          "sensorName": "Test Sensor 1"
        }
      }
    ],
    "nameThing": "Lemon Tree CTU",
    "station": {
      "description": "Just a demonstration",
      "id": 2,
      "name": "Demo Station for Lemon Tree",
      "node": "Test node",
      "status": "Active"
    },
    "thingId": 2
  }
]

export const StaionsApi = [
  {
    "description": "It is a test Station 1 in DB",
    "id": 1,
    "name": "Test Station 1",
    "node": "Test node",
    "status": "Active",
    "thing": {
      "descriptionThing": "It is a test thing in DB",
      "locationId": 1,
      "multiDataStreamDTOs": [
        {
          "multiDataStreamDescription": "It is a test MultiDataStream 1 in DB",
          "multiDataStreamId": 1,
          "multiDataStreamName": "Test MultiDataStream 1",
          "sensor": {
            "sensorDescription": "It is a test Sensor 1 in DB",
            "sensorId": 1,
            "sensorName": "Test Sensor 1"
          }
        },
        {
          "multiDataStreamDescription": "It is a test MultiDataStream 2 in DB",
          "multiDataStreamId": 2,
          "multiDataStreamName": "Test MultiDataStream 2",
          "sensor": {
            "sensorDescription": "It is a test Sensor 2 in DB",
            "sensorId": 2,
            "sensorName": "Test Sensor 2"
          }
        },
      ],
      "nameThing": "Test Thing",
      "station": {
        "description": "It is a test Station 1 in DB",
        "id": 1,
        "name": "Test Station 1",
        "node": "Test node",
        "status": "Active"
      },
      "thingId": 1
    }
  },
  {
    "description": "Just a demonstration",
    "id": 2,
    "name": "Demo Station for Lemon Tree",
    "node": "Test node",
    "status": "Active",
    "thing": {
      "descriptionThing": "A new lemon tree for CIT",
      "locationId": 1,
      "multiDataStreamDTOs": [
        {
          "multiDataStreamDescription": "Test description!! 22",
          "multiDataStreamId": 3,
          "multiDataStreamName": "My test MultiDataStream 22",
          "sensor": {
            "sensorDescription": "It is a test Sensor 1 in DB",
            "sensorId": 1,
            "sensorName": "Test Sensor 1"
          }
        }
      ],
      "nameThing": "Lemon Tree CTU",
      "station": {
        "description": "Just a demonstration",
        "id": 2,
        "name": "Demo Station for Lemon Tree",
        "node": "Test node",
        "status": "Active"
      },
      "thingId": 2
    }
  }
]


export const multiDataStream =[
  {
    "configuration": {
      "resolution_bit": 10,
      "analog_pin": "A2",
      "action": "add",
      "voltage_reference": 5.1
    },
    "description": "It is a test MultiDataStream 1 in DB",
    "id": 1,
    "name": "Test MultiDataStream 1",
    "sensor": {
      "description": "It is a test Sensor 1 in DB",
      "id": 1,
      "name": "Test Sensor 1",
      "protocolType": "ANALOG"
    },
    "thing": {
      "description": "It is a test thing in DB",
      "id": 1,
      "locationId": 1,
      "name": "Test Thing",
      "station": {
        "description": "It is a test Station 1 in DB",
        "id": 1,
        "name": "Test Station 1",
        "node": "Test node",
        "status": "Active"
      }
    }
  },
  {
    "configuration": {
      "resolution_bit": 11,
      "analog_pin": "A2",
      "action": "edit",
      "voltage_reference": 5.2
    },
    "description": "It is a test MultiDataStream 2 in DB",
    "id": 2,
    "name": "Test MultiDataStream 2",
    "sensor": {
      "description": "It is a test Sensor 2 in DB",
      "id": 2,
      "name": "Test Sensor 2",
      "protocolType": "ANALOG"
    },
    "thing": {
      "description": "It is a test thing in DB",
      "id": 1,
      "locationId": 1,
      "name": "Test Thing",
      "station": {
        "description": "It is a test Station 1 in DB",
        "id": 1,
        "name": "Test Station 1",
        "node": "Test node",
        "status": "Active"
      }
    }
  },
  {
    "configuration": {
      "resolution_bit": 10,
      "analog_pin": "A2",
      "node_name": "Test Node",
      "action": "add",
      "voltage_reference": 5.1
    },
    "description": "Test description!! 22",
    "id": 3,
    "name": "My test MultiDataStream 22",
    "sensor": {
      "description": "It is a test Sensor 1 in DB",
      "id": 1,
      "name": "Test Sensor 1",
      "protocolType": "ANALOG"
    },
    "thing": {
      "description": "A new lemon tree for CIT",
      "id": 2,
      "locationId": 1,
      "name": "Lemon Tree CTU",
      "station": {
        "description": "Just a demonstration",
        "id": 2,
        "name": "Demo Station for Lemon Tree",
        "node": "Test node",
        "status": "Active"
      }
    }
  }
]