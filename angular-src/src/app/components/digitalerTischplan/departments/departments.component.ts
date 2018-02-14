import { Component, OnInit, Input, ViewChild, Output, EventEmitter, Injectable, AfterViewChecked } from '@angular/core';
import { Table } from '../../../../../Table';
import { TischplanService } from '../../../services/tischplan.service';
import {WaeldlerStubeKristallStubeComponent} from "./waeldler-stube-kristall-stube/waeldler-stube-kristall-stube.component";
import {TeestubeTeeloungeComponent} from "./teestube-teelounge/teestube-teelounge.component";
import {EdelweissKaminStubeComponent} from "./edelweiss-kamin-stube/edelweiss-kamin-stube.component";
import {BerglerStubeHubertusStubeComponent} from "./bergler-stube-hubertus-stube/bergler-stube-hubertus-stube.component";
import {BauernstubeComponent} from "./bauernstube/bauernstube.component";
import {AlleComponent} from "./alle/alle.component";

@Component({
  selector: 'app-departments',
  templateUrl: 'departments.component.html',
  styleUrls: ['../tischplan.component.css']
})
export class DepartmentsComponent  {


  @Input('tablesBauernstube') tablesBauernstube: Table[];
  @Input('showBauernStubnBool') showBauernStubnBool: boolean;
  @Input('tablesEdelweissKaminStube') tablesEdelweissKaminStube: Table[];
  @Input('showEdelweissBool') showEdelweissBool: boolean;
  @Input('tablesBerglerStubeHubertusStube') tablesBerglerStubeHubertusStube: Table[];
  @Input('showBerglerBool') showBerglerBool: boolean;
  @Input('tablesTeestubeTeelounge') tablesTeestubeTeelounge: Table[];
  @Input('showTeeStubeBool') showTeeStubeBool: boolean;
  @Input('tablesWaeldlerStubeKristallStube') tablesWaeldlerStubeKristallStube: Table[];
  @Input('showWaeldlerBool') showWaeldlerBool: boolean;
  @Input('tables') tables: any;
  @Input('term') term: string;
  @Input('showAlleBool') showAlleBool: boolean;
  @Input() tablesTempAbreise: any;
  @Output()
  dispensedBauernstube:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedBerglerStubeHubertusStube:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedEdelweissKaminStube:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedTeestubeTeelounge:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedWaeldlerStubeKristallStube:EventEmitter<any> = new EventEmitter();
  @Output()
  updateAzList:EventEmitter<any> = new EventEmitter();
  dateTodayGenerated: any;
  parts: any[] = [];
  date: any[] = [];
  parsedDate: any[] = [];
  tablesChangeBgColorIfAnreise: any;


  @ViewChild(AlleComponent)
  private alleComponent: AlleComponent;

  @ViewChild(WaeldlerStubeKristallStubeComponent)
  private waeldlerStubeKristallStubeComponent: WaeldlerStubeKristallStubeComponent;

  @ViewChild(TeestubeTeeloungeComponent)
  private teestubeTeeloungeComponent: TeestubeTeeloungeComponent;

  @ViewChild(EdelweissKaminStubeComponent)
  private edelweissKaminStubeComponent: EdelweissKaminStubeComponent;

  @ViewChild(BerglerStubeHubertusStubeComponent)
  private berglerStubeHubertusStubeComponent: BerglerStubeHubertusStubeComponent;

  @ViewChild(BauernstubeComponent)
  private bauernstubeComponent: BauernstubeComponent;

  constructor(private tischplanService: TischplanService) {
  }

  ngOnInit() {
  }

  occupied(table){
    console.log("table.j");
    console.log(table.j);
    console.log("table.table");
    console.log(table.table);
    this.occupy(table.table, table.j);
  }

