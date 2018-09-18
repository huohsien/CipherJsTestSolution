class CipherJsDataItem
{
    constructor(symbology_name, param_name, supported, default_value, valid_values, invalid_values)
    {
        this.symbology_name = symbology_name;
        this.param_name = param_name;
        this.supported = supported;
        this.default_value = default_value;
        this.valid_values = valid_values;
        this.invalid_values = invalid_values;
    }

    toString() 
    {
        return '('+this.symbology_name+', ' + this.name + ', ' + this.supported + ', ' + this.default_value + ', ' + this.valid_values + ', ' + this.invalid_values + ')';
    }
}

class CipherJsTestDataBase
{
    constructor()
    {
        this.ReaderTypeName = "";
        this.DecodersStatusDataList=[];
        this.UserPreferencesList=[];
        this.SymbologyDataList=[];
    }

    setReaderTypeName(readerTypeName)
    {
        this.ReaderTypeName=readerTypeName;
    }

    getReaderTypeName()
    {
        return this.ReaderTypeName;
    }

    getDecodersStatusDataList()
    {
        return this.DecodersStatusDataList;
    }

    addDecodersStatusData(param_name, supported, default_value, valid_values, invalid_values)
    {
        var cipher_js_data_item = new CipherJsDataItem("DecodersStatus", param_name, supported, default_value, valid_values, invalid_values);
        this.DecodersStatusDataList.push(cipher_js_data_item);
    }

    getUserPreferencesList()
    {
        return this.UserPreferencesList;
    }

    addUserPreferencesData(param_name, supported, default_value, valid_values, invalid_values)
    {
        var cipher_js_data_item = new CipherJsDataItem("UserPreferences", param_name, supported, default_value, valid_values, invalid_values);
        this.UserPreferencesList.push(cipher_js_data_item);
    }
                        
    getSymbologyNameList()
    {
        var symbology_name_list = [];
        var last_symbology_name = null;

        this.SymbologyDataList.forEach(function(item) 
        {
            var symbology_name = item.symbology_name;

            if(last_symbology_name==null)
            {
                last_symbology_name = symbology_name;
                symbology_name_list.push(last_symbology_name);
            }
            else
            {
                if(last_symbology_name!=symbology_name)
                {
                    last_symbology_name = symbology_name;
                    symbology_name_list.push(last_symbology_name);
                }
            }
        });

        return symbology_name_list;
    }

    getSymbologyData(in_symbology_name)
    {
        var list = [];

        if(in_symbology_name==null || in_symbology_name=="")
        {
            return list;
        }

        this.SymbologyDataList.forEach(function(item) 
        {
            var symbology_name = item.symbology_name;
            // var param_name = item.param_name;
            // var supported = item.supported;
            // var default_value = item.default_value;
            // var valid_values = item.valid_values;
            // var invalid_values = item.invalid_values;

            if(symbology_name==in_symbology_name)
            {
                list.push(item);
            }
        });

        return list;
    }

    addSymbologyData(symbology_name, param_name, supported, default_value, valid_values, invalid_values)
    {
        //alert("addSymbologyData("+symbology_name+", "+param_name+", "+supported+", "+default_value+", "+valid_values+", "+invalid_values+")");

        var cipher_js_data_item = new CipherJsDataItem(symbology_name, param_name, supported, default_value, valid_values, invalid_values);
        this.SymbologyDataList.push(cipher_js_data_item);
    }
}


class CipherJsTestActionBase extends CipherJsTestDataBase
{
    doJsAllTestModule()
    {
        this.doJsScannerAPITestModule(this);
        this.doJsDecodersStatusTestModule(this);
        this.doJsUserPreferencesTestModule(this);
        this.doJsSymbologyTestModule(this);
    }

