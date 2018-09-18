//get_exp_string
function get_string_exp_value(in_value, in_exp_value)
{
    if(in_value==in_exp_value)
    {
        return "[" + in_value + "]==" + in_exp_value + "]";
    }

    return "[" + in_value + "!=" + in_exp_value + "]";
}

function assert_value(in_function_name, in_value, in_exp_value) 
{
    var exp_string = "";

    if(in_value==in_exp_value)
    {
        exp_string = "[" + in_value + "]==" + in_exp_value + "]";
    }
    else
    {
        exp_string = "[" + in_value + "!=" + in_exp_value + "]";
    }

    QUnit.assert.ok(in_value == in_exp_value, "[" + in_function_name + "]return value passed" + exp_string);
}

function assert_value_of_object(in_param_name, in_object, in_exp_value) 
{
    var value = null;
    
    if(in_object==null || in_object==undefined)
    {
        value = null;
    }
    else
    {
        value = in_object[in_param_name];
    }
    
    var exp_string = "";

    if(value==in_exp_value)
    {
        exp_string = "[" + value + "]==" + in_exp_value + "]";
    }
    else
    {
        exp_string = "[" + value + "!=" + in_exp_value + "]";
    }

    QUnit.assert.ok(value==in_exp_value, "[" + in_param_name + "]return value of object passed" + exp_string);
}

function assert_not_null_value(in_function_name, in_value) 
{
    var exp_string = "";

    if(in_value==null)
    {
        exp_string = "[" + in_value + "]==null]";
    }
    else
    {
        exp_string = "[" + in_value + "!=null]";
    }

    QUnit.assert.ok(in_value != null, "[" + in_function_name + "]return not null value passed" + exp_string);
}

function assert_not_undefined_value(in_function_name, in_value) 
{
    var exp_string = "";

    if(in_value==undefined)
    {
        exp_string = "[" + in_value + "]==undefined]";
    }
    else
    {
        exp_string = "[" + in_value + "!=undefined]";
    }

    QUnit.assert.ok(in_value != in_exp_value, "[" + in_function_name + "]return undefined value passed" + exp_string);
}

function assert_not_defined_api(in_function_name, error) 
{
    QUnit.assert.ok(false, "[" + in_function_name + "]" + error);
}

function assert_BarCodeGetErrorMsg(in_param_name)
{
    var msg = null;

    try 
    {
        msg = BarCodeGetErrorMsg();    
    } 
    catch (error) 
    {
        assert_not_defined_api("BarCodeGetErrorMsg("+in_param_name+")", error);
        return;
    }
    
    var bError = true;
    var sMsg2 = "";
    if(msg==null)
    {
        bError = false;
        sMsg2="[null]";
    }
    else if(msg==undefined)
    {
        bError = false;
        sMsg2="[undefined]";
    }
    else if(msg.indexOf(in_param_name)<0)
    {
        bError = false;
        sMsg2="["+msg+"]";
    }

    QUnit.assert.ok(bError, "[" + in_name + "]ErrorMsg passed"+sMsg2);
}
















function assert_BarCodeGetDecodersStatus_default_value(in_param_name, in_supported, in_object, in_exp_value) {
    var value = in_object[in_param_name];

    //Supported
    if(in_supported==true)
    {
        var exp_string = get_string_exp_value(value, in_exp_value);
        QUnit.assert.ok(value == in_exp_value, "[Default][" + in_param_name + "]default value passed" + exp_string);
        return;
    }

    //Not supported
    var exp_string = get_string_exp_value(value, undefined);
    QUnit.assert.ok(value == undefined, "[Default][" + in_param_name + "]is not supported passed" + exp_string);
}