  occupy(table, j) {
    this.tischplanService.dispenseTable(table).subscribe(response => {
      console.log("Dispense Table:");
      console.log(j);
      console.log("bgColor:" + JSON.stringify(response));
      console.log("bgColor:" + JSON.stringify(response[0].tables[j].bgColor));
      console.log("isBesetzt:" + JSON.stringify(response[0].tables[j].isBesetzt));
      if (response === null) {
        return;
      } else {
        if (response[0].tables[j].department === "berglerStubeHubertusStube") {
          this.dispensedBerglerStubeHubertusStube.emit(response[0].tables);
        }
        else if (response[0].tables[j].department === "Bauernstube") {
          this.dispensedBauernstube.emit(response[0].tables);
        }
        else if (response[0].tables[j].department === "waeldlerStubeKristallStube") {
          this.dispensedWaeldlerStubeKristallStube.emit(response[0].tables);
        }
        else if (response[0].tables[j].department === "edelweissKaminStube") {
          this.dispensedEdelweissKaminStube.emit(response[0].tables);
        }
        else if (response[0].tables[j].department === "teestubeTeelounge") {
          this.dispensedTeestubeTeelounge.emit(response[0].tables);
        }
      }
      this.updateAzList.emit();
    });

    this.tischplanService.addPlaceholder(table).subscribe(response => {
      console.log("Add placeholder!");
      console.log("Add placeholder! table ... " + JSON.stringify(table));
      console.log("placeholder:" + JSON.stringify(response[0].tables[j].placeholder));
      if (response === null) {
        return;
      } else {
        //console.log(this.tablesBerglerStubeHubertusStube[j].placeholder);
        if (response[0].tables[j].department === "berglerStubeHubertusStube") {
          this.tablesBerglerStubeHubertusStube[j].placeholder = response[0].tables[j].placeholder;
        }
        else if (response[0].tables[j].department === "Bauernstube") {
          this.tablesBauernstube[j].placeholder = response[0].tables[j].placeholder;
        }
        else if (response[0].tables[j].department === "waeldlerStubeKristallStube") {
          this.tablesWaeldlerStubeKristallStube[j].placeholder = response[0].tables[j].placeholder;
        }
        else if (response[0].tables[j].department === "edelweissKaminStube") {
          this.tablesEdelweissKaminStube[j].placeholder = response[0].tables[j].placeholder;
        }
        else if (response[0].tables[j].department === "teestubeTeelounge") {
          this.tablesTeestubeTeelounge[j].placeholder = response[0].tables[j].placeholder;
        }
      }
    });
  }

  addInformationToTable(dataString, arrayIndex) {
    console.log("dataString");
    console.log(dataString);
    this.tischplanService.addInformationToTable(dataString)
      .subscribe(response => {
        // let arrayIndex = response[1];
        console.log("RESPONSE addInformationToTable:" + JSON.stringify(response));
        if (response === null) {
          return;
        } else {
          if (response[0].department === "berglerStubeHubertusStube") {
            this.dispensedBerglerStubeHubertusStube.emit(response[0].tables);
          }
          else if (response[0].department === "Bauernstube") {
            this.dispensedBauernstube.emit(response[0].tables);
          }
          else if (response[0].department === "waeldlerStubeKristallStube") {
            this.dispensedWaeldlerStubeKristallStube.emit(response[0].tables);
          }
          else if (response[0].department === "edelweissKaminStube") {
            this.dispensedEdelweissKaminStube.emit(response[0].tables);
          }
          else if (response[0].department === "teestubeTeelounge") {
            this.dispensedTeestubeTeelounge.emit(response[0].tables);
            //this.tablesTeestubeTeelounge[arrayIndex] = response.tables[0];
          }
        }
        // console.log(this.tablesBerglerStubeHubertusStube[arrayIndex]);
      });
    this.updateAzList.emit();
  }


