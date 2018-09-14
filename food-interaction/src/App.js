import React, { Component } from 'react';
import './App.css';
import MainMenu from './components/main-menu/MainMenu';
import SubPanel from "./components/sub-menu/sub-panel/SubPanel";

const model = getModelData();

class App extends Component {
  constructor() {
    super();
    this.state = {
      subPanel: undefined
    }
  }

  subPanelState(self) {
    this.setState(() => {
      return {
        subPanel: self.state.itemsState
      }
    });
  }

  render() {
    return (
      <div className="main-menu">
        <h3 className="main-menu__header">212 Thompson Route</h3>
        <MainMenu menu={{model}} setSubPanelState={(self)=> this.subPanelState(self)}/>
        <div className="sub-menu">
        </div>
        <div className="sub-menu__sub-panel">
          <SubPanel state={this.state.subPanel}/>
        </div>
      </div>
    );
  }
}

function getModelData() {
  return (
      [
        {
          "id": "5b7bfe58ee0c1be19742829d",
          "name": "McDonald's®",
          "duration": {
            "from": 10,
            "to": 20
          },
          "menu": {
            "12313": {"Cheeseburger Happy Meal": 8.79},
            "97684": {"Hamburger Happy Meal": 8.38},
            "32445": {"4pc. Chicken McNuggets": 7.48}
          },
          "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4AQbEwAd1W62jAAAAAJiS0dEAP+Hj8y/AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE2LTA0LTI3VDE5OjAwOjI5KzAwOjAwBQLJLwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNi0wNC0yN1QxOTowMDoyOSswMDowMHRfcZMAAAAZdEVYdFNvZnR3YXJlAE1pY3Jvc29mdCBPZmZpY2V/7TVxAAADO0lEQVRIS62WWUsrQRBGK+MWl7iLiqA+iI95MC9RxF/uP1AENwTBBUVcEHGL+3rqdk06M8mkI/fAMDO9VH1dXV0zue9fpAHPz89yfHwsn5+fMjY2JuPj464nm+vra7m4uJAoimR6elr6+vpcT5qGAk5PT2V3d1eNGIVCQRYXF91bfdbX1+Xm5sa9iXx9fcnc3Jxe9aha98AAztva2qRYLMry8rJ0dnbK09OTrK2tuVFpNjc35fb2Vtrb22VpaUkWFhbUxsHBgZyfn7tRtdQVsLGxoQ5nZmZkYmJCenp6pFwu61bg4OzszI2sQtgvLy+FgJZKJQ376OiozM/Pq6Dt7W03spaUgP39fQ37x8eHTjby+bwaxNje3p5rrbK1tSUdHR26TQMDA65VdBGIYt7Ozo5rrZISQNLlcrm6CTc7O6tRoJ9xBuFlr7kYk2RqakrnELlkytUIIPHYMwxNTk661irDw8Pxao6Ojlyr6B7Thji2LAm26CNCh4eHrvUfNQJOTk5UgB27eoyMjKhAtuj+/l5eX181OaG/v1/vSQYHB3UOtlmkTyzg/f1dKpWKhor95l4PBFgUOOuEn2cc0NcIxDHP/BixAIxZ+IeGhlxrGvoYQ6JeXV1p5rcyj7H4MmIBGKMTlX4WJ2ElGCJCbNXLy4s+N5tHH2NMuBELoPhgCOMcpSxIJowx3pxbeyOwaXPIHUMFWBKZsd7eXn1vhBkzQubQb5Ej0hQ0UAG8EBoMcVEFs6AyJgXQ1gzbYnzd3d1pmwogJCiDrq4uvWfR3d2dEkBbM0w4vmoEPDw8xBEIMfRXARxvE4BPUAGPj4/aSGdIBBjjC4CQeQgAfFktUAEUh1YF+LQqHF9cJGX09vamL0azBAQ7hj4h8xhj8/DJH1dkhQTo/IsAninHzfBt4xPfqQhkFZMsQgQwxheObxVghK7EMGPcOUXN8BfHolWAJaBBsQghdJyPFSLAJ74jvus+oYZDVpwkaRvfkf1iGa0Y5hhx+fuaRdI2viMMGKF7CRQVqh/3kO8A+LZZtH6cfv9Uv+1nhKRYWVmJK9b/hhWvrq5qQcI5/5gRn0ke+GPRhj/sbSismt8281UoFOQHcZThd8YX7kMAAAAASUVORK5CYII="
        },
        {
          "id": "5b7bfe5889ab5df2a2be0226",
          "name": "KFC (East Village)",
          "duration": {
            "from": 25,
            "to": 30
          },
          "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAATTSURBVFhH7ZdZTFVXFIZ/5qkINAg1yGwJBIWGpNHaYiSKECJqEQm2sS8+wEOBNCURX5TSxIhNEFPaSExMbSsVAogIMkSiMliGorWAIBEZTUHmeeZ0rc0mUOFwrybGh/ZLTvbe5559z7pr/WutfXUUAm8RXTm+Nf43QFUDv167BlcXFyzMz0NHVxdmpqaYmJhA89OnMDQ0hL6BAUBbF+gKCQ6GAa9fA1UDKior8fGOHXIFfBUXh97+fpw6cQJuW7bIu4tk5uTAxMQEdps2wdLSEg6bN0OXjNYG1afm5ubkDLhbXo4/Hj4UL4g/cwZBhw8jJTVVfgqEHjqE7u5ufODlBUsLC9Q1NKCypgbVtbWoefAAf9XXyyfXgD2wFndKS8XY0dWl7DtwQKmprVXyCgqUtvZ2cZ/CIcaVkCfk7N+UlpfL2WpUPaCjoyNGezs7bNiwAe5ubii5dw+ODg7iPrt8Ja1tbRgZHZWrZXpevIA9hUQN9UBJaczMzGB+YQE5eXn4PCxM3FuLP+vq0NTcLFfLsGidHB3lajX6clyN9ACLiVXfRwK8U1aGvMJCkREhBw+iiuLcPzAAV2dnNDQ2wnbjRrHnVdDoAX19fUxNTWGSroHBQez29UU3uZVf3Pn8uciI3IICHDt6FO9aWYk9K6Ewy5kKi1JYzd2yMjlTlO8uXFD8SYhZN26I9dK4ROOTJ2JMy8gQ4xLPWlsV0oBcrY26B2QImOjISJGWnFK/UIGibMDPaWmiVnx/8aIQ6O/V1fDbtUvuWKS9qws2GsKiMQQMa4CFpKenh4bHjxEeGiqqY29fH2bJsIamJly5ehXv2drKHYss/wR11A14ia+jotDb24tAf398m5goUsvMzAxjY2PwdHcXRr0MG6wJrULAeHp4CKVzSrIQvbduhb+fH05Ric7Nz0d7R4d8cpF68hQ/owmtPUCiRMDevTh3/jyaW1pgRTV/gYxJz8rC6Pg4BoaGEBUbK/Ke4SwxNzcX8/VQNcBQdrda6gEJZ8/iXHIyPtm5E/mZmZiengaVZKRevozxyUlRoD708RFCLbp9G4V0DZAB2qBqADeUjOxsVFRVobSiAl9GRAhR5VMhGh4ZQQx1xVvFxUhLTxfPsya4ZP9NTSmQPGVHJVwbVA3w2rYNYSEhIo1YTNzlHOztsY++/IekJDhRT4g8fhzxJ0+iu6cHjvSZMWVL7aNHoiT7eHvLb1ofdQ1QfJnfMjJgbGws4u3i5ISh4WGMk/K5OrZ3doqwmC41JhIuh+5WUZGooNqgeiApu38f/ME31P9ZcFyKZ2dnRW9gj/BLp6lRGRsZ4aPt22FJ7re2tsaPly7hWHg4Plunca1E1YAeynlOrVFqsdxSn1G75RScIQFyK56jo5rCazLq0/37YUiGGFEI4k6fRjKJ1pm8pQ0a/xdk5+biJ6pyuSQ234AAJCYkiDLMlZC9Ebhnj2hGJhQmhgV6ZcVpSSNswHokpaQoETExSvCRIwq1ZHGPGxP9UoUyRdkdFKS0UNN5XTQWouKSEpHjgyQ+roRc9yco92Ojo/EOlWIWZCPdY8aoIL0qevGEnK+CX8YHkS+o13t5eorDqQGp24IqHFdFPgF7UB/gwnP95k287+oKWxsbuVs7NGrgTaMxBG+a/7oBwD+4bS3/Ag5xowAAAABJRU5ErkJggg=="
        },
        {
          "id": "5b7bfe585b6f166bafcda840",
          "name": "Domino's Pizza",
          "duration": {
            "from": 30,
            "to": 45
          },
          "image": "data:image/png;base64,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"
        },
        {
          "id": "5b7bfe580d8e915e56833d79",
          "name": "Tribeca Bagels",
          "duration": {
            "from": 40,
            "to": 50
          },
          "image": "data:image/png;base64,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"
        },
        {
          "id": "5b7bfe58720f193c5be11a46",
          "name": "Burger King",
          "duration": {
            "from": 10,
            "to": 15
          },
          "image": "data:image/png;base64,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"
        }
      ]
  );
}

export default App;
