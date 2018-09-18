function ui_getNextValue(value, values)
{
    var size = values.length;
    var max_size = size-1;
    var index = 0;

    for (var i = 0; i < size; i++) 
    {
        var data = values[i];

        if(i == max_size)
        {
            if(value>=data)
            {
                index = i;
                index++;

                break;
            }
        }
        else
        {
            var data2 = values[i+1];

            if(value>=data && value<data2)
            {
                index = i;
                index++;

                //alert("ui_getNextValue.i="+i);
                //alert("ui_getNextValue.data="+data);
                //alert("ui_getNextValue.data2="+data2);

                break;
            }
        }
    }

    if(index>=size)
    {
        return values[0];
    }

    //alert("ui_getNextValue.index="+index);
    //alert("ui_getNextValue.ret="+values[index]);

    return values[index];
} 

function ui_getSelectValue(select_opeion_id)
{
    if(select_opeion_id==null)
    {
        return 'auto';
    }

    var e = document.getElementById(select_opeion_id);
    var selected_value = e.options[e.selectedIndex].value;

    return selected_value;
}

function ui_getSelectList(select_opeion_id) 
{
    if(select_opeion_id==null)
    {
        return [0];
    }

    var values = [];

    var e = document.getElementById(select_opeion_id);
    for (var i = 0; i < e.length; i++) 
    {
        var value = e.options[i].value;
        if(value==null)
        {
            continue;
        }

        if(value=='auto')
        {
            continue;
        }

        values.push(value);
    }

    return values;
}
