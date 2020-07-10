// SdnWise packet size (Bytes)
exports.LenNetId = 4;
exports.LenLength = 4+16+16+4+4+16+1000;
exports.LenDestination = 16;
exports.LenSource = 16;
exports.LenType = 4;
exports.LenTTL = 4;
exports.LenNextHop = 16;
exports.LenPayload = 1000;

// SdnWise timer (second)
exports.BeaconPeriod = 5
exports.ReportPeriod = 10