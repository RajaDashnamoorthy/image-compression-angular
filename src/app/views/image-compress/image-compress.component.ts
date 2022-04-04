import { Component, OnInit } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';


@Component({
  selector: 'app-image-compress',
  templateUrl: './image-compress.component.html',
  styleUrls: ['./image-compress.component.css']
})
export class ImageCompressComponent implements OnInit {

  constructor(private imageCompress: NgxImageCompressService) { }

  ngOnInit(): void {

  }
  file: any;
  filename: any;

  filesizemb: any;
  orgurl: any;


  change(event: any) {
    var filename: any;
     var height: any;
    this.file = event.target.files[0];
    //get and read file name
    this.filename = this.file['name'];

    //accesss file size in mb
    this.filesizemb = (this.file.size/(1024*1024)).toFixed(2);

    if (this.file) {
      //read the file
      var fileread = new FileReader();
      fileread.onload = (event: any) => {
        //show to image url
        this.orgurl = event.target.result;
        this.compressimg(this.orgurl, filename);
     let img = new Image();
        img.src = this.orgurl;
        alert(img.width)



      }
      //read img url link to insert into browser
      fileread.readAsDataURL(event.target.files[0]);


    }


  }


  //compress function
  img: any;
  imgaftercompress: any;
  imgname: any;
  sizeOfOriginalImage: any;
  sizeofcompressimg: any;
  imgcompressurl:any;
  compressimg(img, imgname) {
    var orientation = -1;
    this.imageCompress.compressFile(img, orientation, 50, 50).then(
      result => {
        this.sizeofcompressimg = this.imageCompress.byteCount(result) / (1024 * 1024)
        // create file from byte
        const imageName = imgname;
        this.imgaftercompress = result;
        this.imgcompressurl= result;

       const imageFile = new File([result], imageName, { type: 'image/jpeg' });

      })
  }


}
