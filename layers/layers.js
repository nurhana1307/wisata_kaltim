var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_wisatadimahakamulu_1 = new ol.format.GeoJSON();
var features_wisatadimahakamulu_1 = format_wisatadimahakamulu_1.readFeatures(json_wisatadimahakamulu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wisatadimahakamulu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wisatadimahakamulu_1.addFeatures(features_wisatadimahakamulu_1);
var lyr_wisatadimahakamulu_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_wisatadimahakamulu_1, 
                style: style_wisatadimahakamulu_1,
                interactive: true,
                title: 'wisata di  mahakam ulu'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_wisatadimahakamulu_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_wisatadimahakamulu_1];
lyr_wisatadimahakamulu_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'placepageUri': 'placepageUri', });
lyr_wisatadimahakamulu_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'placepageUri': '', });
lyr_wisatadimahakamulu_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'placepageUri': 'no label', });
lyr_wisatadimahakamulu_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});