function assert_BarCodeSetDecodersStatus_valid_value(in_param_name, in_value_list)
{
    if(in_value_list==null)
    {
        try 
        {
            var ojsdecoderstat = BarCodeGetDecodersStatus();
            if(ojsdecoderstat==null)
            {
                QUnit.assert.ok(true, "[Valid][" + in_param_name + "]get null value passed");
            }
            else
            {
                QUnit.assert.ok(false, "[Valid][" + in_param_name + "]get null value passed["+ojsdecoderstat+"!=null]");
            }
        } 
        catch (error) 
        {
            assert_not_defined_api("[Valid]BarCodeGetDecodersStatus("+in_param_name+")", error);
            return;
        }

        return;
    }

    var new_in_value_list = js_toArray(in_value_list);

    for (var i = 0; i < new_in_value_list.length; i++) 
    {
        var value = new_in_value_list[i];
        var ojsdecoderstat = null;
        
        try 
        {
            ojsdecoderstat = BarCodeGetDecodersStatus();
        } 
        catch (error) 
        {
            assert_not_defined_api("[Valid]BarCodeGetDecodersStatus("+in_param_name+")", error);
            return;
        }

        ojsdecoderstat[in_param_name] = value;
    
        var ret = null;

        try 
        {
            ret = BarCodeSetDecodersStatus(ojsdecoderstat);
        } 
        catch (error) 
        {
            assert_not_defined_api("[Valid]BarCodeSetDecodersStatus("+in_param_name+")", error);
            return;
        }

        var new_ojsdecoderstat = null;

        try 
        {
            new_ojsdecoderstat = BarCodeGetDecodersStatus();
        } 
        catch (error) 
        {
            assert_not_defined_api("[Valid]BarCodeGetDecodersStatus("+in_param_name+")", error);
            return;
        }

        var new_value = new_ojsdecoderstat[in_param_name];
    
        QUnit.assert.ok(new_value==value, "[Valid][" + in_param_name + "]set " + value + " passed["+new_value+"]");
        QUnit.assert.ok(ret==true, "[Valid][" + in_param_name + "]return TRUE passed["+ret+"]");
    }
}

function assert_BarCodeSetDecodersStatus_invalid_value(in_param_name, in_set_invalue_list)
{
    if(in_set_invalue_list==null)
    {
        try 
        {
            var ojsdecoderstat = BarCodeGetDecodersStatus();
            if(ojsdecoderstat==null)
            {
                QUnit.assert.ok(true, "[Invalid][" + in_param_name + "]get null value passed");
            }
            else
            {
                QUnit.assert.ok(false, "[Invalid][" + in_param_name + "]get null value passed["+ojsdecoderstat+"!=null]");
            }
        } 
        catch (error) 
        {
            assert_not_defined_api("[Invalid]BarCodeGetDecodersStatus("+in_param_name+")", error);
            return;
        }

        return;
    }

    var new_in_set_invalue_list = js_toArray(in_set_invalue_list);

    for (var i = 0; i < new_in_set_invalue_list.length; i++) 
    {
        var value = new_in_set_invalue_list[i];
        var ojsdecoderstat = null;
        
        try 
        {
            ojsdecoderstat = BarCodeGetDecodersStatus();
        } 
        catch (error) 
        {
            assert_not_defined_api("[Invalid]BarCodeGetDecodersStatus("+in_param_name+")", error);
            return;
        }

        ojsdecoderstat[in_param_name] = value;
    
        var ret = null;

        try 
        {
            ret = BarCodeSetDecodersStatus(ojsdecoderstat);
        } 
        catch (error) 
        {
            assert_not_defined_api("[Invalid]BarCodeSetDecodersStatus("+in_param_name+")", error);
            return;
        }

        var new_ojsdecoderstat = null;

        try 
        {
            new_ojsdecoderstat = BarCodeGetDecodersStatus();
        } 
        catch (error) 
        {
            assert_not_defined_api("[Invalid]BarCodeGetDecodersStatus("+in_param_name+")", error);
            return;
        }

        var new_value = new_ojsdecoderstat[in_param_name];
    
        QUnit.assert.ok(new_value==old_value, "[Invalid][" + in_param_name + "]set " + value + " passed["+new_value+"]");
        QUnit.assert.ok(ret==false, "[Invalid][" + in_param_name + "]return FALSE passed["+ret+"]");
    
        assert_BarCodeGetErrorMsg(in_param_name);
    }
}








