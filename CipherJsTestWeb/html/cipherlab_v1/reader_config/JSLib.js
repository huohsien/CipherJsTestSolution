/*
var bAddSecLvlSp = true, bDispModSp = true, bLsrOnTmSp = true, bNegBarcSp = true, bPklstModSp = true, bRedunLvSp = true, bScnAglSp = true, bSecLvSp = true, bTimBetSamSymbSp = true;
var bTranAIMSp = true, bTrgrModSp = true, bDecodIllumSp = true, bDecodAmPatSp = true, bIntCharGapSp = true, bTimPresModSp = true, bDecIllumPwrLvlSp = true;
*/

function parseReaderType(sOrigReaderType) {
    var aReaderInfo = sOrigReaderType.split("_");
    var oReaderInfo = {
        "Name": (aReaderInfo.length == 3 ? aReaderInfo[2] : aReaderInfo[0]),
        "Dim": aReaderInfo[1]
    };
    return oReaderInfo;
}

function setNonSprtSymbParam(readerName) {
    //alert("setNonSprtSymbParam...." + readerName);

    switch (readerName) {
        case "EX25":
            alert("set up EX25 non-support param...");          
            //======Symbology======
            //----Codabar
            bCB_NotisSp = false;
            //----Code39
            bC39_cvrC32Sp = bC39_cvrC32PfxSp = false;
            //----Korean3Of5
            bKor35Sp = false;
            //--ISBT128
            bISBT128_rednSp = false;
            //--Chinese2Of5
            bChin25Sp = false;
            //--Interleaved2Of5
            bIntl25_cvrE13Sp = false; //convertToEan13
            //--Matrix2Of5                    
            bMtx25_redundSp = bMtx25_VrCkDgSp = bMtx25_TmCkDgSp = false;
            //--UccCoupon
            bCoupnSp = false;
            //--GS1DataBar14
            bGS1Db14_CvrUpcESp = bGS1Db14_ScLvSp = false;      //convertToUpcEan
            //--GS1DataBarLimited
            bGS1DbL_CvrUpcESp = bGS1DbL_SecLvSp = false;
            //GS1DataBarExpanded
            bGS1DbEx_ScLvSp = false;
            //---Msi
            bMSI_AlgoSp = false;
            //---Ean13
            bEAN13_BISp = false;
            //---UpcE1
            bUPCE1_TmCkDg = bUPCE1_TrnSysNumSp = bUPCE1_CvrUPCA = false;    //transmitCheckDigit, convertToUpcA
            //---Composite
            bCmpsT39Sp = bCmps_UPCMdSp = bCmps_EmuSp = false;
            //---UKPostal
            bUKPstSp = false;   //transmitCheckDigit
            //---USPSPostal, UPUFICSPostal
            bUSPPstSp = bUPUPstSp = false;
            //---PDF417
            bPDF_TrnMdSp = false;  //escapeCharacter, transmitControlHeader
            //---MicroQR
            bMcrQRSp = false;
            break;
        case "SE1524":
            alert("set up SE1524 non-supported param...");            
            //========Symbology===========
            //----Codabar
            bCB_NotisSp = false;
            //Code11
            bCode11Sp = bC11_Len1Sp = bC11_Len2Sp = bC11_CkDgOpSp = false; //enable, transmitCheckDigit
            //--Korean3Of5
            bKor35Sp = false;
            //--ISBT128
            bISBT128_cnctSp = bISBT128_rednSp = false;
            //--Chinese2Of5
            bChin25Sp = false;
            //--Matrix2Of5
            bMtx25Sp = bMtx25_Len1Sp = bMtx25_Len2Sp = false;
            //enable, redundancy, checkDigitVerification, transmitCheckDigit
            //--GS1DataBar14
            bGS1Db14_ScLvSp = false;
            //GS1DataBarLimited
            bGS1DbL_SecLvSp = false;
            //---GS1DataBarExpanded
            bGS1DbEx_ScLvSp = false;
            //---Ean8
            bEAN8_CvrE13 = false;
            //---Ean13
            bEAN13_cvrISSN = false;
            //---Composite
            bCmpsSp = bCmpsCABSp = bCmpsCCSp = bCmpsT39Sp = bCmps_UPCMdSp = false;
            //enableCc_C, enableCc_AB, enableTlc39, enableEmulationMode
            //---USPostal
            bUSPstSp = bUSPsnSp = bUSPlnSp = false;  //enablePlanet, enablePostnet, transmitCheckDigit
            //---UKPostal
            bUKPstSp = false;  //transmitCheckDigit
            //---JapanPostal, AustralianPostal, DutchPostal, USPSPostal, UPUFICSPostal
            bJpPstSp = bAusPstSp = bDutPstSp = bUSPPstSp = bUPUPstSp = false;
            //---PDF417
            bPDFSp = bPDF_TrnMdSp = false;  //escapeCharacter, transmitControlHeader
            //---MicroPDF417
            bMcrPDFSp = false;  //code128Emulation
            //---DataMatrix
            bDtMtrxSp = bDtMtrx_FldSepSp = bDtMtrx_MrImgSp = false;
            //---MaxiCode, QRCode, MicroQR, Aztec
            bMxCdSp = bQRCdSp = bMcrQRSp = bAztcSp = false;
            //---Plessey
            bPlsySp = bPlsy_Len1Sp = bPlsy_Len2Sp = false; //unconventionalStop, transmitCheckDigit
            //---Telepen
            bTlpnSp = bTlpn_FmtSp = bTlpn_Len1Sp = bTlpn_Len2Sp = false;
            break;
        case "SE955":
            alert("set up SE955 non-supported param...");          
            //========Symbology===========
            //----Codabar
            bCB_NotisSp = false;
            //--Korean3Of5
            bKor35Sp = false;
            //--ISBT128
            bISBT128_cnctSp = bISBT128_rednSp = false;
            //--Matrix2Of5
            bMtx25Sp = bMtx25_Len1Sp = bMtx25_Len2Sp = false;
            //enable, redundancy, checkDigitVerification, transmitCheckDigit
            //--GS1DataBar14
            bGS1Db14_ScLvSp = false;
            //---GS1DataBarLimited
            bGS1DbL_SecLvSp = false;
            //---GS1DataBarExpanded
            bGS1DbEx_ScLvSp = false;
            //---Ean13
            bEAN13_cvrISSN = false;
            //---Composite
            bCmpsSp = bCmpsCABSp = bCmpsCCSp = bCmpsT39Sp = bCmps_UPCMdSp = false;  //enableCc_C, enableCc_AB, enableTlc39, enableEmulationMode
            //---USPostal
            bUSPstSp = bUSPsnSp = bUSPlnSp = false; //enablePlanet, enablePostnet, transmitCheckDigit
            //---UKPostal
            bUKPstSp = false;  //transmitCheckDigit
            //---JapanPostal, AustralianPostal, DutchPostal, USPSPostal, UPUFICSPostal
            bJpPstSp = bAusPstSp = bDutPstSp = bUSPPstSp = bUPUPstSp = false;
            //---PDF417
            bPDFSp = bPDF_TrnMdSp = false;  //enable, escapeCharacter, transmitControlHeader
            //---MicroPDF417
            bMcrPDFSp = false; //code128Emulation
            //---DataMatrix
            bDtMtrxSp = bDtMtrx_FldSepSp = bDtMtrx_MrImgSp = false;
            //---MaxiCode, QRCode, MicroQR, Aztec
            bMxCdSp = bQRCdSp = bMcrQRSp = bAztcSp = false;
            //---Plessey
            bPlsySp = bPlsy_Len1Sp = bPlsy_Len2Sp = false; //unconventionalStop, transmitCheckDigit
            //---Telepen
            bTlpnSp = bTlpn_FmtSp = bTlpn_Len1Sp = bTlpn_Len2Sp = false;
            break;
        case "SE4750MR":
        case "SE4750SR":
        case "4500":
        case "SE4500":
            alert("set up SE4500/SE4750MR/SE4750SR non-supported param...");           
            //========Symbology===========
            //----Codabar
            bCB_NotisSp = false;
            //---PDF417
            bPDF_TrnMdSp = false;  //escapeCharacter, transmitControlHeader
            //---Plessey
            bPlsySp = bPlsy_Len1Sp = bPlsy_Len2Sp = false; //enable, unconventionalStop, transmitCheckDigit
            //---Telepen
            bTlpnSp = bTlpn_FmtSp = bTlpn_Len1Sp = bTlpn_Len2Sp = false;  //enable
            break;
        case "SM1":
            alert("set up SM1 non-supported param...");           
            //========Symbology===========
            //----Codabar
            bCB_NotisSp = false;
            //--Korean3Of5
            bKor35Sp = false;
            //--GS1128
            bGS1128_AppIDSp = bGS1128_AppIDM1Sp = bGS1128_AppIDM2Sp = false;
            //--ISBT128
            bISBT128_cnctSp = bISBT128_rednSp = false;
            //--Matrix2Of5
            bMtx25Sp = bMtx25_Len1Sp = bMtx25_Len2Sp = false;
            //enable, redundancy, checkDigitVerification, transmitCheckDigit
            //--GS1DataBar14
            bGS1Db14_ScLvSp = false;
            //---GS1DataBarLimited
            bGS1DbL_SecLvSp = false;
            //---GS1DataBarExpanded
            bGS1DbEx_ScLvSp = false;
            //---Ean13
            bEAN13_cvrISSN = false;
            //---Composite
            bCmpsSp = bCmpsCABSp = bCmpsCCSp = bCmpsT39Sp = bCmps_UPCMdSp = false;  //enableCc_C, enableCc_AB, enableTlc39, enableEmulationMode
            //---USPostal
            bUSPstSp = bUSPsnSp = bUSPlnSp = false; //enablePlanet, enablePostnet, transmitCheckDigit
            //---UKPostal
            bUKPstSp = false;  //transmitCheckDigit
            //---JapanPostal, AustralianPostal, DutchPostal, USPSPostal, UPUFICSPostal
            bJpPstSp = bAusPstSp = bDutPstSp = bUSPPstSp = bUPUPstSp = false;
            //---PDF417
            bPDFSp = bPDF_TrnMdSp = false;  //enable, escapeCharacter, transmitControlHeader
            //---MicroPDF417
            bMcrPDFSp = false; //code128Emulation
            //---DataMatrix
            bDtMtrxSp = bDtMtrx_FldSepSp = bDtMtrx_MrImgSp = false;
            //---MaxiCode, QRCode, MicroQR, Aztec
            bMxCdSp = bQRCdSp = bMcrQRSp = bAztcSp = false;
            //---Plessey
            bPlsySp = bPlsy_Len1Sp = bPlsy_Len2Sp = false; //unconventionalStop, transmitCheckDigit
            //---Telepen
            bTlpnSp = bTlpn_FmtSp = bTlpn_Len1Sp = bTlpn_Len2Sp = false;
            break;
        default:
            alert("setNonSprtSymbParam...no matched reader type.");
    }
}

function sortJsonObjByKey(oJson) {
    var sorted = {}, key, aTmp = [];

    for (key in oJson) {
        if (oJson.hasOwnProperty(key)) {
            aTmp.push(key);
        }
    }

    aTmp.sort();

    for (key = 0; key < aTmp.length; key++) {
        sortedReslt[aTmp[key]] = oJson[aTmp[key]];
    }
    return sortedReslt;
}