    doJsScannerAPITestModule(data)
    {
        QUnit.module("SCANNER API");
    
        QUnit.test("BarCodeGetActive", function(assert) 
        {
            var value = null;
    
            try 
            {
                value = BarCodeGetActive();
            } 
            catch (error) 
            {
                assert_not_defined_api("BarCodeGetActive", error);
                return;
            }
    
            assert_value("BarCodeGetActive", value, true);
        });
    
        QUnit.test("BarCodeGetApiVersion", function(assert) 
        {
            var value = null;
    
            try 
            {
                value = BarCodeGetApiVersion();
            } 
            catch (error) 
            {
                assert_not_defined_api("BarCodeGetApiVersion", error);
                return;
            }
    
            assert_not_null_value("BarCodeGetApiVersion", value);
        });
    
        QUnit.test("BarCodeGetErrorMsg", function(assert) 
        {
            var ret_value = null;
            try 
            {
                ret_value = BarCodeGetErrorMsg();
            } 
            catch (error) 
            {
                assert_not_defined_api("BarCodeGetErrorMsg", error);
                return;
            }
    
            assert_value("BarCodeGetErrorMsg", ret_value, "");
        });
    
        QUnit.test("BarCodeGetReaderData", function(assert) 
        {
            var ret_value = null;
    
            try 
            {
                ret_value = BarCodeGetReaderData();
            } 
            catch (error) 
            {
                assert_not_defined_api("BarCodeGetReaderData", error);
                return;
            }
    
            assert_value("BarCodeGetReaderData", ret_value, "");
        });
    
        QUnit.test("BarCodeGetReaderOutputConfiguration", function(assert)
        {
            var ret_value = null;
            
            try 
            {
                ret_value = BarCodeGetReaderOutputConfiguration();
                assert_not_null_value("BarCodeGetReaderOutputConfiguration", ret_value, null);
            } 
            catch (error) 
            {
                assert_not_defined_api("BarCodeGetReaderOutputConfiguration", error);
                return;
            }
    
            assert_value_of_object("enableKeyboardEmulation", ret_value, "InputMethod");
            assert_value_of_object("autoEnterWay", ret_value, "SuffixData");
            assert_value_of_object("autoEnterChar", ret_value, "\r");
            assert_value_of_object("showCodeType", ret_value, false);
            assert_value_of_object("showCodeLen", ret_value, false);
            assert_value_of_object("szPrefixCode", ret_value, "");
            assert_value_of_object("szSuffixCode", ret_value, "");
            assert_value_of_object("useDelim", ret_value, 0);
            assert_value_of_object("szCharsetName", ret_value, "utf-8");
            assert_value_of_object("clearPreviousData", ret_value, 0);
        });
    
        QUnit.test("BarCodeSetReaderOutputConfiguration(configuration)", function(assert) 
        {
            var ret_value1 = null;
            var ret_value2 = null;
            var ret_value3 = null;
    
            try 
            {
                ret_value1 = BarCodeGetReaderOutputConfiguration();
                assert_not_null_value("BarCodeGetReaderOutputConfiguration", ret_value1);
            } 
            catch (error) 
            {
                assert_not_defined_api("BarCodeGetReaderOutputConfiguration", error);
                return;
            }
    
            try 
            {
                ret_value2 = BarCodeSetReaderOutputConfiguration(ret_value1);
                assert_not_null_value("BarCodeSetReaderOutputConfiguration", ret_value2);
            } 
            catch (error) 
            {
                assert_not_defined_api("BarCodeSetReaderOutputConfiguration", error);
                return;
            }
    
            try 
            {
                ret_value3 = BarCodeGetReaderOutputConfiguration();
                assert_not_null_value("BarCodeGetReaderOutputConfiguration", ret_value3);
            } 
            catch (error) 
            {
                assert_not_defined_api("BarCodeGetReaderOutputConfiguration", error);
                return;
            }
    
            assert_value_of_object("enableKeyboardEmulation", ret_value, "InputMethod");
            assert_value_of_object("autoEnterWay", ret_value, "SuffixData");
            assert_value_of_object("autoEnterChar", ret_value, "\r");
            assert_value_of_object("showCodeType", ret_value, false);
            assert_value_of_object("showCodeLen", ret_value, false);
            assert_value_of_object("szPrefixCode", ret_value, "");
            assert_value_of_object("szSuffixCode", ret_value, "");
            assert_value_of_object("useDelim", ret_value, 0);
            assert_value_of_object("szCharsetName", ret_value, "utf-8");
            assert_value_of_object("clearPreviousData", ret_value, 0);
        }); 
    
        QUnit.test("BarCodeGetReaderServiceVersion", function(assert) 
        {
            var ret_value = null;
    
            try 
            {
                ret_value = BarCodeGetReaderServiceVersion();
            } 
            catch (error) 
            {
                assert_not_defined_api("BarCodeGetReaderServiceVersion", error);    
                return;
            }
    
            assert_not_null_value("BarCodeGetReaderServiceVersion", ret_value);
        });
    
        QUnit.test("BarCodeGetNotificationParams", function(assert) 
        {
            var ret_value = null;
    
            try 
            {
                ret_value = BarCodeGetNotificationParams();
                assert_value("BarCodeGetNotificationParams", ret_value);
            } 
            catch (error) 
            {
                assert_not_defined_api("BarCodeGetNotificationParams", error);    
                return;
            }
    
            assert_value_of_object("ledDuration", ret_value, 0);
            assert_value_of_object("vibrationCounter", ret_value, 1);
            assert_value_of_object("enableVibrator", ret_value, false);
            assert_value_of_object("ReaderBeep", ret_value, "Default");
        });
    
        QUnit.test("BarCodeSetNotificationParams(params)", function(assert) 
        {
            var ret_value1 = null;
            var ret_value2 = null;
            var ret_value3 = null;
    
            try 
            {
                ret_value1 = BarCodeGetNotificationParams();
                assert_not_null_value("BarCodeGetNotificationParams", ret_value1);
            } 
            catch (error) 
            {
                assert_not_defined_api("BarCodeGetNotificationParams", error);
                return;
            }
    
            try 
            {
                ret_value2 = BarCodeSetNotificationParams(ret_value1);
                assert_not_null_value("BarCodeSetNotificationParams", ret_value2);
            } 
            catch (error) 
            {
                assert_not_defined_api("BarCodeSetNotificationParams", error);
                return;
            }
    
            try 
            {
                ret_value3 = BarCodeGetNotificationParams();
                assert_not_null_value("BarCodeGetNotificationParams", ret_value3);
            } 
            catch (error) 
            {
                assert_not_defined_api("BarCodeGetNotificationParams", error);
                return;
            }
    
            assert_value_of_object("ledDuration", ret_value3, 0);
            assert_value_of_object("vibrationCounter", ret_value3, 1);
            assert_value_of_object("enableVibrator", ret_value3, false);
            assert_value_of_object("ReaderBeep", ret_value3, "Default");
        });
    }
    
