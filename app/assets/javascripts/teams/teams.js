// var d = document;
// var outline = d.getElementById("canvas-all-outline").value;
// var wpBlue2 = d.getElementById("canvas-WordPress-blue2").value;
// var wpBlue1 = d.getElementById("canvas-WordPress-blue1").value;
// var wpLogo = d.getElementById("canvas-WordPress-logo").value;
// var sole = d.getElementById("canvas-sole").value;
// var ear = d.getElementById("canvas-ear").value;
// var tail = d.getElementById("canvas-tail").value;
// var wapuuBody = d.getElementById("canvas-body").value;
// var nose = d.getElementById("canvas-nose").value;
// var eye = d.getElementById("canvas-eye").value;

// レスポンシブ対応 表示領域の幅(ここでは #content)を取得してその幅で場合分け
var blogContentAreaWidth = document.getElementById("content").clientWidth;
if (blogContentAreaWidth > 400) {
    document.getElementById("canvas").width = 400;
    document.getElementById("canvas").height = 440;
} else {
    document.getElementById("canvas").width = blogContentAreaWidth;
    document.getElementById("canvas").height = blogContentAreaWidth * 1.1;
}

// わぷー塗り絵関数
function wapuuNurie () {

    //各 input 要素に設定されている色コードを取得
    var d = document;
    var outline = d.getElementById("canvas-all-outline").value;
    var wpBlue2 = d.getElementById("canvas-WordPress-blue2").value;
    var wpBlue1 = d.getElementById("canvas-WordPress-blue1").value;
    var wpLogo = d.getElementById("canvas-WordPress-logo").value;
    var sole = d.getElementById("canvas-sole").value;
    var ear = d.getElementById("canvas-ear").value;
    var tail = d.getElementById("canvas-tail").value;
    var wapuuBody = d.getElementById("canvas-body").value;
    var nose = d.getElementById("canvas-nose").value;
    var eye = d.getElementById("canvas-eye").value;

    //canvas に入れるための SVG の生成 各色コードを要素の属性として付ける。原寸を拡大してあります。
    var svg = '<svg width="400" height="440" viewBox="-0.249 -0.5 400 440" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 3.8.3 (29802) - http://www.bohemiancoding.com/sketch -->
    <title>wapuu</title>
    <desc>Created with Sketch.</desc>
    <g id="wapuu" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M388.57,24.094c-2.465-0.613-6.483-0.91-22.652-0.91c-5.224,0-11.159,0.029-17.467,0.062
	c-7.122,0.036-14.728,0.072-22.319,0.072c-12.203,0-29.292-0.088-41.45-0.783C265.206,8.382,242.775,0.829,217.952,0.082
	C164.155-1.565,116.525,21.678,90.733,61.637c-8.717,8.284-25.115,17.497-29.55,18.478c-7.432,1.653-12.249,8.163-11.447,15.471
	c0.581,5.273,4.328,11.196,12.696,13.948c-0.965,0.949-1.888,1.943-2.743,2.974c-5.668,6.829-8.042,14.59-6.679,21.86
	c0.277,1.454,0.659,2.85,1.145,4.174c-12.265,20.865-18.716,44.551-18.716,68.902c0,6.15,0.414,12.269,1.236,18.328
	c-1.927-0.333-3.868-0.502-5.808-0.502c-9.327,0-17.976,4.044-23.719,11.088c-6.343,7.788-8.567,18.21-6.261,29.338
	c4.693,22.665,39.049,60.88,66.446,67.454c2.701,0.646,5.277,0.979,7.661,0.979c7.328,0,13.381-3.092,17.05-8.701
	c1.164-1.78,2.005-3.665,2.589-5.603c18.696,12.882,40.312,20.865,63.208,23.188c4.96,16.175,18.279,18.875,26.592,18.875
	c12.53,0,23.35-5.094,31.073-14.479c0.691,0.013,1.396,0.02,2.101,0.02c5.296,0,11.877-0.365,19.41-1.526
	c-24.106,27.035-58.933,42.598-84.576,42.598h-0.006c-10.808,0-25.327-2.752-33.127-15.869
	c-10.322-17.355-26.869-28.131-43.178-28.131c-17.131,0-29.034,12.086-29.615,30.081c-0.316,9.731,4.788,20.324,14.764,30.616
	C78.06,422.52,110.6,440,145.475,440c7.706,0,15.259-0.861,22.447-2.563c61.803-14.63,117.178-64.082,133.288-118.479
	c58.988-45.044,54.312-168.875,34.764-224.086c-1.356-3.832-2.817-7.585-4.396-11.251c2.381,0.277,4.735,0.414,7.044,0.414
	c5.407,0,10.671-0.76,15.653-2.253c30.662-9.193,44.509-31.94,44.222-44.424C398.348,30.77,394.454,25.562,388.57,24.094" id="all-outline" fill="' + outline +'"></path>
            <path d="M287.683,168.891c-19.032-17.049-32.149-27.531-51.012-31.431
	c-12.686-2.622-27.818,0.734-41.179,3.695c-10.119,2.247-18.859,4.191-25.659,3.47c-10.446-1.099-18.726-6.594-21.087-14
	c-1.66-5.221-1.207-13.583,10.416-23.807c4.833-4.252,10.622-7.807,16.965-10.697c-9.151,0.013-18.188-1.745-26.875-6.353
	c-11.222,15.575-39.702,26.859-48.464,22.968c-1.947-0.864-4.122-2.348-6.128-4.419c-0.192,0.147-0.365,0.31-0.558,0.46
	c2.312,2.162,3.998,5.195,4.729,8.737c1.474,7.185-1.04,14.868-6.734,20.559c-4.954,4.954-11.199,7.794-17.125,7.794
	c-4.145,0-7.683-1.441-10.334-3.956C52.916,160.992,46.11,183.41,46.11,207.445c0,11.189,1.497,22.026,4.243,32.351
	c11.767,9.692,31.148,48.2,35.374,57.859c0.232,0.528,0.493,1.2,0.76,1.97c20.167,18.642,46.442,30.773,75.503,33.017
	c-0.365-4.801-0.202-9.927-0.033-14.976c0.206-6.196,0.417-12.601-0.391-17.864c-0.666-4.324-1.777-8.975-2.958-13.893
	c-4.386-18.335-9.366-39.121,8.179-50.81c3.362-2.237,7.018-3.379,10.859-3.379c15.765,0,30.098,19,37.487,33.44
	c10.064-16.286,26.618-26.611,46.289-28.607c9.967-1.011,19.906,0.28,28.099,3.313c2.896-10.508,4.383-21.4,4.383-32.422
	C293.904,194.256,291.812,181.287,287.683,168.891" id="WordPress-blue2" fill="' + wpBlue2 + '"></path>
            <path d="M206.048,138.908c-3.587,0.704-7.128,1.487-10.556,2.247
	c-10.119,2.247-18.859,4.191-25.659,3.47c-10.446-1.099-18.726-6.594-21.087-14c-1.66-5.221-1.207-13.583,10.416-23.807
	c0.167-0.146,0.359-0.277,0.525-0.424c-7.481-2.439-15.36-3.998-23.517-4.549c-12.892,8.704-29.139,13.661-35.384,10.892
	c-1.944-0.864-4.116-2.345-6.122-4.412c-0.186,0.153-0.372,0.307-0.561,0.453c2.312,2.166,3.995,5.195,4.725,8.737
	c1.474,7.185-1.04,14.868-6.734,20.559c-4.954,4.954-11.199,7.794-17.125,7.794c-4.148,0-7.687-1.441-10.338-3.962
	C52.913,160.986,46.11,183.41,46.11,207.445c0,11.179,1.471,22.019,4.223,32.332c7.892,6.483,19.212,25.945,27.094,40.999
	c15.053,9.575,32.905,15.146,52.075,15.146c10.592,0,20.777-1.709,30.322-4.84c-0.388-1.696-0.792-3.404-1.216-5.172
	c-4.386-18.335-9.366-39.121,8.179-50.81c3.362-2.237,7.018-3.379,10.859-3.379c12.125,0,23.383,11.238,31.311,22.991
	c11.173-15.823,17.768-35.113,17.768-55.955C226.725,176.167,218.988,155.402,206.048,138.908" id="WordPress-blue1" fill="' + wpBlue1 + '"></path>
            <path d="M121.13,273.334c-5.384,0.346-9.768,0.039-15.119-1.07
	c-1.614-16.084-2.654-36.18,5.453-71.201c14.728,38.127,30.949,66.081,31.063,66.238C139.771,268.611,131.38,272.609,121.13,273.334
	 M96.43,269.271c-42.138-19.137-49.874-64.506-35.733-99.434C61.235,204.402,70.921,231.35,96.43,269.271 M153.468,260.739
	c6.686-28.79,17.796-56.314,24.335-85.15c1.259-5.573,2.354-14.248,0.388-23.921C197.667,182.076,195.43,229.301,153.468,260.739
	 M66.623,158.25c19.023-29.259,55.398-53.06,95.325-23.833c-0.268-0.013-25.594,1.148-7.188,28.366
	c9.95,14.708,10.583,26.507,2.713,50.503c-2.841,11.828-3.698,15.403-6.236,27.586c-12.147-29.021-22.062-53.725-29.892-85.316
	c6.884-1.007,14.682-2.152,10.674-6.581c-0.502-0.558-36.764,3.04-37.109,3.098c-2.785,0.473-3.274,3.747-3.277,3.78
	c-0.29,2.586,0.179,2.56,8.036,2.087c2.071,11.15,3.013,16.244,8.137,32.524c-3.698,15.363-7.527,31.252-8.049,55.854
	c-16.524-32.87-23.138-55.698-24.397-84.237c2.345-1.425,5.476-0.868,7.55-2.987c1.412-1.448,2.1-4.712,0.339-5.094
	C77,152.657,72.232,157.079,66.623,158.25 M124.036,115.003c-62.511,5.156-103.103,99.303-47.816,148.566
	c56.031,49.936,125.256-14.584,122.866-74.439C197.23,142.72,158.784,113.333,124.036,115.003" id="WordPress-logo" fill="' + wpLogo + '"></path>
            <path d="M211.951,283.711c-0.039-0.144-0.072-0.287-0.111-0.443
	c-0.339-1.344-0.717-2.739-1.135-4.188c-3.521-12.673-20.268-37.882-33.059-37.882c-1.963,0-3.796,0.587-5.603,1.787
	c-11.199,7.468-8.939,20.976-4.207,40.719c1.167,4.886,2.377,9.94,3.102,14.656c0.946,6.131,0.717,12.992,0.496,19.619
	c-0.339,10.292-0.695,20.93,3.744,25.516c1.944,2.009,4.97,2.987,9.255,2.987c1.239,0,2.407-0.092,3.535-0.235
	c0.342-0.039,0.668-0.104,1.001-0.163c0.786-0.124,1.545-0.28,2.279-0.476c0.326-0.078,0.649-0.17,0.965-0.268
	c0.763-0.229,1.494-0.502,2.195-0.796c0.206-0.085,0.424-0.163,0.626-0.254c0.9-0.405,1.761-0.861,2.567-1.357
	c0.078-0.052,0.15-0.104,0.228-0.156c0.714-0.456,1.386-0.939,2.025-1.448c0.186-0.149,0.365-0.3,0.548-0.456
	c0.521-0.443,1.023-0.9,1.497-1.376c0.159-0.163,0.322-0.32,0.476-0.477c0.528-0.561,1.037-1.135,1.507-1.722
	c0.053-0.065,0.117-0.131,0.17-0.196c0.521-0.665,1.004-1.343,1.447-2.021c0.104-0.156,0.202-0.313,0.301-0.47
	c0.319-0.509,0.626-1.004,0.899-1.507c0.138-0.241,0.262-0.476,0.392-0.711c0.222-0.411,0.424-0.821,0.62-1.226
	c0.123-0.248,0.247-0.509,0.358-0.757c0.163-0.353,0.3-0.691,0.443-1.037c0.3-0.711,0.574-1.402,0.796-2.042
	c0.013-0.032,0.026-0.064,0.039-0.104c0.156-0.457,0.3-0.888,0.417-1.285c0.542-1.755,0.783-2.98,0.822-3.189
	c0.032-0.196,0.085-0.418,0.144-0.606c3.562-11.245,4.983-20.709,2.087-34.628C212.57,286.287,212.271,285.016,211.951,283.711" id="sole-left" fill="' + sole + '"></path>
            <path d="M74.994,327.02L74.994,327.02c-1.826,0-3.845-0.261-6-0.783
	c-24.055-5.771-56.979-41.873-61.144-61.981c-1.862-8.995-0.15-17.311,4.813-23.409c4.39-5.381,11.023-8.466,18.204-8.466
	c6.463,0,13.032,2.426,18.996,7.005c11.711,9.008,31.578,48.475,35.863,58.271c1.784,4.07,5.326,16.307,0.365,23.886
	C84.458,324.039,81.204,327.02,74.994,327.02L74.994,327.02L74.994,327.02L74.994,327.02z M30.867,239.489
	c-5.104,0-9.614,2.074-12.683,5.844c-3.594,4.416-4.788,10.618-3.369,17.48c3.623,17.506,34.754,51.455,55.838,56.51
	c1.611,0.391,3.072,0.587,4.34,0.587c3.284,0,4.51-1.292,5.143-2.257c2.573-3.933,1.115-12.484-0.926-17.141
	c-5.837-13.339-24.338-48.305-33.688-55.492C40.817,241.4,35.749,239.489,30.867,239.489L30.867,239.489L30.867,239.489
	L30.867,239.489z" id="sole-right-outline" fill="' + outline + '"></path>
            <path d="M18.185,245.333c-3.594,4.416-4.788,10.618-3.369,17.48
	c3.623,17.506,34.754,51.455,55.838,56.51c1.611,0.391,3.072,0.587,4.34,0.587c3.284,0,4.51-1.292,5.143-2.257
	c2.573-3.933,1.115-12.484-0.926-17.141c-5.837-13.339-24.338-48.305-33.688-55.492c-4.706-3.62-9.774-5.531-14.656-5.531
	C25.763,239.489,21.253,241.563,18.185,245.333" id="sole-right" fill="' + sole + '"></path>
            <path d="M74.971,145.867L74.971,145.867c-7.749,0-13.485-4.908-14.969-12.816
	c-0.965-5.146,0.868-10.83,5.159-16c5.577-6.711,14.375-11.587,20.924-11.587c1.474,0,2.831,0.245,4.028,0.721
	c4.357,1.742,7.615,5.978,8.717,11.33c1.474,7.185-1.04,14.868-6.734,20.559C87.142,143.026,80.897,145.867,74.971,145.867
	L74.971,145.867L74.971,145.867L74.971,145.867z M86.085,112.577c-3.829,0-10.824,3.444-15.448,9.014
	c-1.689,2.035-4.409,6.059-3.64,10.152c1.089,5.798,4.938,7.015,7.974,7.015c3.995,0,8.515-2.133,12.096-5.717
	c3.995-3.992,5.789-9.262,4.794-14.098c-0.617-3-2.257-5.303-4.39-6.154C87.126,112.648,86.646,112.577,86.085,112.577
	L86.085,112.577L86.085,112.577L86.085,112.577z" id="hand-right-outline" fill="' + outline + '"></path>
            <path d="M66.998,131.743c1.089,5.798,4.938,7.015,7.974,7.015c3.995,0,8.515-2.133,12.096-5.717
	c3.995-3.992,5.789-9.262,4.794-14.098c-0.617-3-2.257-5.303-4.39-6.154c-0.346-0.14-0.825-0.212-1.386-0.212
	c-3.829,0-10.824,3.444-15.448,9.014C68.948,123.625,66.228,127.65,66.998,131.743" id="hand-right" fill="' + wapuuBody + '"></path>
            <path d="M326.015,37.54c-14.16,0-34.445-0.117-47.021-1.138c-1.096-0.085-2.061-0.085-2.687-0.033
	c0.926,1.513,3.195,4.165,6.835,7.191l0.913,0.776c24.707,21.057,43.309,25.479,54.56,25.479h0.007
	c4.018,0,7.905-0.554,11.564-1.653c17.355-5.205,28.026-15.957,32.214-24.283c1.559-3.111,1.878-5.156,1.878-6.115
	c-2.36-0.238-8.505-0.359-18.308-0.359c-5.212,0-11.147,0.026-17.461,0.062C341.335,37.504,333.665,37.54,326.015,37.54" id="ear-left" fill="' + ear + '"></path>
            <path d="M64.271,93.998c-0.333,0.072-0.434,0.186-0.437,0.186c0.033-0.01,0.245,0.388,1.03,0.919
	c1.442,0.972,7.318,3.711,23.229-0.541c-0.489-3.685-0.303-8.287,1.298-13.75C80.095,87.273,69.607,92.814,64.271,93.998" id="ear-right" fill="' + ear + '"></path>
            <path d="M285.674,320.706c-7.109,4.246-14.075,7.624-20.755,10.272
	c-21.941,40.119-69.6,70.943-110.949,71.727c-21.357,0.353-37.901-7.696-46.893-22.803c-10.083-16.958-25.486-23.213-35.508-20.637
	c-6.715,1.735-10.563,7.331-10.837,15.771c-0.241,7.396,6.301,17.277,17.493,26.422c20.122,16.443,54.651,29.657,86.415,22.144
	C219.55,410.604,268.872,368.176,285.674,320.706" id="tail" fill="' + tail + '"></path>
            <path d="M322.564,99.617c-3.979-11.231-8.864-21.452-14.52-30.642
	c-8.505-4.139-18.066-10.25-28.606-19.228l-0.849-0.727c-11.662-9.702-10.051-14.137-9.522-15.592
	c0.418-1.171,1.168-2.081,2.205-2.766c-15.798-10.113-33.942-15.768-53.751-16.365c-49.234-1.494-92.383,19.447-115.446,56.008
	c-6.304,9.999-8.486,19.084-6.297,26.282c1.595,5.244,5.25,8.476,7.898,9.65c4.481,1.996,32.994-7.895,41.28-22.952
	c0.47-0.851,1.269-1.477,2.208-1.722c0.949-0.248,1.947-0.101,2.772,0.411c19.456,11.962,41.322,6.493,60.286,0.427
	c1.879-0.593,3.874,0.434,4.475,2.302c0.319,1.008,0.156,2.042-0.34,2.886c12.536-0.329,25.111,1.579,36.199,5.952
	c1.827,0.721,2.714,2.785,1.996,4.615c-0.718,1.826-2.791,2.723-4.618,1.999c-27.263-10.755-64.193-5.489-84.073,12.001
	c-6.816,5.998-9.781,11.79-8.339,16.306c1.484,4.647,7.53,8.3,15.053,9.089c5.655,0.587,14.261-1.314,23.38-3.339
	c14.049-3.114,29.977-6.649,44.156-3.714c22.972,4.751,38.221,18.527,61.297,39.382l2.805,2.541
	c1.461,1.314,1.572,3.564,0.262,5.019c-0.705,0.779-1.67,1.174-2.648,1.174c-0.803,0-1.598-0.296-2.257-0.841
	c2.276,9.676,3.443,19.616,3.443,29.674c0,12.057-1.669,23.969-4.943,35.443c3.665,2.073,6.744,4.559,8.948,7.415
	c1.2,1.553,0.913,3.783-0.639,4.983c-1.553,1.2-3.796,0.913-4.996-0.639c-6.145-7.944-21.785-12.575-37.243-11.023
	c-11.258,1.148-31.771,6.536-43.394,29.612c0.443,1.187,0.815,2.282,1.076,3.248c6.099,20.871,4.657,33.538,0.053,48.22
	c-0.457,2.472-1.331,5.433-2.648,8.505c15.654,0.046,43.282-3.392,72.686-23.624C345.575,271.279,340.684,150.785,322.564,99.617" id="left-body" fill="' + wapuuBody + '"></path>
            <path d="M386.849,30.992c-1.722-0.431-5.818-0.695-20.878-0.695c-5.225,0-11.173,0.026-17.493,0.059
	c-7.168,0.036-14.825,0.075-22.463,0.075c-13.091,0-31.451-0.101-43.856-0.923c-18.394-13.834-40.224-21.589-64.422-22.32
	c-51.595-1.582-96.936,20.464-121.417,58.93c-9.415,9.288-27.512,19.587-33.59,20.94c-2.814,0.623-4.938,2.511-5.685,5.048
	c-0.756,2.566,0.056,5.374,2.163,7.51c1.934,1.947,5.955,4.383,14,4.383c4.328,0,9.839-0.721,16.795-2.583
	c2.615,5.922,7.116,9.689,10.785,11.319c8.763,3.891,37.243-7.393,48.464-22.968c8.688,4.608,17.725,6.366,26.875,6.353
	c-6.343,2.89-12.132,6.444-16.965,10.697c-11.623,10.224-12.076,18.585-10.416,23.807c2.361,7.406,10.641,12.901,21.087,14
	c6.799,0.721,15.54-1.223,25.659-3.47c13.361-2.961,28.494-6.317,41.179-3.695c18.862,3.9,31.979,14.382,51.012,31.431
	c4.129,12.396,6.222,25.366,6.222,38.554c0,11.022-1.486,21.915-4.383,32.422c-8.192-3.033-18.132-4.324-28.099-3.313
	c-19.671,1.996-36.225,12.321-46.289,28.607c-7.39-14.44-21.723-33.44-37.487-33.44c-3.841,0-7.497,1.142-10.859,3.379
	c-17.545,11.688-12.565,32.475-8.179,50.81c1.181,4.918,2.292,9.568,2.958,13.893c0.809,5.264,0.597,11.668,0.391,17.864
	c-0.408,12.263-0.828,24.941,6.405,32.423c3.77,3.894,9.177,5.87,16.071,5.87c14.255,0,23.467-7.422,28.999-15.719
	c1.252,0.046,2.59,0.085,4.044,0.085c9.177,0,22.11-1.154,36.995-5.688c-22.241,34.542-64.089,60.267-100.634,60.958
	c-13.107,0.287-30.871-2.902-40.645-19.332c-11.874-19.959-30.825-27.127-43.396-23.886c-9.901,2.551-15.794,10.729-16.172,22.425
	c-0.316,9.744,7.012,21.472,20.099,32.155c17.206,14.062,44.336,25.894,72,25.894c6.865,0,13.769-0.724,20.559-2.335
	c60.332-14.284,114.227-62.876,128.732-115.851c32.625-23.298,43.009-69.606,45.95-104.563c3.75-44.558-3.177-88.792-11.695-112.86
	c-3.013-8.505-6.548-16.43-10.501-23.836c7.919,2.658,14.598,3.519,19.848,3.519h0.007c4.709,0,9.288-0.659,13.605-1.95
	c27.746-8.322,39.356-28.826,39.16-37.452C391.31,34.125,389.614,31.683,386.849,30.992L386.849,30.992L386.849,30.992
	L386.849,30.992z M88.094,94.562c-15.911,4.252-21.788,1.513-23.229,0.541c-0.786-0.531-0.998-0.929-1.03-0.919
	c0.003,0,0.104-0.114,0.437-0.186c5.335-1.184,15.823-6.725,25.121-13.185C87.791,86.275,87.605,90.877,88.094,94.562L88.094,94.562
	L88.094,94.562L88.094,94.562z M210.731,322.147c-0.059,0.188-0.111,0.41-0.144,0.606c-0.176,0.972-4.475,23.729-26.155,23.729
	c-4.285,0-7.312-0.979-9.255-2.987c-4.438-4.586-4.083-15.224-3.744-25.516c0.222-6.627,0.45-13.488-0.496-19.619
	c-0.724-4.716-1.934-9.771-3.102-14.656c-4.732-19.743-6.992-33.251,4.207-40.719c1.807-1.2,3.64-1.787,5.603-1.787
	c12.791,0,29.537,25.209,33.059,37.882C216.21,297.942,214.965,308.77,210.731,322.147L210.731,322.147L210.731,322.147
	L210.731,322.147z M164.641,423.603c-31.764,7.514-66.293-5.7-86.415-22.144c-11.192-9.145-17.734-19.025-17.493-26.422
	c0.274-8.44,4.122-14.036,10.837-15.771c10.022-2.576,25.424,3.679,35.508,20.637c8.991,15.106,25.535,23.155,46.893,22.803
	c41.349-0.783,89.007-31.607,110.949-71.727c6.68-2.648,13.646-6.026,20.755-10.272C268.872,368.176,219.55,410.604,164.641,423.603
	L164.641,423.603L164.641,423.603L164.641,423.603z M322.564,99.617c18.119,51.168,23.011,171.663-32.651,209.968
	c-29.403,20.232-57.031,23.67-72.686,23.624c1.317-3.072,2.191-6.033,2.648-8.505c4.604-14.682,6.046-27.349-0.053-48.22
	c-0.261-0.966-0.633-2.062-1.076-3.248c11.623-23.076,32.136-28.464,43.394-29.612c15.458-1.552,31.099,3.079,37.243,11.023
	c1.2,1.552,3.443,1.839,4.996,0.639c1.552-1.2,1.839-3.431,0.639-4.983c-2.204-2.856-5.283-5.342-8.948-7.415
	c3.274-11.474,4.943-23.386,4.943-35.443c0-10.058-1.167-19.998-3.443-29.674c0.659,0.545,1.454,0.841,2.257,0.841
	c0.979,0,1.943-0.395,2.648-1.174c1.311-1.455,1.199-3.705-0.262-5.019l-2.805-2.541c-23.076-20.855-38.325-34.63-61.297-39.382
	c-14.18-2.935-30.107,0.6-44.156,3.714c-9.119,2.025-17.725,3.926-23.38,3.339c-7.523-0.789-13.569-4.441-15.053-9.089
	c-1.442-4.517,1.523-10.309,8.339-16.306c19.88-17.49,56.81-22.756,84.073-12.001c1.827,0.724,3.9-0.173,4.618-1.999
	c0.718-1.83-0.169-3.894-1.996-4.615c-11.088-4.373-23.663-6.281-36.199-5.952c0.496-0.845,0.659-1.878,0.34-2.886
	c-0.601-1.869-2.596-2.896-4.475-2.302c-18.964,6.066-40.83,11.535-60.286-0.427c-0.825-0.512-1.823-0.659-2.772-0.411
	c-0.939,0.245-1.738,0.871-2.208,1.722c-8.287,15.057-36.799,24.948-41.28,22.952c-2.648-1.174-6.304-4.406-7.898-9.65
	c-2.188-7.197-0.006-16.283,6.297-26.282c23.063-36.561,66.212-57.501,115.446-56.008c19.809,0.597,37.953,6.252,53.751,16.365
	c-1.037,0.685-1.787,1.595-2.205,2.766c-0.528,1.455-2.14,5.89,9.522,15.592l0.849,0.727c10.54,8.978,20.102,15.089,28.606,19.228
	C313.7,78.165,318.585,88.385,322.564,99.617L322.564,99.617L322.564,99.617L322.564,99.617z M382.4,43.88
	c-4.188,8.326-14.858,19.078-32.214,24.283c-3.659,1.099-7.547,1.653-11.564,1.653h-0.007c-11.251,0-29.853-4.422-54.56-25.479
	l-0.913-0.776c-3.64-3.026-5.909-5.678-6.835-7.191c0.626-0.052,1.591-0.052,2.687,0.033c12.575,1.021,32.86,1.138,47.021,1.138
	c7.65,0,15.32-0.036,22.495-0.072c6.313-0.036,12.249-0.062,17.461-0.062c9.803,0,15.947,0.121,18.308,0.359
	C384.278,38.724,383.959,40.769,382.4,43.88L382.4,43.88L382.4,43.88L382.4,43.88z" id="left-body-outline" fill="' + outline + '"></path>
            <path d="M141.751,64.458c-5.655,4.239-3.953,9.483,2.371,10.272c6.324,0.79,6.816,1.207,12.647-3.163
	c6.323-4.739,7.116-12.641,0-11.848C149.656,60.509,144.914,62.087,141.751,64.458" id="nose" fill="' + nose + '"></path>
            <path d="M125.151,67.621c0,3.927-3.183,7.109-7.113,7.109c-3.926,0-7.116-3.183-7.116-7.109
	c0-3.93,3.189-7.112,7.116-7.112C121.968,60.509,125.151,63.691,125.151,67.621" id="eye-left" fill="' + eye + '"></path>
            <path d="M207.353,47.872c0,3.926-3.183,7.109-7.112,7.109s-7.113-3.183-7.113-7.109
	c0-3.927,3.183-7.109,7.113-7.109S207.353,43.945,207.353,47.872" id="eye-right" fill="' + eye + '"></path>
    </g>
</svg>';
 
    //canvas に svg を書き出す
    var img = new Image();
    img.onload = function() {
        var ctx = d.getElementById("canvas").getContext("2d");

        //canvas のレスポンシブ対応
        var scale = d.getElementById("canvas").width / img.width;
        ctx.setTransform(scale, 0, 0, scale, 0, 0);
        ctx.drawImage(img, 0, 0);

        //canvas のデータを PNG として画像に書きだす
        var png = document.getElementById("canvas").toDataURL();
        d.getElementById("saveWapuu").src = png;
    };

    //SVG は base64 にする
    img.src = "data:image/svg+xml;base64," + btoa(svg);
}

//塗り絵関数の実行
wapuuNurie();

//各色 form に変更があった場合も塗り絵関数を実行して canvas を書き換える
document.getElementById("wapuuColor").addEventListener("change", wapuuNurie, false);