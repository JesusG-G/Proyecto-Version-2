import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styles: [
    `
      .encabezado{
        text-align:center;
      }
      .cuerpo,.parrafo{
        text-align:justify;
      }
      #Documento{
        width: 21.59cm;
        height: 27.94cm;
        border:1px solid black;
        padding:1.27cm;
      }
      .checkBoxs{
        border:1px solid black;
        margin-bottom:5px;
      }
     `
  ]
})
export class DocumentoComponent implements AfterViewInit {

  solicitud:FormGroup=this.fb.group(
    {
      CheckBoxs: this.fb.group(
        {
          CheckBox_1:[false],
          CheckBox_2:[false],
          CheckBox_3:[false],
          CheckBox_4:[''],
          CheckBox_5:[false],
          CheckBox_6:[false],
          CheckBox_7:[false],
          CheckBox_8:[false],
          CheckBox_9:[false],
          CheckBox_10:[''],
          CheckBox_11:[false],
          CheckBox_12:[false]
        }
      )
    }
  );

  

  constructor(private fb: FormBuilder) {
    //this.downloadPDF();
   }
  ngAfterViewInit(): void {
    
  }
 

  /*public downloadPDF(): void {
    const doc = new jsPDF('p','pt','letter');
    const Data=document.getElementById("Documento");
  console.log(Data);
  }*/
  
  public downloadPDF() {
    // Extraemos e
    const DATA:any = document.getElementById("Documento");
    console.log(DATA);
    //this.generarPDF(DATA);
    const doc = new jsPDF('p', 'pt', 'letter');
    const options = {
      background: 'white',
      scale: 1
    };
    html2canvas(DATA).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 0;
      const bufferY = 0;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() ;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      doc.save('Ejemplo.pdf')
    })/*.then((docResult) => {
      docResult.save(`tutorial.pdf`);
    });*/
  }
  /*generarPDF(data:any){

    html2canvas(data).then(canvas=>{
      let imgWidht=290;
      let imgHeight=(canvas.height * imgWidht/canvas.width);
      const contentDataURK = canvas.toDataURL('img/png');
      let pdf = new jsPDF('p','cm','letter');
      let position=10;
      pdf.addImage(contentDataURK,'PNG',0,position,imgWidht,imgHeight);
      pdf.save('prueba.pdf');
    })
  }*/


  public imprimir(){
    this.downloadPDF();
  }
}