function assert_BarCodeSetUserPreferences_default_value(in_param_name, in_supported, in_object, in_exp_value) {
    var value = in_object[in_param_name];

    //Supported
    if(in_supported==true)
    {
        var exp_string = get_string_exp_value(value, in_exp_value);
        QUnit.assert.ok(value == in_exp_value, "[Default][" + in_param_name + "]default value passed" + exp_string);
        return;
    }

    //Not supported
    var exp_string = get_string_exp_value(value, undefined);
    QUnit.assert.ok(value == undefined, "[Default][" + in_param_name + "]is not supported passed" + exp_string);
}

function assert_BarCodeSetUserPreferences_valid_value(in_param_name, in_value_list)
{
    if(in_value_list==null)
    {
        try 
        {
            var ojsdecoderstat = BarCodeGetUserPreferences();
			
            if(ojsdecoderstat==null)
            {
                QUnit.assert.ok(true, "[Valid][" + in_param_name + "]get null value passed");
            }
            else
            {
                QUnit.assert.ok(false, "[Valid][" + in_param_name + "]get null value passed["+ojsdecoderstat+"!=null]");
            }
        } 
        catch (error) 
        {
            assert_not_defined_api("[Valid]BarCodeGetUserPreferences("+in_param_name+")", error);
            return;
        }

        return;
    }

    var new_in_value_list = js_toArray(in_value_list);

    for (var i = 0; i < new_in_value_list.length; i++) 
    {
        var value = new_in_value_list[i];
        var ojsdecoderstat = null;
        
        try 
        {
            ojsdecoderstat = BarCodeGetUserPreferences();
        } 
        catch (error) 
        {
            assert_not_defined_api("[Valid]BarCodeGetUserPreferences("+in_param_name+")", error);
            return;
        }

        ojsdecoderstat[in_param_name] = value;
    
        var ret = null;

        try 
        {
            ret = BarCodeSetUserPreferences(ojsdecoderstat);
        } 
        catch (error) 
        {
            assert_not_defined_api("[Valid]BarCodeSetUserPreferences("+in_param_name+")", error);
            return;
        }

        var new_ojsdecoderstat = null;

        try 
        {
            new_ojsdecoderstat = BarCodeGetUserPreferences();
        } 
        catch (error) 
        {
            assert_not_defined_api("[Valid]BarCodeGetUserPreferences("+in_param_name+")", error);
            return;
        }

        var new_value = new_ojsdecoderstat[in_param_name];
    
        QUnit.assert.ok(new_value==value, "[Valid][" + in_param_name + "]set " + value + " passed["+new_value+"]");
        QUnit.assert.ok(ret==true, "[Valid][" + in_param_name + "]return TRUE passed["+ret+"]");
    }
}

function assert_BarCodeSetUserPreferences_invalid_value(in_param_name, in_set_invalue_list)
{
    if(in_set_invalue_list==null)
    {
        try 
        {
            var ojsdecoderstat = BarCodeGetUserPreferences();
			
            if(ojsdecoderstat==null)
            {
                QUnit.assert.ok(true, "[Invalid][" + in_param_name + "]get null value passed");
            }
            else
            {
                QUnit.assert.ok(false, "[Invalid][" + in_param_name + "]get null value passed["+ojsdecoderstat+"!=null]");
            }
        } 
        catch (error) 
        {
            assert_not_defined_api("[Invalid]BarCodeGetUserPreferences("+in_param_name+")", error);
            return;
        }

        return;
    }

    var new_in_set_invalue_list = js_toArray(in_set_invalue_list);

    for (var i = 0; i < new_in_set_invalue_list.length; i++) 
    {
        var value = new_in_set_invalue_list[i];
        var ojsdecoderstat = null;
        
        try 
        {
            ojsdecoderstat = BarCodeGetUserPreferences();
        } 
        catch (error) 
        {
            assert_not_defined_api("[Invalid]BarCodeGetUserPreferences("+in_param_name+")", error);
            return;
        }

        ojsdecoderstat[in_param_name] = value;
    
        var ret = null;

        try 
        {
            ret = BarCodeSetUserPreferences(ojsdecoderstat);
        } 
        catch (error) 
        {
            assert_not_defined_api("[Invalid]BarCodeSetUserPreferences("+in_param_name+")", error);
            return;
        }

        var new_ojsdecoderstat = null;

        try 
        {
            new_ojsdecoderstat = BarCodeGetUserPreferences();
        } 
        catch (error) 
        {
            assert_not_defined_api("[Invalid]BarCodeGetUserPreferences("+in_param_name+")", error);
            return;
        }

        var new_value = new_ojsdecoderstat[in_param_name];
    
        QUnit.assert.ok(new_value==old_value, "[Invalid][" + in_param_name + "]set " + value + " passed["+new_value+"]");
        QUnit.assert.ok(ret==false, "[Invalid][" + in_param_name + "]return FALSE passed["+ret+"]");
    
        assert_BarCodeGetErrorMsg(in_param_name);
    }
}












