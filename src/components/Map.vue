<template>
    <div>
        <div class="row">
          <div class="col-lg-4"> 
          <button type="button" class="btn btn-block btn-outline-info">Info</button>
          </div>
          <div class="col-lg-4"> 
          <button type="button" class="btn btn-block btn-outline-info">Info</button>
          </div>
          <div class="col-lg-4"> 
          <button type="button" class="btn btn-block btn-outline-info">Info</button>
          </div>
        </div>

        <div class="row" style="margin-top:20px">
          <div class="col-lg-4">
            <div class="card card-outline card-info">
              <div class="card-header">
                <h3 class="card-title">EC</h3>
                <span>test</span>
                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-toggle="modal" data-target="#modal-xlEC" @click="ECpath()"><i class="fa fa-pencil-square-o"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="maximize"><i class="fa fa-expand"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fa fa-minus"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fa fa-times"></i></button>
                </div>
              </div>
              <div class="card-body" id="ECMap">
                
                <!-- ECMap -->

              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-outline card-info">
              <div class="card-header">
                <h3 class="card-title">NMC</h3>
                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-toggle="modal" data-target="#modal-xlNMC"><i class="fa fa-pencil-square-o"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="maximize"><i class="fa fa-expand"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fa fa-minus"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fa fa-times"></i></button>
                </div>
              </div>
              <div class="card-body" id="NMCMap">

                <!-- NMCMap -->

              </div>
            </div>
          </div>
           <div class="col-lg-4">
            <div class="card card-outline card-info">
              <div class="card-header">
                <h3 class="card-title">MESO</h3>
                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-toggle="modal" data-target="#modal-xlMESO" @click="MESOpath()"><i class="fa fa-pencil-square-o"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="maximize"><i class="fa fa-expand"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fa fa-minus"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fa fa-times"></i></button>
                </div>
              </div>
              <div class="card-body" id="MESOMap">
                
                <!-- MESOMap -->

              </div>
            </div>
          </div>
        </div>
        <!-- /.row -->
        <div class="row">
          <div class="col-lg-4">
            <div class="card card-outline card-info">
              <div class="card-header">
                <h3 class="card-title">NCEP</h3>
                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-toggle="modal" data-target="#modal-xlNCEP" @click="NCEPpath()"><i class="fa fa-pencil-square-o"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="maximize"><i class="fa fa-expand"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fa fa-minus"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fa fa-times"></i></button>
                </div>
              </div>
              <div class="card-body" id="NCEPMap">
                
                <!-- NCEPMap -->

              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-outline card-info">
              <div class="card-header">
                <h3 class="card-title">RJTD</h3>
                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-toggle="modal" data-target="#modal-xlRJTD" @click="RJTDpath()"><i class="fa fa-pencil-square-o"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="maximize"><i class="fa fa-expand"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fa fa-minus"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fa fa-times"></i></button>
                </div>
              </div>
              <div class="card-body" id="RJTDMap">
                
                <!-- RJTDMap -->

              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-outline card-warning">
              <div class="card-header">
                <h3 class="card-title">Default</h3>
                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fa fa-minus"></i>
                  </button>
                </div>
              </div>
              <div class="card-body" id="MapDefault">
                <!-- chart -->
                <div id="container"></div>
              </div>   

            </div>
          </div>
          <!-- /.col -->
        </div> 
         <!-- /.row       -->

        <!-- Modal-lg -->
        <div class="modal fade" id="modal-xlEC">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">EC Config</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <!--EC Edit alert body -->
                <form role="form">
                  <div class="row">
                    <div class="col-sm-3">
                      <!-- date picker -->
                      <label>Date</label>
                      <div id="ECdate" class="block">
                        <el-date-picker
                          value-format = "yyyyMMdd"
                          v-model="DateEC"
                          type="date"
                          placeholder="选择日期"
                          :picker-options="pickerOptions">
                        </el-date-picker>
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <!-- select -->
                      <div class="form-group">
                        <label>Data times</label>
                        <select class="custom-select" v-model="DataTimes" @change="getFileNames()">
                          <option>12</option>
                          <option>00</option>
                        </select>
                      </div>
                    </div>
                    <!-- File Names -->
                    <div class="col-sm-7">
                      <!-- select -->
                      <div class="form-group">
                        <label>File Names</label>
                        <select class="custom-select" v-model="Arrindex" @change="getElements();InputURLVal()">
                          <option v-for="(item,index) in nameArr" :key="index" :value="item">{{item}}</option>
                        </select>
                      </div>
                    </div>                    
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <!-- Select multiple-->
                      <div class="form-group">
                        <label>Elements</label>
                        <select multiple class="custom-select">
                          <option>{{ECconfigEl}}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label" for="inputWarning"><i class="fa fa-i-cursor"></i> Input with URL</label>
                        <input type="text" class="form-control is-warning"  v-model="InputWithURL" id="inputWarning" placeholder="waiting ..." disabled>
                      </div>
                    </div>
                  </div>
                </form>
                <!-- form end -->
              </div>
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="aa()">Save changes</button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
      <!-- /.modal -->
      <!-- Modal-lgNMC -->
        <div class="modal fade" id="modal-xlNMC">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">NMC Config</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <!--NMC Edit alert body -->
                <form role="form">
                  <div class="row">
                    <div class="col-sm-3">
                      <!-- date picker -->
                      <label>Date</label>
                      <div class="block">
                        <el-date-picker
                          value-format = "yyyyMMdd"
                          v-model="DateEC"
                          type="date"
                          placeholder="选择日期"
                          :picker-options="pickerOptions">
                        </el-date-picker>
                      </div>
                    </div>

                    <div class="col-sm-2">
                      <!-- select -->
                      <div class="form-group">
                        <label>Data times</label>
                        <select class="custom-select" v-model="DataTimes">
                          <option>12</option>
                          <option>00</option>
                        </select>
                      </div>
                    </div>
                    <!-- File Names -->
                    <div class="col-sm-7">
                      <!-- select -->
                      <div class="form-group">
                        <label>File Names</label>
                        <select class="custom-select">
                          <option>NAFP_ECMF_FTM_VIS_LNO_GLB_20191201120000_01200-01800.NC</option>
                          <option>NAFP_ECMF_FTM_VIS_LNO_GLB_20191201060000_00600-01200.NC</option>
                        </select>
                      </div>
                    </div>                    
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <!-- Select multiple-->
                      <div class="form-group">
                        <label>Elements</label>
                        <select multiple class="custom-select">
                          <option>Visibility</option>
                          <option>Total precipitation</option>
                          <option>cloud_area_fraction</option>
                          <option>Skin temperature</option>
                          <option>option 5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label" for="inputWarning"><i class="fa fa-i-cursor"></i> Input with URL</label>
                        <input type="text" class="form-control is-warning" id="inputWarning" placeholder="waiting ..." disabled>
                      </div>
                    </div>
                  </div>
                </form>
                <!-- form end -->
              </div>
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
      <!-- /.modal-NMC -->
            <!-- Modal-lgMESO -->
        <div class="modal fade" id="modal-xlMESO">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">MESO Config</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <!--MESO Edit alert body -->
                <form role="form">
                  <div class="row">
                    <div class="col-sm-3">
                      <!-- date picker -->
                      <label>Date</label>
                      <div class="block">
                        <el-date-picker
                          value-format = "yyyyMMdd"
                          v-model="DateMESO"
                          type="date"
                          placeholder="选择日期"
                          :picker-options="pickerOptions">
                        </el-date-picker>
                      </div>
                    </div>

                    <div class="col-sm-2">
                      <!-- select -->
                      <div class="form-group">
                        <label>Data times</label>
                        <select class="custom-select" v-model="MESODataTimes" @change="getMESONames()">
                          <option>12</option>
                          <option>00</option>
                        </select>
                      </div>
                    </div>
                    <!-- File Names -->
                    <div class="col-sm-7">
                      <!-- select -->
                      <div class="form-group">
                        <label>File Names</label>
                        <select class="custom-select" v-model="MESOArrindex" @change="getMESOElements();MESOInputURLVal()">
                          <option v-for="(item,index) in MESOnameArr" :key="index" :value="item">{{ item }}</option>
                        </select>
                      </div>
                    </div>                    
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <!-- Select multiple-->
                      <div class="form-group">
                        <label>Elements</label>
                        <select multiple class="custom-select">
                          <option v-for="(item,index) in MESOconfigEl" :key="index" :value="item">{{ item }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label" for="inputWarning"><i class="fa fa-i-cursor"></i> Input with URL</label>
                        <input type="text" class="form-control is-warning" v-model="MESOInputWithURL" id="inputWarning" placeholder="waiting ..." disabled>
                      </div>
                    </div>
                  </div>
                </form>
                <!-- form end -->
              </div>
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
      <!-- /.modal-MESO -->
            <!-- Modal-lgNCEP -->
        <div class="modal fade" id="modal-xlNCEP">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">NCEP Config</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <!--MESO Edit alert body -->
                <form role="form">
                  <div class="row">
                    <div class="col-sm-3">
                      <!-- date picker -->
                      <label>Date</label>
                      <div class="block">
                        <el-date-picker
                          value-format = "yyyyMMdd"
                          v-model="DateNCEP"
                          type="date"
                          placeholder="选择日期"
                          :picker-options="pickerOptions">
                        </el-date-picker>
                      </div>
                    </div>

                    <div class="col-sm-2">
                      <!-- select -->
                      <div class="form-group">
                        <label>Data times</label>
                        <select class="custom-select" v-model="NCEPDataTimes" @change="getNCEPNames()">
                          <option>18</option>
                          <option>12</option>
                          <option>06</option>
                          <option>00</option>
                        </select>
                      </div>
                    </div>
                    <!-- File Names -->
                    <div class="col-sm-7">
                      <!-- select -->
                      <div class="form-group">
                        <label>File Names</label>
                        <select class="custom-select" v-model="NCEPArrindex" @change="getNCEPElements(),NCEPInputURLVal()">
                          <option v-for="(item,index) in NCEPnameArr" :key="index" :value="item">{{ item }}</option>
                        </select>
                      </div>
                    </div>                    
                  </div>
                   <div class="row">
                    <div class="col-sm-12">
                      <!-- Select multiple-->
                      <div class="form-group">
                        <label>Elements</label>
                        <select multiple class="custom-select">
                          <option v-for="(item,index) in NCEPconfigEl" :key="index" :value="item">{{ item }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label" for="inputWarning"><i class="fa fa-i-cursor"></i> Input with URL</label>
                        <input type="text" class="form-control is-warning" v-model="NCEPInputWithURL" id="inputWarning" placeholder="waiting ..." disabled>
                      </div>
                    </div>
                  </div>
                </form>
                <!-- form end -->
              </div>
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
      <!-- /.modal-NCEP -->
            <!-- Modal-lgRJTD -->
        <div class="modal fade" id="modal-xlRJTD">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">RJTD Config</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <!--MESO Edit alert body -->
                <form role="form">
                  <div class="row">
                    <div class="col-sm-3">
                      <!-- date picker -->
                      <label>Date</label>
                      <div class="block">
                        <el-date-picker
                          value-format = "yyyyMMdd"
                          v-model="DateRJTD"
                          type="date"
                          placeholder="选择日期"
                          :picker-options="pickerOptions">
                        </el-date-picker>
                      </div>
                    </div>

                    <div class="col-sm-2">
                      <!-- select -->
                      <div class="form-group">
                        <label>Data times</label>
                        <select class="custom-select" v-model="RJTDDataTimes" @change="getRJTDNames()">
                          <option>18</option>
                          <option>12</option>
                          <option>06</option>
                          <option>00</option>
                        </select>
                      </div>
                    </div>
                    <!-- File Names -->
                    <div class="col-sm-7">
                      <!-- select -->
                      <div class="form-group">
                        <label>File Names</label>
                        <select class="custom-select" v-model="RJTDArrindex" @change="getRJTDElements(),RJTDInputURLVal()">
                          <option v-for="(item,index) in RJTDnameArr" :key="index" :value="item">{{ item }}</option>
                        </select>
                      </div>
                    </div>                    
                  </div>

                  <div class="row">
                    <div class="col-sm-12">
                      <!-- Select multiple-->
                      <div class="form-group">
                        <label>Elements</label>
                        <select multiple class="custom-select">
                          <option v-for="(item,index) in RJTDconfigEl" :key="index" :value="item">{{ item }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label" for="inputWarning"><i class="fa fa-i-cursor"></i> Input with URL</label>
                        <input type="text" class="form-control is-warning" v-model="RJTDInputWithURL" id="inputWarning" placeholder="waiting ..." disabled>
                      </div>
                    </div>
                  </div>
                </form>
                <!-- form end -->
              </div>
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
      <!-- /.modal-RJTD -->
    </div>
    <!-- /.container-fluid -->
</template>

<script>

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import '../assets/js/leaflet.ChineseTmsProviders'
import axios from 'axios/dist/axios'
import x2js from 'x2js/dist/x2js.min.js'
import Highcharts from 'highcharts'

export default {
    name: 'Map',
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        //时间控件
        DateEC: '',
        DateMESO:'',
        DateNCEP:'',
        DateRJTD:'',
        //时次控件
        DataTimes: '',
        MESODataTimes:'',
        NCEPDataTimes:'',
        RJTDDataTimes:'',
        URLpath: '',
        //文件名选择控件
        nameArr:[],
        MESOnameArr:[],
        NCEPnameArr:[],
        RJTDnameArr:[],
        Arrindex:'',
        MESOArrindex:'',
        NCEPArrindex:'',
        RJTDArrindex:'',
        MESOEleindex:[],
        //各模式 NCSS 路径
        NCSSpath:'',
        MESONCSSpath:'',
        NCEPNCSSpath:'',
        RJTDNCSSpath:'',
        //要素选择控件
        ECconfigEl:'',
        MESOconfigEl:[],
        NCEPconfigEl:[],
        RJTDconfigEl:[],
        //各模式 wms 服务URL
        InputWithURL:'',
        MESOInputWithURL:'',
        NCEPInputWithURL:'',
        RJTDInputWithURL:'',
      };
    },
    mounted(){
        this.initMap();
        this.Charts();
    },
    created(){
      this.Arrindex = this.nameArr[0]
      this.MESOArrindex = this.MESOnameArr[0]
      this.NCEPArrindex = this.NCEPArrindex[0]
      this.RJTDArrindex = this.RJTDArrindex[0]
    },
    methods:{
        ECpath(URLpath,NCSSpath){
          this.URLpath = 'http://10.16.48.234:8085/thredds/catalog/testAll/eccodes/NAFP/ECMWF/HRES/'
          this.NCSSpath = 'http://10.16.48.234:8085/thredds/ncss/testAll/eccodes/NAFP/ECMWF/HRES/'
        },
        MESOpath(URLpath){
          this.URLpath = 'http://10.16.48.234:8085/thredds/catalog/testAll/eccodes/NAFP/CMA/GRAPES_MESO/'
          this.MESONCSSpath = 'http://10.16.48.234:8085/thredds/ncss/testAll/eccodes/NAFP/CMA/GRAPES_MESO/'
        },
        NCEPpath(URLpath){
          this.URLpath = 'http://10.16.48.234:8085/thredds/catalog/testAll/eccodes/NAFP/NCEP/GFS/0p25/'
          this.NCEPNCSSpath = 'http://10.16.48.234:8085/thredds/ncss/testAll/eccodes/NAFP/NCEP/GFS/0p25/'
        },
        RJTDpath(URLpath){
          this.URLpath = 'http://10.16.48.234:8085/thredds/catalog/testAll/eccodes/NAFP/JMA/GSM/0p25/'
          this.RJTDNCSSpath = 'http://10.16.48.234:8085/thredds/ncss/testAll/eccodes/NAFP/JMA/GSM/0p25/'
        },
        InputURLVal(InputWithURL){
          this.InputWithURL = 'http://10.16.48.234:8085/thredds/wms/testAll/eccodes/NAFP/ECMWF/HRES/' + this.DateEC + '/' + this.DataTimes + '/' + this.Arrindex + '?service=WMS'
        },
        MESOInputURLVal(MESOInputWithURL){
          this.MESOInputWithURL = 'http://10.16.48.234:8085/thredds/wms/testAll/eccodes/NAFP/CMA/GRAPES_MESO/' + this.DateMESO + '/' + this.MESODataTimes + '/' + this.MESOArrindex + '?service=WMS&version=1.3.0&request=GetCapabilities'
        },
        NCEPInputURLVal(NCEPInputWithURL){
          this.NCEPInputWithURL = 'http://10.16.48.234:8085/thredds/wms/testAll/eccodes/NAFP/NCEP/GFS/0p25/' + this.DateNCEP + '/' + this.NCEPDataTimes + '/' + this.NCEPArrindex + '?service=WMS&version=1.3.0&request=GetCapabilities'
         },
        RJTDInputURLVal(RJTDInputWithURL){
          this.RJTDInputWithURL = 'http://10.16.48.234:8085/thredds/wms/testAll/eccodes/NAFP/JMA/GSM/0p25/' + this.DateRJTD + '/' + this.RJTDDataTimes + '/' + this.RJTDArrindex + '?service=WMS&version=1.3.0&request=GetCapabilities'
         },
        initMap(){
            var ECMap = L.map('ECMap').setView([39.89945,106.40769], 3);
              L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                  maxZoom: 18,
                  id: 'mapbox.streets'
              }).addTo(ECMap);
            var ECWms = 'http://10.16.48.234:8085/thredds/wms/testAll/eccodes/NAFP/ECMWF/HRES/20191125/12/NAFP_ECMF_FTM_VIS_LNO_GLB_20191201060000_00600-01200.NC?service=WMS'
            var ECLay = L.tileLayer.wms(ECWms, {
                    layers: 'p3020',
                    styles: 'boxfill/rainbow',
                    opacity: 0.5,
                    format: 'image/png',
                    transparent: true,
                    colorscalerange: '0, 100000'
                });
                ECLay.addTo(ECMap);

            var NMCMap = L.map('NMCMap').setView([39.89945,106.40769], 3);
              L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGRvdSIsImEiOiJjamVwY3BoY3EwOGs2MnFsbHo1bzA0eHpnIn0.5SasKtNtzLg_Nbu-CGU8rA', {
                  maxZoom: 18,
                  id: 'mapbox.streets'
              }).addTo(NMCMap);
            var NMCWms = 'http://10.16.48.234:8085/thredds/wms/testAll/eccodes/NAFP/CMA/GRAPES_MESO/20191210/00/Z_NAFP_C_BABJ_20191210000000_P_CNPC-GRAPES-RMFS-FCSTER-07800.grib2?service=WMS'
            var NMCLay = L.tileLayer.wms(NMCWms, {
                    layers: 'wind @ Specified height level above ground',
                    styles: 'contour/Frainbow',
                    opacity: 1,
                    format: 'image/png',
                    transparent: true,
                    colorscalerange: '0, 55'
                });
                NMCLay.addTo(NMCMap);

            var MESOMap = L.map('MESOMap').setView([39.89945,106.40769], 3);
              L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGRvdSIsImEiOiJjamVwY3BoY3EwOGs2MnFsbHo1bzA0eHpnIn0.5SasKtNtzLg_Nbu-CGU8rA', {
                  maxZoom: 18,
                  id: 'mapbox.streets'
              }).addTo(MESOMap);
            var MESOWms = 'http://10.16.48.234:8085/thredds/wms/testAll/eccodes/NAFP/CMA/GRAPES_MESO/20191126/00/Z_NAFP_C_BABJ_20191126000000_P_CNPC-GRAPES-RMFS-FCSTER-08400.grib2?service=WMS'
            var MESOLay = L.tileLayer.wms(MESOWms, {
                    layers: 'wind @ Specified height level above ground',
                    styles: 'barb/occam',
                    opacity: 0.5,
                    format: 'image/png',
                    transparent: true,
                    colorscalerange: '-10, 50'
                });
                MESOLay.addTo(MESOMap);

            var NCEPMap = L.map('NCEPMap').setView([39.89945,106.40769], 3);
              L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGRvdSIsImEiOiJjamVwY3BoY3EwOGs2MnFsbHo1bzA0eHpnIn0.5SasKtNtzLg_Nbu-CGU8rA', {
                  maxZoom: 18,
                  id: 'mapbox.streets'
              }).addTo(NCEPMap);
            var NCEPWms = 'http://10.16.48.234:8085/thredds/wms/testAll/eccodes/NAFP/NCEP/GFS/0p25/20191210/00/W_NAFP_C_KWBC_20191210000000_P_gfs.t00z.pgrb2.0p25.f156.bin?service=WMS'
            var NCEPLay = L.tileLayer.wms(NCEPWms, {
                    layers: 'Apparent_temperature_height_above_ground',
                    styles: 'boxfill/rainbow',
                    opacity: 0.5,
                    format: 'image/png',
                    transparent: true,
                    colorscalerange: '0, 400'
                });
                NCEPLay.addTo(NCEPMap);

            var RJTDMap = L.map('RJTDMap').setView([39.89945,106.40769], 3);
              L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGRvdSIsImEiOiJjamVwY3BoY3EwOGs2MnFsbHo1bzA0eHpnIn0.5SasKtNtzLg_Nbu-CGU8rA', {
                  maxZoom: 18,
                  id: 'mapbox.streets'
              }).addTo(RJTDMap);
            var RJTDWms = 'http://10.16.48.234:8085/thredds/wms/testAll/eccodes/NAFP/JMA/GSM/0p25/20191210/18/W_NAFP_C_RJTD_20191210180000_GSM_GPV_Rra2_Gll0p25deg_Lsurf_FD0218_grib2.bin.gz?service=WMS'
            var RJTDLay = L.tileLayer.wms(RJTDWms, {
                    layers: 'High_cloud_cover_surface',
                    styles: 'boxfill/rainbow',
                    opacity: 0.5,
                    format: 'image/png',
                    transparent: true,
                    colorscalerange: '0, 100'
                });
                RJTDLay.addTo(RJTDMap);
            var Maps = [ECMap, NMCMap, MESOMap, NCEPMap, RJTDMap]
            function maplink(e){              
                var _this = this
                Maps.map(function(t){
                    t.setView(_this.getCenter(), _this.getZoom())
                })
            }
            Maps.map(function(t){
              t.on({drag:maplink, zoom:maplink, click:maplink})
            })
            function mapclick(e){
              var _this = this
              // console.log(e.latlng.lat)
              L.marker([e.latlng.lat,e.latlng.lng]).addTo(ECMap)
                    .bindPopup('lat:' + e.latlng.lat + 'lng:' + e.latlng.lng)
                    .openPopup()
              L.marker([e.latlng.lat,e.latlng.lng]).addTo(NMCMap)
                    .bindPopup('lat:' + e.latlng.lat + 'lng:' + e.latlng.lng)
                    .openPopup()
              L.marker([e.latlng.lat,e.latlng.lng]).addTo(MESOMap)
                    .bindPopup('lat:' + e.latlng.lat + 'lng:' + e.latlng.lng)
                    .openPopup()
              L.marker([e.latlng.lat,e.latlng.lng]).addTo(NCEPMap)
                    .bindPopup('lat:' + e.latlng.lat + 'lng:' + e.latlng.lng)
                    .openPopup()
              L.marker([e.latlng.lat,e.latlng.lng]).addTo(RJTDMap)
                    .bindPopup('lat:' + e.latlng.lat + 'lng:' + e.latlng.lng)
                    .openPopup()
            }
            Maps.map(function(t){
              t.on({click:mapclick})
            })
        },
        //ECconfig 配置页面接口
        getFileNames(){
          // axios.get('http://10.16.48.234:8085/thredds/catalog/testAll/eccodes/NAFP/ECMWF/HRES/20190514/12/catalog.xml')
          // console.log(this.URLpath + this.DateEC + '/' + this.DataTimes + '/' + 'catalog.xml')
          var _this = this
          _this.nameArr.length = 0
          const rLoading = this.openLoading();
          axios.get(this.URLpath + this.DateEC + '/' + this.DataTimes + '/' + 'catalog.xml')
          .then(function(ECData){
            var x2jsxml = new x2js()
            var ECObj = x2jsxml.xml2js(ECData.data)
            var dataset = ECObj.catalog.dataset.dataset
            for (let i = 0; i < dataset.length; i++) {
              _this.nameArr.push(dataset[i]._name)
              rLoading.close()
            }
          })
          .catch(function(err){
            console.log(err)
          })
        },
        //<-------getFileNames   end---------->
        getElements(){
          var _this = this
          const rLoading = this.openLoading();
          axios.get(this.NCSSpath + this.DateEC + '/' + this.DataTimes + '/' + this.Arrindex + '/' + 'dataset.xml')
          .then(function(ElementsData){
            var x2jsxml = new x2js()
            var ElementsObj = x2jsxml.xml2js(ElementsData.data)
            _this.ECconfigEl = ElementsObj.gridDataset.gridSet.grid._desc
            rLoading.close()
          })
          .catch(function(err){
            console.log(err)
          })
        },
        //MESOconfig 配置页面接口
        getMESONames(){
          var _this = this
          _this.MESOnameArr.length = 0
          const rLoading = this.openLoading();
          axios.get(this.URLpath + this.DateMESO + '/' + this.MESODataTimes + '/' + 'catalog.xml')
          .then(function(MESOData){
            var x2jsxml = new x2js()
            var MESOObj = x2jsxml.xml2js(MESOData.data)
            var dataset = MESOObj.catalog.dataset.dataset
            for (let i = 0; i < dataset.length; i++) {
              _this.MESOnameArr.push(dataset[i]._name)
              rLoading.close()
            }
          })
          .catch(function(err){
            console.log(err)
          })
        },
        getMESOElements(){
          var _this = this
          _this.MESOconfigEl.length = 0
          const rLoading = this.openLoading();
          axios.get(this.MESONCSSpath + this.DateMESO + '/' + this.MESODataTimes + '/' + this.MESOArrindex + '/' + 'dataset.xml')
          .then(function(MESOElementsData){
            var x2jsxml = new x2js()
            var MESOElementsObj = x2jsxml.xml2js(MESOElementsData.data)
            var dataset = MESOElementsObj.gridDataset.gridSet
            for (let i = 0; i < dataset.length; i++) {
              var MESOgrid = dataset[i].grid
              for (let a = 0; a < MESOgrid.length; a++) {
                _this.MESOconfigEl.push(MESOgrid[a]._name)
                rLoading.close()
              }
            }
          })
          .catch(function(err){
            console.log(err)
          })
        },
        getNCEPNames(){
          var _this = this
          _this.NCEPnameArr.length = 0
          const rLoading = this.openLoading();
          axios.get(this.URLpath + this.DateNCEP + '/' + this.NCEPDataTimes + '/' + 'catalog.xml')
          .then(function(NCEPData){
            var x2jsxml = new x2js()
            var NCEPObj = x2jsxml.xml2js(NCEPData.data)
            var dataset = NCEPObj.catalog.dataset.dataset
            for (let i = 0; i < dataset.length; i++) {
              _this.NCEPnameArr.push(dataset[i]._name)
              rLoading.close()
            }
          })
          .catch(function(err){
            console.log(err)
          })
        },
        getNCEPElements(){
          var _this = this
          _this.NCEPconfigEl.length = 0
          const rLoading = this.openLoading();
          axios.get(this.NCEPNCSSpath + this.DateNCEP + '/' + this.NCEPDataTimes + '/' + this.NCEPArrindex + '/' + 'dataset.xml')
          .then(function(NCEPElementsData){
            var x2jsxml = new x2js()
            var NCEPElementsObj = x2jsxml.xml2js(NCEPElementsData.data)
            var dataset = NCEPElementsObj.gridDataset.gridSet
            //attribute
            for (let i = 0; i < dataset.length; i++) { 
              // console.log(dataset[i].grid.length)
              if (dataset[i].grid.length > 0 ) {
                // console.log(dataset[i].grid)
                for (let a = 0; a < dataset[i].grid.length; a++) {
                  _this.NCEPconfigEl.push(dataset[i].grid[a]._name)
                }
              }else{
                _this.NCEPconfigEl.push(dataset[i].grid._name)
                rLoading.close();
              }
            }
          })
          .catch(function(err){
            console.log(err)
          })
        },
        getRJTDNames(){
          var _this = this
          _this.RJTDnameArr.length = 0
          const rLoading = this.openLoading();
          axios.get(this.URLpath + this.DateRJTD + '/' + this.RJTDDataTimes + '/' + 'catalog.xml')
          .then(function(RJTDData){
            var x2jsxml = new x2js()
            var RJTDObj = x2jsxml.xml2js(RJTDData.data)
            var dataset = RJTDObj.catalog.dataset.dataset
            for (let i = 0; i < dataset.length; i++) {
              // console.log(dataset[i]._name)
              _this.RJTDnameArr.push(dataset[i]._name)
              rLoading.close()
            }
          })
          .catch(function(err){
            console.log(err)
          })
        },
        getRJTDElements(){
          var _this = this
          _this.RJTDconfigEl.length = 0
          const rLoading = this.openLoading();
          axios.get(this.RJTDNCSSpath + this.DateRJTD + '/' + this.RJTDDataTimes + '/' + this.RJTDArrindex + '/' + 'dataset.xml')
          .then(function(RJTDElementsData){
            var x2jsxml = new x2js()
            var RJTDElementsObj = x2jsxml.xml2js(RJTDElementsData.data)
            var dataset = RJTDElementsObj.gridDataset.gridSet
            for (let i = 0; i < dataset.length; i++) { 
              if (dataset[i].grid.length > 0 ) {
                for (let a = 0; a < dataset[i].grid.length; a++) {
                  _this.RJTDconfigEl.push(dataset[i].grid[a]._name)
                }
              }else{
                _this.RJTDconfigEl.push(dataset[i].grid._name)
                rLoading.close()
              }
            }
          })
          .catch(function(err){
            console.log(err)
          })
        },
      Charts(){
        var chart = Highcharts.chart('container', {
          chart: {
            type: 'spline'
          },
          title: {
            text: 'Test'
          },
          subtitle: {
            text: '数据来源: Development team'
          },
          xAxis: {
            categories: ['一月', '二月', '三月', '四月', '五月', '六月',
                  '七月', '八月', '九月', '十月', '十一月', '十二月']
          },
          yAxis: {
            title: {
              text: '温度'
            },
            labels: {
              formatter: function () {
                return this.value + '°';
              }
            }
          },
          tooltip: {
            crosshairs: true,
            shared: true
          },
          plotOptions: {
            spline: {
              marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
              }
            }
          },
          series: [{
            name: '东京',
            marker: {
              symbol: 'square'
            },
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
              y: 26.5,
              marker: {
                symbol: 'url(https://code.highcharts.com.cn/highcharts/graphics/sun.png)'
              }
            }, 23.3, 18.3, 13.9, 9.6]
          }, {
            name: '伦敦',
            marker: {
              symbol: 'diamond'
            },
            data: [{
              y: 3.9,
              marker: {
                symbol: 'url(https://code.highcharts.com.cn/highcharts/graphics/snow.png)'
              }
            }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
          }]
        });
      },
      aa(){
        console.log(this.InputWithURL)
      }
    }
}
</script>

<style>
    #ECMap{height: 300px;}
    #NMCMap{height: 300px;}
    #MESOMap{height: 300px;}
    #NCEPMap{height: 300px;}
    #RJTDMap{height: 300px;}
    #MapDefault{height: 300px;padding: 0;}
    #container{height: 300px;}
</style>