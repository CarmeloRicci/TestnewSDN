// SdnWise packet size (Bytes)
exports.LenNetId = 4;
exports.LenLength = 4+16+16+4+4+16+1000;
exports.LenDestination = 16;
exports.LenSource = 16;
var LenType = 4
exports.LenType = LenType;
exports.LenTTL = 4;
exports.LenNextHop = 16;
exports.LenPayload = 1000;

var TypeBeacon = Buffer.alloc(LenType);
exports.TypeBeacon = TypeBeacon.write(''+0);
var TypeReport = Buffer.alloc(LenType);
exports.TypeReport = TypeReport.write(''+1);
var TypeOpenPath = Buffer.alloc(LenType);
exports.TypeOpenPath= TypeOpenPath.write(''+2);
var TypeStatus = Buffer.alloc(LenType);
exports.TypeStatus = TypeStatus.write(''+3);
var TypeData = Buffer.alloc(LenType);
exports.TypeData = TypeData.write(''+4);


// SdnWise timer (second)
exports.BeaconPeriod = 5
exports.ReportPeriod = 10