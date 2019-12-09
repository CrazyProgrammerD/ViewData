<template>
    <div>
        <div class="row">
          <div class="col-lg-4">
            <div class="card card-outline card-info">
              <div class="card-header">
                <h3 class="card-title">EC</h3>
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
                The body of the card
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
                          v-model="ValueEC"
                          type="date"
                          placeholder="选择日期">
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
                        <select class="custom-select" v-model="Arrindex" @change="getElements()">
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
                        <select multiple class="custom-select" v-model="ECconfigindex">
                          <option v-for="(item,index) in ECconfigEl" :key="index" :value="item">{{item}}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label" for="inputWarning"><i class="fa fa-i-cursor"></i> Input with URL</label>
                        <input type="text" class="form-control is-warning"  v-model="URLpath" id="inputWarning" placeholder="waiting ..." disabled>
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
                          v-model="ValueEC"
                          type="date"
                          placeholder="选择日期">
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
                          v-model="ValueEC"
                          type="date"
                          placeholder="选择日期">
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
                          <option>Z_NAFP_C_BABJ_20191128000000_P_CNPC-GRAPES-RMFS-FCSTER-08400.grib2</option>
                          <option>Z_NAFP_C_BABJ_20191128000000_P_CNPC-GRAPES-RMFS-FCSTER-05400.grib2</option>
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
                          <option>Vertical_velocity_geometric_isobaric_1_Hour_Maximum</option>
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
                        <input type="text" class="form-control is-warning" v-model="URLpath" id="inputWarning" placeholder="waiting ..." disabled>
                      </div>
                    </div>
                  </div>
                </form>
                <!-- form end -->
              </div>
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="getFileNames()">Save changes</button>
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
                          v-model="ValueEC"
                          type="date"
                          placeholder="选择日期">
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
                          <option>Z_NAFP_C_BABJ_20191128000000_P_CNPC-GRAPES-RMFS-FCSTER-08400.grib2</option>
                          <option>Z_NAFP_C_BABJ_20191128000000_P_CNPC-GRAPES-RMFS-FCSTER-05400.grib2</option>
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
                        <input type="text" class="form-control is-warning" v-model="URLpath" id="inputWarning" placeholder="waiting ..." disabled>
                      </div>
                    </div>
                  </div>
                </form>
                <!-- form end -->
              </div>
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary"  @click="getFileNames()">Save changes</button>
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
                          v-model="ValueEC"
                          type="date"
                          placeholder="选择日期">
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
                          <option>Z_NAFP_C_BABJ_20191128000000_P_CNPC-GRAPES-RMFS-FCSTER-08400.grib2</option>
                          <option>Z_NAFP_C_BABJ_20191128000000_P_CNPC-GRAPES-RMFS-FCSTER-05400.grib2</option>
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
                        <input type="text" class="form-control is-warning" v-model="URLpath" id="inputWarning" placeholder="waiting ..." disabled>
                      </div>
                    </div>
                  </div>
                </form>
                <!-- form end -->
              </div>
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="getFileNames()">Save changes</button>
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