    doJsDecodersStatusTestModule(data)
    {
        QUnit.module("DecodersStatus");
    
        QUnit.test("BarCodeGetDecodersStatus[default value]", function(assert)
        {
            try 
            {
                BarCodeReset();
            } 
            catch (error) 
            {
                assert_not_defined_api("BarCodeReset", error);
                return;
            }
    
            var ret_value = null;
    
            try 
            {
                ret_value = BarCodeGetDecodersStatus();
            } 
            catch (error) 
            {
                assert_not_defined_api("BarCodeGetDecodersStatus", error);
                return;
            }
    
            var testData = data.getDecodersStatusDataList();
    
            testData.forEach(function(item) 
            {
                var param_name = item.param_name;
                var supported = item.supported;
                var default_value = item.default_value;
                var valid_values = item.valid_values;
                var invalid_values = item.invalid_values;
    
                assert_BarCodeGetDecodersStatus_default_value(param_name, supported, ret_value, default_value);
            });
        });
    
        QUnit.test("BarCodeSetDecodersStatus[valid]", function(assert)
        {
            var testData = data.getDecodersStatusDataList();
    
            testData.forEach(function(item) 
            {
                var param_name = item.param_name;
                var supported = item.supported;
                var default_value = item.default_value;
                var valid_values = item.valid_values;
                var invalid_values = item.invalid_values;
    
                assert_BarCodeSetDecodersStatus_valid_value(param_name, valid_values);
            });
        });
    
        QUnit.test("BarCodeSetDecodersStatus[invalid]", function(assert)
        {
            var testData = data.getDecodersStatusDataList();
    
            testData.forEach(function(item) 
            {
                var param_name = item.param_name;
                var supported = item.supported;
                var default_value = item.default_value;
                var valid_values = item.valid_values;
                var invalid_values = item.invalid_values;
    
                assert_BarCodeSetDecodersStatus_invalid_value(param_name, invalid_values);
            });
        });
    }
    
