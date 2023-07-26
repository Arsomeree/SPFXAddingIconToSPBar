import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'MyToolsApplicationCustomizerStrings';

const LOG_SOURCE: string = 'MyToolsApplicationCustomizer';
//import * as $ from 'jquery';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IMyToolsApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class MyToolsApplicationCustomizer
  extends BaseApplicationCustomizer<IMyToolsApplicationCustomizerProperties> {

    
    

  public onInit(): Promise<void> {
    this.render();

    
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);



    console.log("Hello from MyToolsApplicationCustomizer");

    // let message: string = this.properties.testMessage;
    // if (!message) {
    //   message = '(No properties were provided.)';
    // }

    // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`).catch(() => {
    //   /* handle error */
    // });
console.log("didn't work ");
    return Promise.resolve();
  }
  private render() {
   


  //CREATE NEW HTML VARIABLE TO APPEND TO THE APP BAR
  var newHtml= `<li class="sp-appBar-linkLi sp-appBar-dividerElement"><div class="sp-appBar-linkLiDiv"><a aria-labelledby="sp-appbar-tooltiplabel-create" data-interception="off" id="sp-appBar-link-create" href="https://w6fx2.sharepoint.com/_layouts/15/spappbar.aspx?workload=create" role="button" class="sp-appBar-link" data-automation-id="sp-appBar-link-create" aria-expanded="false" aria-haspopup="dialog" style="display: flex; justify-content: center; align-items: center; color: rgb(96, 94, 92);"><i style="height: 22.7px; width: 22.7px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" class="svg_dd790ee3" focusable="false"><path d="M1664 1152h-128v704q0 40-15 75t-41 61-61 41-75 15q-40 0-75-15t-61-41-41-61-15-75v-704h-128v-128h256V475l-128-128V0h384v347l-128 128v549h256v128zm-384-859l64 65 64-65V128h-128v165zm128 859h-128v704q0 26 19 45t45 19q26 0 45-19t19-45v-704zM704 0q66 0 124 25t101 69 69 102 26 124q0 75-34 142t-94 113v1281q0 40-15 75t-41 61-61 41-75 15q-40 0-75-15t-61-41-41-61-15-75V575q-60-45-94-112t-34-143q0-66 25-124t68-101 102-69T704 0zm64 504q28-16 51-34t41-39 26-49 10-62q0-30-9-58t-26-52-41-42-52-28v180l-64 64-64-64V140q-29 10-52 28t-40 42-26 52-10 58q0 35 9 62t27 48 40 40 52 34v1352q0 26 19 45t45 19q26 0 45-19t19-45V504z"></path></svg><div class="sp-appBar-borderLeft"></div></i></a><div class="sp-appBar-tooltipDiv"><span class="sp-appBar-tooltip" role="tooltip" id="sp-appbar-tooltiplabel-create">Create</span></div></div></li>`





  //GET CLASS OF THE APP CONTAINER AND 
  var html=document.getElementsByClassName("sp-appBar-linkContainer")[0];

  //APPEND THE NEW HTML
  html.innerHTML += newHtml;



//RED APP BAR TEST
   // document.getElementById("sp-appBar").style.backgroundColor = "red";
    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
    }

    Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`).catch(() => {
      /* handle error */
    });
  }
 
}
console.log("didn't work 2 ");
  