export default {
    name: 'Map',
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        ValueEC: '',
        DataTimes: '',
        URLpath: '',
        nameArr:[],
        Arrindex:'',
        NCSSpath:'',
        ECconfigEl:[],
        ECconfigindex:''
      };
    },
    mounted(){
        this.initMap();
    },
    created(){
      this.Arrindex = this.nameArr[0]
      this.ECconfigindex = this.ECconfigEl
    },
    methods:{
        ECpath(URLpath,NCSSpath){
          this.URLpath = 'http://10.16.48.234:8085/thredds/catalog/testAll/eccodes/NAFP/ECMWF/HRES/'
          this.NCSSpath = 'http://10.16.48.234:8085/thredds/ncss/testAll/eccodes/NAFP/ECMWF/HRES/'
        },
        MESOpath(URLpath){
          this.URLpath = 'http://10.16.48.234:8085/thredds/catalog/testAll/eccodes/NAFP/CMA/GRAPES_MESO/'
        },
        NCEPpath(URLpath){
          this.URLpath = 'http://10.16.48.234:8085/thredds/catalog/testAll/eccodes/NAFP/NCEP/GFS/0p25/'
        },
        RJTDpath(URLpath){
          this.URLpath = 'http://10.16.48.234:8085/thredds/catalog/testAll/eccodes/NAFP/JMA/GSM/0p25/'
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
            var NMCWms = 'http://10.16.48.234:8085/thredds/wms/testAll/eccodes/NAFP/JMA/GSM/0p25/20191208/00/W_NAFP_C_RJTD_20191208000000_GSM_GPV_Rra2_Gll0p25deg_Lsurf_FD0221_grib2.bin.gz?service=WMS'
            var NMCLay = L.tileLayer.wms(NMCWms, {
                    layers: 'Pressure_reduced_to_MSL_msl',
                    styles: 'contour/Frainbow',
                    opacity: 1,
                    format: 'image/png',
                    transparent: true,
                    colorscalerange: '0, 103377'
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
            var NCEPWms = 'http://10.16.48.234:8085/thredds/wms/testAll/eccodes/NAFP/NCEP/GFS/0p25/20191201/00/W_NAFP_C_KWBC_20191201000000_P_gfs.t00z.pgrb2.0p25.f050.bin?service=WMS'
            var NCEPLay = L.tileLayer.wms(NCEPWms, {
                    layers: 'Ozone_Mixing_Ratio_isobaric',
                    styles: 'boxfill/rainbow',
                    opacity: 0.5,
                    format: 'image/png',
                    transparent: true,
                    colorscalerange: '0.000001766, 0.000003586'
                });
                NCEPLay.addTo(NCEPMap);

            var RJTDMap = L.map('RJTDMap').setView([39.89945,106.40769], 3);
              L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGRvdSIsImEiOiJjamVwY3BoY3EwOGs2MnFsbHo1bzA0eHpnIn0.5SasKtNtzLg_Nbu-CGU8rA', {
                  maxZoom: 18,
                  id: 'mapbox.streets'
              }).addTo(RJTDMap);
            var RJTDWms = 'http://10.16.48.234:8085/thredds/wms/testAll/eccodes/NAFP/JMA/GSM/0p25/20191126/00/W_NAFP_C_RJTD_20191126000000_GSM_GPV_Rra2_Gll0p25deg_Lsurf_FD0312_grib2.bin.gz?service=WMS'
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
        getFileNames(){
          // axios.get('http://10.16.48.234:8085/thredds/catalog/testAll/eccodes/NAFP/ECMWF/HRES/20190514/12/catalog.xml')
          console.log(this.URLpath + this.ValueEC + '/' + this.DataTimes + '/' + 'catalog.xml')
          var _this = this
          axios.get(this.URLpath + this.ValueEC + '/' + this.DataTimes + '/' + 'catalog.xml')
          .then(function(ECData){
            var x2jsxml = new x2js()
            var ECObj = x2jsxml.xml2js(ECData.data)
            var dataset = ECObj.catalog.dataset.dataset
            for (let i = 0; i < dataset.length; i++) {
              _this.nameArr.push(dataset[i]._name)
            }
          })
          .catch(function(err){
            console.log(err)
          })
        },
        //<-------getFileNames   end---------->
        getElements(){
          var _this = this
          axios.get(this.NCSSpath + this.ValueEC + '/' + this.DataTimes + '/' + this.Arrindex + '/' + 'dataset.xml')
          .then(function(ElementsData){
            var x2jsxml = new x2js()
            var ElementsObj = x2jsxml.xml2js(ElementsData.data)
            var Eledataset = ElementsObj.gridDataset.gridSet.grid
            for (let i = -1; i < Eledataset.length; i++) {
              _this.ECconfigEl.push(Eledataset[i]._name)
              console.log(Eledataset[i]._name)
            }
            console.log(_this.ECconfigEl)
          })
          .catch(function(err){
            console.log(err)
          })
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
    #MapDefault{height: 300px;}
</style>