function assert_BarCodeGetSymbology_default_value(in_param_name, in_supported, in_object, in_exp_value)
{
    var value = in_object[in_param_name];

    if(in_supported==true)
    {
        var exp_string = get_string_exp_value(value, in_exp_value);
        QUnit.assert.ok(value == in_exp_value, "[Default][" + in_param_name + "]default value passed" + exp_string);

        return;
    }

    var exp_string = get_string_exp_value(value, undefined);
    QUnit.assert.ok(value == undefined, "[Default][" + in_param_name + "]is not supported passed" + exp_string);
}

function assert_BarCodeSetSymbology_valid_value(symbology_name, in_param_name, in_values)
{
    var new_in_values = js_toArray(in_values);
    
    for (var i = 0; i < new_in_values.length; i++) 
    {
        var value = new_in_values[i];
        var objSymbology = null;

        try 
        {
            objSymbology = BarCodeGetSymbology(symbology_name);
        } 
        catch (error) 
        {
            assert_not_defined_api("[Valid]BarCodeGetSymbology("+symbology_name+","+in_param_name+")", error);
            return;
        }

        objSymbology[in_param_name]=value;
        var ret = null;
        
        try 
        {
            ret = BarCodeSetSymbology(objSymbology);
        } 
        catch (error) 
        {
            assert_not_defined_api("[Valid]BarCodeSetSymbology("+symbology_name+","+in_param_name+")", error);
            return;
        }

        var new_objSymbology = null;

        try 
        {
            new_objSymbology = BarCodeGetSymbology(symbology_name);
        } 
        catch (error) 
        {
            assert_not_defined_api("[Valid]BarCodeGetSymbology("+symbology_name+","+in_param_name+")", error);
            return;
        }

        var new_value = new_objSymbology[in_param_name];
    
        QUnit.assert.ok(new_value==value, "[Valid][" + in_param_name + "]set " + value + " passed["+new_value+"]");
        QUnit.assert.ok(ret==true, "[Valid][" + in_param_name + "]return TRUE passed["+ret+"]");
    }
}

function assert_BarCodeSetSymbology_invalid_value(symbology_name, in_param_name, in_values)
{
    var new_in_values = js_toArray(in_values);
    
    for (var i = 0; i < new_in_values.length; i++) 
    {
        var value = new_in_values[i];
        var objSymbology = null;

        try 
        {
            objSymbology = BarCodeGetSymbology(symbology_name);
        } 
        catch (error) 
        {
            assert_not_defined_api("[Invalid]BarCodeGetSymbology("+symbology_name+","+in_param_name+")", error);
            return;
        }

        var old_value = objSymbology[in_param_name];
        objSymbology[in_param_name]=value;
    
        var ret = null;

        try 
        {
            ret = BarCodeSetSymbology(objSymbology);
        } 
        catch (error) 
        {
            assert_not_defined_api("[Invalid]BarCodeSetSymbology("+symbology_name+","+in_param_name+")", error);
            return;
        }

        var new_objSymbology = BarCodeGetSymbology(symbology_name);
        var new_value = new_objSymbology[in_param_name];
    
        QUnit.assert.ok(new_value==old_value, "[Invalid][" + in_param_name + "]set " + value + " passed["+new_value+"]");
        QUnit.assert.ok(ret==false, "[Invalid][" + in_param_name + "]return FALSE passed["+ret+"]");
    
        assert_BarCodeGetErrorMsg(in_param_name);
    }
}