    doJsUserPreferencesTestModule(data)
    {
        QUnit.module("UserPreferences");
    
        QUnit.test("BarCodeGetUserPreferences[default value]", function(assert)
        {
            try 
            {
                BarCodeReset();
            } 
            catch (error) 
            {
                assert_not_defined_api("BarCodeReset", error);
                return;
            }
    
            var ret_value = null;
    
            try 
            {
                ret_value = BarCodeGetUserPreferences();
            } 
            catch (error) 
            {
                assert_not_defined_api("BarCodeGetUserPreferences", error);
                return;
            }
    
            var testData = data.getUserPreferencesList();
            testData.forEach(function(item) 
            {
                var param_name = item.param_name;
                var supported = item.supported;
                var default_value = item.default_value;
                var valid_values = item.valid_values;
                var invalid_values = item.invalid_values;
    
                assert_BarCodeSetUserPreferences_default_value(param_name, supported, ret_value, default_value);
            });
        });
    
        QUnit.test("BarCodeGetUserPreferences[valid]", function(assert)
        {
            var testData = data.getDecodersStatusDataList();
            testData.forEach(function(item) 
            {
                var param_name = item.param_name;
                var supported = item.supported;
                var default_value = item.default_value;
                var valid_values = item.valid_values;
                var invalid_values = item.invalid_values;
    
                assert_BarCodeSetUserPreferences_valid_value(param_name, valid_values);
            });
        });
    
        QUnit.test("BarCodeGetUserPreferences[invalid]", function(assert)
        {
            var testData = data.getDecodersStatusDataList();
            testData.forEach(function(item) 
            {
                var param_name = item.param_name;
                var supported = item.supported;
                var default_value = item.default_value;
                var valid_values = item.valid_values;
                var invalid_values = item.invalid_values;
    
                assert_BarCodeSetUserPreferences_invalid_value(param_name, invalid_values);
            });
        });
    }
    
    
    
    
    doJsSymbologyItemTestModule(symbology_name, cipherJsSymbologyDataItem)
    {
        //alert("doJsSymbologyItemTestModule("+symbology_name+","+cipherJsSymbologyDataItem+")");
    
        QUnit.test(symbology_name+"[default value]", function(assert)
        {
            var ret_BarCodeGetSymbology = null;
    
            try 
            {
                ret_BarCodeGetSymbology = BarCodeGetSymbology(symbology_name);
            } 
            catch (error) 
            {
                assert_not_defined_api("BarCodeGetSymbology", error);
                return;
            }
    
            cipherJsSymbologyDataItem.forEach(function(item) 
            {
                var param_name = item.param_name;
                var supported = item.supported;
                var default_value = item.default_value;
                var valid_values = item.valid_values;
                var invalid_values = item.invalid_values;
    
                //alert("param_name="+param_name);
                //alert("supported="+supported);
                //alert("ret_BarCodeGetSymbology="+ret_BarCodeGetSymbology);
                //alert("default_value="+default_value);
    
                assert_BarCodeGetSymbology_default_value(param_name, supported, ret_BarCodeGetSymbology, default_value);
            });
        });
    
        QUnit.test(symbology_name+"[valid]", function(assert)
        {
            cipherJsSymbologyDataItem.forEach(function(item) 
            {
                var param_name = item.param_name;
                var supported = item.supported;
                var default_value = item.default_value;
                var valid_values = item.valid_values;
                var invalid_values = item.invalid_values;
    
                assert_BarCodeSetSymbology_valid_value(symbology_name, param_name, valid_values);
            });
        });
    
        QUnit.test(symbology_name+"[invalid]", function(assert)
        {
            cipherJsSymbologyDataItem.forEach(function(item) 
            {
                var param_name = item.param_name;
                var supported = item.supported;
                var default_value = item.default_value;
                var valid_values = item.valid_values;
                var invalid_values = item.invalid_values;
    
                assert_BarCodeSetSymbology_invalid_value(symbology_name, param_name, invalid_values);
            });
        });
    }
    
    doJsSymbologyTestModule(data)
    {
        QUnit.module("Symbology");
    
        var symbologyNameList = data.getSymbologyNameList();
        if(symbologyNameList==null)
        {
            alert("No SymbologyNameList!!");
            return;
        }
    
        symbologyNameList.forEach(function(item) 
        {
            var symbology_name = item;
            var data_list = data.getSymbologyData(symbology_name);
    
            data.doJsSymbologyItemTestModule(symbology_name, data_list);
        });
    }
}