  occupyTableOnDrop(dataString, arrayIndex) {
    console.log("Occupy Table!");
    this.tischplanService.occupyTable(dataString)
      .subscribe(response => {
        //let arrayIndex = response[1];
        //console.log("arrayIndex:" + arrayIndex);
        //console.log("bgColor:" + JSON.stringify(response[0].tables[arrayIndex].bgColor));
        console.log("Response occupyTable:" + JSON.stringify(response));
        if (response === null) {
          return;
        } else {
          if (response.tables[0].department === "berglerStubeHubertusStube") {
            this.tablesBerglerStubeHubertusStube[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "Bauernstube") {
            this.tablesBauernstube[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "waeldlerStubeKristallStube") {
            this.tablesWaeldlerStubeKristallStube[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "edelweissKaminStube") {
            this.tablesEdelweissKaminStube[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "teestubeTeelounge") {
            this.tablesTeestubeTeelounge[arrayIndex] = response.tables[0];
          }
        }

        //console.log("bgColor:" + JSON.stringify(this.tablesBerglerStubeHubertusStube[arrayIndex]));
      });
    //console.log("placeholder:" + JSON.stringify(this.tablesBerglerStubeHubertusStube[arrayIndex]));
  }

  changeBgColorIfAnreise() {
    setTimeout(() => {
      this.tablesChangeBgColorIfAnreise = this.tablesTempAbreise;
      console.log('=================================================changeBgColorIfAnreise');
      console.log(this.tablesChangeBgColorIfAnreise);
      this.dateTodayGenerated = new Date();
      this.parts = [];
      this.parsedDate = [];
      this.date = [];


      for (let a = 0; a < this.tablesChangeBgColorIfAnreise.length; a++) {
        for (let b = 0; b < this.tablesChangeBgColorIfAnreise[a].tables.length; b++) {
          if (this.tablesChangeBgColorIfAnreise[a].tables[b].groups) {
            for (let c = 0; c < this.tablesChangeBgColorIfAnreise[a].tables[b].groups.length; c++) {
              if (this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue) {
                console.log('tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue: ' + c + " " + this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue);
                this.parts[0] = this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue.match(/(\d+)/g);
              } else {
                this.parts[0] = "undefined";
              }
              if (this.parts[0]) {
                this.date[0] = new Date(2018, this.parts[0][1] - 1, this.parts[0][0]);
                this.parsedDate[0] = String(this.date[0]).substring(0, 15);
              }
              // note parts[1]-1
              // console.log('parts[2]' + parts[2] + 'parts[1]' + (parts[1] - 1) + 'parts[0]' + parts[0]);
              // Mon May 31 2010 00:00:00
              // this.tablesRestaurant[j].anreiseValue
              let dateToday = String(this.dateTodayGenerated).substring(0, 15);
              console.log('Parsed Date --->: ' + this.parsedDate[0]);
              console.log('this.dateGenerated --->: ' + dateToday);
              if (dateToday.indexOf(this.parsedDate[0]) !== -1) {
                if (this.tablesChangeBgColorIfAnreise[a].department === "berglerStubeHubertusStube") {
                  if (this.tablesBerglerStubeHubertusStube[b]) {
                    this.tablesBerglerStubeHubertusStube[b].bgColor = "#0a7a74";
                  }
                }
                else if (this.tablesChangeBgColorIfAnreise[a].department === "Bauernstube") {
                  if (this.tablesBauernstube[b]) {
                    this.tablesBauernstube[b].bgColor = "#0a7a74";
                  }
                }
                else if (this.tablesChangeBgColorIfAnreise[a].department === "waeldlerStubeKristallStube") {
                  if (this.tablesWaeldlerStubeKristallStube[b]) {
                    this.tablesWaeldlerStubeKristallStube[b].bgColor = "#0a7a74";
                  }
                }
                else if (this.tablesChangeBgColorIfAnreise[a].department === "edelweissKaminStube") {
                  if (this.tablesEdelweissKaminStube[b]) {
                    this.tablesEdelweissKaminStube[b].bgColor = "#0a7a74";
                  }
                }
                else if (this.tablesChangeBgColorIfAnreise[a].department === "teestubeTeelounge") {
                  if (this.tablesTeestubeTeelounge[b]) {
                    this.tablesTeestubeTeelounge[b].bgColor = "#0a7a74";
                  }
                }
              }
            }
          }
        }
      }
    }, 1000);
  }

  transform(term) {
    if (this.showAlleBool) {
      this.alleComponent.transform(this.tables, term);
    } else if (this.showBauernStubnBool) {
      this.bauernstubeComponent.transform(this.tablesBauernstube, term);
    } else if (this.showBerglerBool) {
      this.berglerStubeHubertusStubeComponent.transform(this.tablesBerglerStubeHubertusStube, term);
    } else if (this.showEdelweissBool) {
      this.edelweissKaminStubeComponent.transform(this.tablesEdelweissKaminStube, term);
    } else if (this.showTeeStubeBool) {
      this.teestubeTeeloungeComponent.transform(this.tablesTeestubeTeelounge, term);
    } else if (this.showWaeldlerBool) {
      this.waeldlerStubeKristallStubeComponent.transform(this.tablesWaeldlerStubeKristallStube, term);

    }
  }
}
