var zz = $('#zz').html();
var rmk = {};
var drmk = [];
var sps = {};
var dsps = [];
var cVf = [];
var eCx = {};
var qq = true;
//var lvm = 0.0000000050;
var lvm = 0.0500;
var sIp = false;
function sMd() {
    $('[aria-describedby="dialog-form3"]').hide();
    var filtered_data = [];
    if (!drmk.length) {
        if (rmk) {
            $.each(rmk, function (ind, val) {
                var ar = [];
                ar.push(val['title']);
                ar.push(val['inn']);
                ar.push(val['kpp']);
                drmk.push(ar);
            })
        }
    }
    ;
    var ___g = $("#grid_makers");
    var v_806 = {search: function () {
            var txt = $("#grid_makers input.pq-filter-txt").val().toUpperCase(), DM = ___g.pqGrid("option", "dataModel");
            DM.filterValue = txt;
            if (txt.length) {
                filtered_data = [];
                $.each(drmk, function () {
                    for (var i = 0; i <= 2; ++i) {
                        var val = this[i] ? this[i].toString() : '';
                        var txt = DM.filterValue ? DM.filterValue : "";
                        var txtUpper = txt.toUpperCase();
                        var valUpper = val.toUpperCase();
                        var indx = valUpper.indexOf(txtUpper);
                        if (indx >= 0 && $.inArray(this, filtered_data) == -1) {
                            filtered_data.push(this);
                        }
                    }
                })
            }
            DM.data = filtered_data;
            ___g.pqGrid("refreshDataAndView");
        }, render: function (ui) {
            var DM = ___g.pqGrid("option", "dataModel");
            var rowData = ui.rowData;
            var dataIndx = ui.dataIndx;
            var val = rowData[dataIndx] ? rowData[dataIndx].toString() : '';
            var txt = DM.filterValue ? DM.filterValue : "";
            var txtUpper = txt.toUpperCase();
            var valUpper = val.toUpperCase();
            var indx = valUpper.indexOf(txtUpper);
            if (indx >= 0) {
                var txt1 = val.substring(0, indx);
                var txt2 = val.substring(indx, indx + txt.length);
                var txt3 = val.substring(indx + txt.length);
                return txt1 + "<span style='background:yellow;color:#333;'>" + txt2 + "</span>" + txt3;
            }
            return val;
        }};
    var newObj = {width: 950, flexHeight: true, flexWidth: true, title: "Производители", editable: false, };
    newObj.dataModel = {data: drmk, location: "local", sorting: "local", paging: "local", curPage: 1, rPP: 20, sortIndx: 2, sortDir: "up", rPPOptions: [1, 10, 20, 30, 40, 50, 100, 500, 1000], filterValue: "", };
    newObj.colModel = [{title: "Наименование", width: 200, dataType: "string", render: function (ui) {
                return v_806.render(ui);
            }}, {title: "ИНН", width: 100, dataType: "string", render: function (ui) {
                return v_806.render(ui);
            }}, {title: "КПП", width: 100, dataType: "string", align: "right", render: function (ui) {
                return v_806.render(ui);
            }}];
    newObj.scrollModel = {horizontal: false, pace: 'fast'};
    newObj.rowDblClick = function (event, ui) {
        var rowIndx = ui.rowIndx;
        var mak = ui['dataModel']['data'][rowIndx];
        sM(mak);
    };
    newObj.render = function (evt, obj) {
        var $toolbar = $("<div class='pq-grid-toolbar pq-grid-toolbar-search'></div>").appendTo($(".pq-grid-top", this));
        $("<span>Поиск</span>").appendTo($toolbar);
        $("<input type='text' class='pq-filter-txt'/>").appendTo($toolbar).keyup(function (evt) {
            filtered_data = drmk;
            v_806.search();
        });
    };
    ___g.pqGrid(newObj);
    ___g.dialog('open');
    ___g.pqGrid("refreshDataAndView");
    if ($("#grid_makers input.pq-filter-txt").val().length) {
        v_806.search();
    }
}
;
function sM(p) {
    if ($.type(p) == 'object') {
        var y_221 = $('table.pq-grid-table').find('tr.pq-row-select');
        if (!y_221.length) {
            alert('Производитель не выбран!');
            return;
        }
        var selectedRowIndx = y_221.attr('pq-row-indx');
        var DM = $("#grid_makers").pqGrid("option", 'dataModel');
        p = DM.data[selectedRowIndx];
    }
    $('#DPopupVal3').val(p[0]);
    $('#EPopupVal3').val(p[1]);
    $('#FPopupVal3').val(p[2]);
    $('#DPopupVal3').removeClass("ui-state-error");
    $('#EPopupVal3').removeClass("ui-state-error");
    $('#FPopupVal3').removeClass("ui-state-error");
    _dgm_.dialog("close");
}
;
function sSd() {
    $('[aria-describedby="dialog-form3"]').hide();
    var filtered_data = [];
    if (!dsps.length) {
        if (sps) {
            $.each(sps, function (ind, val) {
                var ar = [];
                ar.push(val['title']);
                ar.push(val['inn']);
                ar.push(val['kpp']);
                if (val['licence']) {
                    ar.push(val['licence']);
                }
                dsps.push(ar);
            })
        }
    }
    var _y_w = $("#grid_suppliers");
    var v_806 = {search: function () {
            var txt = $("#grid_suppliers input.pq-filter-txt").val().toUpperCase(), DM = _y_w.pqGrid("option", "dataModel");
            DM.filterValue = txt;
            if (txt.length) {
                filtered_data = [];
                $.each(dsps, function () {
                    for (var i = 0; i <= 2; ++i) {
                        var val = this[i] ? this[i].toString() : '';
                        var txt = DM.filterValue ? DM.filterValue : "";
                        var txtUpper = txt.toUpperCase();
                        var valUpper = val.toUpperCase();
                        var indx = valUpper.indexOf(txtUpper);
                        if (indx >= 0 && $.inArray(this, filtered_data) == -1) {
                            filtered_data.push(this);
                        }
                    }
                })
            }
            DM.data = filtered_data;
            _y_w.pqGrid("refreshDataAndView");
        }, render: function (ui) {
            var DM = _y_w.pqGrid("option", "dataModel"), rowData = ui.rowData, dataIndx = ui.dataIndx, val = rowData[dataIndx], txt = DM.filterValue ? DM.filterValue : "", txtUpper = txt.toUpperCase(), valUpper = val.toUpperCase();
            var indx = valUpper.indexOf(txtUpper);
            if (indx >= 0) {
                var txt1 = val.substring(0, indx);
                var txt2 = val.substring(indx, indx + txt.length);
                var txt3 = val.substring(indx + txt.length);
                return txt1 + "<span style='background:yellow;color:#333;'>" + txt2 + "</span>" + txt3;
            }
            return val;
        }};
    var newObj = {width: 951, flexHeight: true, flexWidth: true, title: "Поставщики", editable: false, };
    newObj.dataModel = {data: dsps, location: "local", sorting: "local", paging: "local", curPage: 1, rPP: 20, sortIndx: 2, sortDir: "up", rPPOptions: [1, 10, 20, 30, 40, 50, 100, 500, 1000], filterValue: "", };
    newObj.colModel = [{title: "Наименование", width: 200, dataType: "string", render: function (ui) {
                return v_806.render(ui);
            }}, {title: "ИНН", width: 100, dataType: "string", render: function (ui) {
                return v_806.render(ui);
            }}, {title: "КПП", width: 100, dataType: "string", align: "right", render: function (ui) {
                return v_806.render(ui);
            }}];
    newObj.scrollModel = {horizontal: false, pace: 'fast'};
    newObj.rowDblClick = function (event, ui) {
        var rowIndx = ui.rowIndx;
        var mak = ui['dataModel']['data'][rowIndx];
        sS(mak);
    };
    newObj.render = function (evt, obj) {
        var $toolbar = $("<div class='pq-grid-toolbar pq-grid-toolbar-search'></div>").appendTo($(".pq-grid-top", this));
        $("<span>Поиск</span>").appendTo($toolbar);
        $("<input type='text' class='pq-filter-txt'/>").appendTo($toolbar).keyup(function (evt) {
            filtered_data = dsps;
            v_806.search();
        });
    };
    _y_w.pqGrid(newObj);
    _y_w.dialog('open');
    _y_w.pqGrid("refreshDataAndView");
    if ($("#grid_suppliers input.pq-filter-txt").val().length) {
        v_806.search();
    }
}
;
function sS(z) {
    if ($.type(z) == 'object') {
        var y_221 = $('table.pq-grid-table').find('tr.pq-row-select');
        if (!y_221.length) {
            alert('Производитель не выбран!');
            return;
        }
        var selectedRowIndx = y_221.attr('pq-row-indx');
        var DM = $("#grid_suppliers").pqGrid("option", 'dataModel');
        z = DM.data[selectedRowIndx];
    }
    $('#GPopupVal3').val(z[0]);
    $('#HPopupVal3').val(z[1]);
    $('#IPopupVal3').val(z[2]);
    $('#GPopupVal3').removeClass("ui-state-error");
    $('#HPopupVal3').removeClass("ui-state-error");
    $('#IPopupVal3').removeClass("ui-state-error");
    if (zz == 11 && z[3]) {
        $('#JPopupVal3').val(z[3]['number']);
        var issue_date = new Date(z[3]['issue_date'] * 1000);
        var v_803 = issue_date.getFullYear();
        var v_802 = issue_date.getMonth() + 1;
        if (v_802 < 10) {
            v_802 = '0' + v_802;
        }
        var v_804 = issue_date.getDate();
        if (v_804 < 10) {
            v_804 = '0' + v_804;
        }
        var v_805 = v_804 + '.' + v_802 + '.' + v_803;
        var expire_date = new Date(z[3]['expire_date'] * 1000);
        var expire_date_year = expire_date.getFullYear();
        var expire_date_month = expire_date.getMonth() + 1;
        if (expire_date_month < 10) {
            expire_date_month = '0' + expire_date_month;
        }
        var expire_date_day = expire_date.getDate();
        if (expire_date_day < 10) {
            expire_date_day = '0' + expire_date_day;
        }
        var expire_date_formatted = expire_date_day + '.' + expire_date_month + '.' + expire_date_year;
        $('#KPopupVal3').val(v_805);
        $('#LPopupVal3').val(expire_date_formatted);
        $('#MPopupVal3').val(z[3]['given_by']);
        $('#KPopupVal3').removeClass("ui-state-error");
        $('#LPopupVal3').removeClass("ui-state-error");
        $('#MPopupVal3').removeClass("ui-state-error");
    }
    _dgs.dialog("close");
}
;
function sX() {
    if (!_c()) {
        return;
    }
    var values = {};
    values[1] = {};
    values[2] = {};
    $('#one .cellExcelHeadRow').each(function (ind, rowCell) {
        var row = $(rowCell).parent().attr('rownum');
        values[1][row] = {};
        values[1][row]['class'] = $(rowCell).parent().attr('class');
        values[1][row]['values'] = {};
        $('#one .cellExcelHeadLetter').each(function (ind, columnCell) {
            var column = columnCell.innerHTML;
            var colRow = column + row;
            var elem = $('#1_' + colRow);
            var elemVal;
            var elemlemType = elem.prop('tagName');
            if (elemlemType == 'TD' || elemlemType == 'TH') {
                elemVal = elem.html();
            } else {
                elemVal = elem.val();
            }
            values[1][row]['values'][colRow] = {};
            values[1][row]['values'][colRow]['value'] = elemVal;
            values[1][row]['values'][colRow]['formula'] = elem.attr('formula');
            values[1][row]['values'][colRow]['colspan'] = elem.attr('colspan');
            values[1][row]['values'][colRow]['rowspan'] = elem.attr('rowspan');
        });
    });
    $('#two .cellExcelHeadRow').each(function (ind, rowCell) {
        var row = $(rowCell).parent().attr('rownum');
        values[2][row] = {};
        values[2][row]['class'] = $(rowCell).parent().attr('class');
        values[2][row]['values'] = {};
        $('#two .cellExcelHeadLetter').each(function (ind, columnCell) {
            var column = columnCell.innerHTML;
            var colRow = column + row;
            var elem = $('#2_' + colRow);
            var elemVal;
            var elemlemType = elem.prop('tagName');
            if (elemlemType == 'TD' || elemlemType == 'TH') {
                elemVal = elem.html();
            } else {
                elemVal = elem.val();
            }
            values[2][row]['values'][colRow] = {};
            values[2][row]['values'][colRow]['value'] = elemVal;
            values[2][row]['values'][colRow]['formula'] = elem.attr('formula');
            values[2][row]['values'][colRow]['colspan'] = elem.attr('colspan');
            values[2][row]['values'][colRow]['rowspan'] = elem.attr('rowspan');
        });
    });
    var valuesJson = $.toJSON(values);
    var host_url = window.location.origin + (SERVER_TYPE_PROD ? "" : TEST_SUFFIX);
    var decl_id = $('#decl_id').val();
    var correcting = parseInt($('[name="form[declaration_report_form]"]').val());
    var correcting_number = 0;
    if (correcting) {
        correcting_number = $('#correct_number_input').val();
        var regexp = /^[0-9]{1,3}$/;
        if (!regexp.test(correcting_number) || !isPositiveInt(parseInt(correcting_number))) {
            var msg = 'Неверный номер корректировки. Номер должен состоять не более,чем из 3 цифр и быть больше нуля.';
            $('#log').html(msg);
            alert(msg);
            return;
        }
    }
    $.ajax({type: "POST", url: host_url + '/declaration_view/actions.php?action=gen_xml&correcting=' + correcting + '&correcting_number=' + correcting_number, data: {decl_id: decl_id, table: valuesJson}, timeout: 5000, success: function (data) {
            try {
                var data_parsed = JSON.parse(data);
            } catch (e) {
                var msg = 'Время Вашей сессии истекло. Намжите на "Личный кабинет",введите ИНН и пароль и попробуйте снова. Если это не поможет,обратитесь к администратору!';
                if (data.toUpperCase().indexOf('ОШИБКА') >= 0) {
                    msg = data;
                }
                $('#log').html(msg);
                alert(msg);
                console.log(e);
                console.log(data);
                return;
            }
            if (data_parsed['status'] == 5) {
                var msg = 'XML файл не прошел валидацию ФСРАР!';
                $('#log').html(msg);
                alert(msg);
                $('#validate_errors').html(data_parsed['error']);
                $('#validate_errors').attr('style', 'font-size:15px;display:block');
            } else if (data_parsed['status'] == 6) {
                $('#log').html(data_parsed['error']);
                alert(data_parsed['error']);
            } else if (data_parsed['status'] != 0) {
                $('#validate_errors').attr('style', 'display:none');
                $('#log').html(data_parsed['error']);
                alert(data_parsed['error']);
            } else {
                window.location.href = host_url + '/declaration_view/?&ready_id=' + decl_id;
                $('#log').html('Декларация успешно создана. Перейдите в раздел "Мои декларации" для скачивания файла.');
            }
        }, error: function (data) {
            alert('Error!');
            console.log(data)
        }, async: false, })
}
;
function chT(elem, eCx) {
    var qq = true;
    elem.removeClass("ui-state-error");
    var value;
    if (elem.hasClass('input_container')) {
        var y_232 = elem.children(':input');
        value = y_232.val();
        y_232.removeClass("ui-state-error");
        var v_801 = elem;
        elem = y_232;
    } else {
        value = elem.html();
    }
    var elId = elem.attr('id');
    if (isNumber(value)) {
        qq = false;
        if (v_801) {
            v_801.addClass("ui-state-error");
        }
        elem.addClass("ui-state-error");
        var y_249 = {};
        y_249.part = elem.parents('.mainDiv').attr('id') == 'one' ? 1 : 2;
        y_249.elem = elem.attr('id').substr(2);
        y_249.descr = 'Ячейка должна содержать текст или быть пустой';
        eCx[elId] = y_249;
    } else {
        delete eCx[elId];
    }
    return qq;
}
;
function chTe(elem, eCx) {
    var qq = true;
    elem.removeClass("ui-state-error");
    var value;
    if (elem.hasClass('input_container')) {
        var y_232 = elem.children(':input');
        value = y_232.val();
        y_232.removeClass("ui-state-error");
        var v_801 = elem;
        elem = y_232;
    } else {
        value = elem.html();
    }
    var elId = elem.attr('id');
    if (!value || isNumber(value)) {
        qq = false;
        if (v_801) {
            v_801.addClass("ui-state-error");
        }
        elem.addClass("ui-state-error");
        var y_249 = {};
        y_249.part = elem.parents('.mainDiv').attr('id') == 'one' ? 1 : 2;
        y_249.elem = elId.substr(2);
        y_249.descr = 'Ячейка должна содержать текст';
        eCx[elId] = y_249;
    } else {
        delete eCx[elId];
    }
    return qq;
}
;
function chTGe(elem, eCx) {
    var qq = true;
    elem.removeClass("ui-state-error");
    var value;
    if (elem.hasClass('input_container')) {
        var y_232 = elem.children(':input');
        value = y_232.val();
        y_232.removeClass("ui-state-error");
        var v_801 = elem;
        elem = y_232;
    } else {
        value = elem.html();
    }
    var elId = elem.attr('id');
    if (!value) {
        qq = false;
        if (v_801) {
            v_801.addClass("ui-state-error");
        }
        elem.addClass("ui-state-error");
        var y_249 = {};
        y_249.part = elem.parents('.mainDiv').attr('id') == 'one' ? 1 : 2;
        y_249.elem = elId.substr(2);
        y_249.descr = 'Ячейка не может быть пустой';
        eCx[elId] = y_249;
    } else {
        delete eCx[elId];
    }
    return qq;
}
;
function chNin(elem, eCx) {
    var qq = true;
    elem.removeClass("ui-state-error");
    var value;
    if (elem.hasClass('input_container')) {
        var y_232 = elem.children(':input');
        value = y_232.val();
        y_232.removeClass("ui-state-error");
        var v_801 = elem;
        elem = y_232;
    } else {
        value = elem.html();
    }
    var elId = elem.attr('id');
    if (!isNumber(value) || !isPositiveInt(parseFloat(value))) {
        qq = false;
        if (v_801) {
            v_801.addClass("ui-state-error");
        }
        elem.addClass("ui-state-error");
        var y_249 = {};
        y_249.part = elem.parents('.mainDiv').attr('id') == 'one' ? 1 : 2;
        y_249.elem = elId.substr(2);
        y_249.descr = 'Ячейка должна содержать целое число больше 0';
        eCx[elId] = y_249;
    } else {
        delete eCx[elId];
    }
    return qq;
}
;
function chDnn(elem, eCx) {
    var qq = true;
    elem.removeClass("ui-state-error");
    var value;
    if (elem.hasClass('input_container')) {
        var y_232 = elem.children(':input');
        value = y_232.val();
        y_232.removeClass("ui-state-error");
        var v_801 = elem;
        elem = y_232;
    } else {
        value = elem.html();
    }
    var elId = elem.attr('id');
    if (!isNumber(value) || parseFloat(value) < 0 || (parseFloat(value) > 0 && parseFloat(value) < lvm)) {
        qq = false;
        if (v_801) {
            v_801.addClass("ui-state-error");
        }
        elem.addClass("ui-state-error");
        var y_249 = {};
        y_249.part = elem.parents('.mainDiv').attr('id') == 'one' ? 1 : 2;
        y_249.elem = elId.substr(2);
        y_249.descr = 'Значение должно быть либо больше ' + lvm + ',либо нулевым';
        eCx[elId] = y_249;
    } else {
        delete eCx[elId];
    }
    return qq;
}
;
function chIwq(elem, eCx) {
    var qq = true;
    elem.removeClass("ui-state-error");
    var value;
    if (elem.hasClass('input_container')) {
        var y_232 = elem.children(':input');
        value = y_232.val();
        y_232.removeClass("ui-state-error");
        var v_801 = elem;
        elem = y_232;
    } else {
        value = elem.html();
    }
    var elId = elem.attr('id');
    if (!isDateValid(value)) {
        qq = false;
        if (v_801) {
            v_801.addClass("ui-state-error");
        }
        elem.addClass("ui-state-error");
        var y_249 = {};
        y_249.part = elem.parents('.mainDiv').attr('id') == 'one' ? 1 : 2;
        y_249.elem = elId.substr(2);
        y_249.descr = ERROR_MSG_WRONG_DATE_FORMAT;
        eCx[elId] = y_249;
    } else {
        delete eCx[elId];
    }
    return qq;
}
;
function chOqw(elem, eCx) {
    var qq = true;
    elem.removeClass("ui-state-error");
    var value;
    if (elem.hasClass('input_container')) {
        var y_232 = elem.children(':input');
        value = y_232.val();
        y_232.removeClass("ui-state-error");
        var v_801 = elem;
        elem = y_232;
    } else {
        value = elem.html();
    }
    var elId = elem.attr('id');
    if ($.inArray(value, AVAILABLE_PRODUCT_TYPE_CODES) == -1) {
        qq = false;
        if (v_801) {
            v_801.addClass("ui-state-error");
        }
        elem.addClass("ui-state-error");
        var y_249 = {};
        y_249.part = elem.parents('.mainDiv').attr('id') == 'one' ? 1 : 2;
        y_249.elem = elId.substr(2);
        y_249.descr = 'Код должен быть одним из следующих: ' + implode(',', AVAILABLE_PRODUCT_TYPE_CODES);
        eCx[elId] = y_249;
    } else {
        delete eCx[elId];
    }
    return qq;
}
;
function _c(fc) {
    if (!fc) {
        fc = false;
    }
    var y_226 = [];
    y_226[1] = [];
    y_226[2] = [];
    var y_227 = [];
    if (!fc) {
        $.each(cVf, function () {
            var y_228 = $(this).attr('dt');
            switch (y_228) {
                case COL_DATATYPE_TEXT:
                    chT($(this), eCx);
                    break;
                case COL_DATATYPE_TEXT_NOT_EMPTY:
                    chTe($(this), eCx);
                    break;
                case COL_DATATYPE_NUM_INTEGER_NATURAL:
                    chNin($(this), eCx);
                    break;
                case COL_DATATYPE_NUM_DECIMAL_NOT_NEGATIVE:
                    chDnn($(this), eCx);
                    break;
                case COL_DATATYPE_DATE:
                    chIwq($(this), eCx);
                    if (zz == 11) {
                        var y_230 = $(this).parent();
                        if ($.inArray(y_230, y_227 == -1)) {
                            y_227.push(y_230);
                        }
                    }
                    break;
                case COL_DATATYPE_PRODUCT_TYPE_CODE:
                    chOqw($(this), eCx);
                    break;
                case COL_DATATYPE_INN:
                case COL_DATATYPE_KPP:
                    var part = $(this).parents('.mainDiv').attr('id') == 'one' ? 1 : 2;
                    var y_230 = $(this).parent();
                    if ($.inArray(y_230, y_226[part] == -1)) {
                        y_226[part].push(y_230);
                    }
                    break;
                case COL_DATATYPE_TEXT_GENERAL_NOT_EMPTY:
                    chTGe($(this), eCx);
                    break;
                }
        })
    } else {
        $('td[dt="' + COL_DATATYPE_TEXT + '"]').each(function () {
            chT($(this), eCx);
        });
        $('td[dt="' + COL_DATATYPE_TEXT_NOT_EMPTY + '"]').each(function () {
            chTe($(this), eCx);
        });
        $('td[dt="' + COL_DATATYPE_NUM_INTEGER_NATURAL + '"]').each(function () {
            chNin($(this), eCx);
        });
        $('td[dt="' + COL_DATATYPE_NUM_DECIMAL_NOT_NEGATIVE + '"]').each(function () {
            chDnn($(this), eCx);
        });
        $('td[dt="' + COL_DATATYPE_DATE + '"]').each(function () {
            chIwq($(this), eCx);
        });
        $('td[dt="' + COL_DATATYPE_PRODUCT_TYPE_CODE + '"]').each(function () {
            chOqw($(this), eCx);
        })
    }
    var y_248 = y_226[1];
    if (fc) {
        y_248 = $('#one tr [class *="pq-grid-row"]');
    }
    $.each(y_248, function () {
        var row = $(this);
        var rowNum = row.attr('rownum');
        var y_246 = row.children('#1_E' + rowNum);
        var y_247 = row.children('#1_F' + rowNum);
        if (!fc && $.inArray(y_246, cVf) == -1 && $.inArray(y_247, cVf) == -1) {
            return;
        }
        var inn = y_246.html();
        var kpp = y_247.html();
        y_246.removeClass("ui-state-error");
        y_247.removeClass("ui-state-error");
        var res = checkCompany(inn, kpp);
        var elId = y_246.attr('id');
        if (!res.company_inn_valid) {
            y_246.addClass("ui-state-error");
            var y_249 = {};
            y_249.part = 1;
            y_249.elem = elId.substr(2);
            y_249.descr = ERROR_MSG_WRONG_INN;
            eCx[elId] = y_249;
        } else {
            delete eCx[elId];
        }
        elId = y_247.attr('id');
        if (!res.company_kpp_valid) {
            y_247.addClass("ui-state-error");
            var y_249 = {};
            y_249.part = 1;
            y_249.elem = elId.substr(2);
            y_249.descr = ERROR_MSG_WRONG_KPP;
            eCx[elId] = y_249;
        } else {
            delete eCx[elId];
        }
    });
    var y_250 = y_226[2];
    if (fc) {
        y_250 = $('#two tr [class *="pq-grid-row"]');
    }
    $.each(y_250, function () {
        var row = $(this);
        var rowNum = row.attr('rownum');
        var y_246 = row.children('#2_E' + rowNum);
        var y_247 = row.children('#2_F' + rowNum);
        if (fc || $.inArray(y_246, cVf) != -1 || $.inArray(y_247, cVf) != -1) {
            var inn = y_246.html();
            var kpp = y_247.html();
            y_246.removeClass("ui-state-error");
            y_247.removeClass("ui-state-error");
            var res = checkCompany(inn, kpp);
            var elId = y_246.attr('id');
            if (!res.company_inn_valid) {
                y_246.addClass("ui-state-error");
                var y_249 = {};
                y_249.part = 2;
                y_249.elem = elId.substr(2);
                y_249.descr = ERROR_MSG_WRONG_INN;
                eCx[elId] = y_249;
            } else {
                delete eCx[elId];
            }
            elId = y_247.attr('id');
            if (!res.company_kpp_valid) {
                y_247.addClass("ui-state-error");
                var y_249 = {};
                y_249.part = 2;
                y_249.elem = elId.substr(2);
                y_249.descr = ERROR_MSG_WRONG_KPP;
                eCx[elId] = y_249;
            } else {
                delete eCx[elId];
            }
        }
        var y_242 = row.children('#2_H' + rowNum);
        var y_243 = row.children('#2_I' + rowNum);
        if (fc || $.inArray(y_242, cVf) != -1 || $.inArray(y_243, cVf) != -1) {
            var y_244 = y_242.html();
            var y_245 = y_243.html();
            y_242.removeClass("ui-state-error");
            y_243.removeClass("ui-state-error");
            res = checkCompany(y_244, y_245);
            var elId = y_242.attr('id');
            if (!res.company_inn_valid) {
                y_242.addClass("ui-state-error");
                var y_249 = {};
                y_249.part = 2;
                y_249.elem = elId.substr(2);
                y_249.descr = ERROR_MSG_WRONG_INN;
                eCx[elId] = y_249;
            } else {
                delete eCx[elId];
            }
            elId = y_243.attr('id');
            if (!res.company_kpp_valid) {
                y_243.addClass("ui-state-error");
                var y_249 = {};
                y_249.part = 2;
                y_249.elem = elId.substr(2);
                y_249.descr = ERROR_MSG_WRONG_KPP;
                eCx[elId] = y_249;
            } else {
                delete eCx[elId];
            }
        }
    });
    if (zz == 11) {
        y_227 = fc ? y_250 : y_227;
        $.each(y_227, function () {
            var row = $(this);
            var rowNum = row.attr('rownum');
            var y_235 = row.children('#2_K' + rowNum);
            var y_236 = y_235.html();
            var y_237 = row.children('#2_L' + rowNum);
            var y_238 = y_237.html();
            var y_239 = row.children().children('#2_' + PART2_COL_PURCHASE_DATE + rowNum);
            var y_240 = y_239.val();
            var y_241 = y_239.parent();
            if (isDateValid(y_236) && isDateValid(y_238) && isDateValid(y_240)) {
                var lic_issue_date_parsed = $.datepicker.parseDate('dd.mm.yy', y_236);
                var lis_exp_date_parsed = $.datepicker.parseDate('dd.mm.yy', y_238);
                var purchase_date_parsed = $.datepicker.parseDate('dd.mm.yy', y_240);
                var elId = y_239.attr('id');
                if (lis_exp_date_parsed < purchase_date_parsed || lic_issue_date_parsed > purchase_date_parsed) {
                    y_241.addClass("ui-state-error");
                    y_239.addClass("ui-state-error");
                    var y_249 = {};
                    y_249.part = 2;
                    y_249.elem = elId.substr(2);
                    y_249.descr = 'Дата поставки не входит в период действия лицензии!';
                    eCx[elId] = y_249;
                } else {
                    delete eCx[elId];
                }
            }
        })
    }
    $('#errorList1').empty();
    $('#errorList2').empty();
    if (!$.isEmptyObject(eCx)) {
        qq = false;
        for (var key in eCx) {
            ml(eCx[key]);
        }
        $('#log').html("Ошибка - нашлись отрицательные (или другие неверные) значения - они выделены красным!");
    } else {
        qq = true;
        $('#log').html('Проверка прошла успешно!');
    }
    cVf = [];
    return qq;
}
;
function ml(eC) {
    var y_225 = $('#errorList' + eC.part);
    var id = eC.part + "_" + eC.elem;
    var div = eC.part == 1 ? 'one' : 'two';
    var y_223 = $("#" + id);
    var id_link = 'link_' + id;
    var html = "<div id=" + id_link + ' class="errorLinks"><b><font color="red">' + eC.elem + "</font></b>: " + eC.descr + "</div>";
    $(html).appendTo(y_225);
    var y_222 = $("#" + id_link);
    y_222.click(function () {
        $('#btn' + div).trigger('click');
        var row = y_223.parents('.pq-grid-row');
        if (!row.is(":visible")) {
            var xo_2 = row.attr('branch');
            var _yo_3 = row.attr('_yo_3');
            var _yo_1 = row.attr('_yo_1');
            var _yo_2 = row.attr('_yo_2');
            var y_224 = $('#' + div + ' tr[class *="rowItogo"][branch="' + xo_2 + '"][_yo_3="' + _yo_3 + '"]' + (div == 'two' ? '[_yo_1="' + _yo_1 + '"][_yo_2="' + _yo_2 + '"]' : ''));
            y_224.children('th[class *="cellExcelHeadRow"]').trigger('click');
        }
        y_223.focus()
    })
}
$(document).ready(function () {
    $('.js_needed_outline').hide();
    $(document).keyup(function (e) {
        if (e.which == "32") {
            sIp = false;
        }
    });
    $(document).keydown(function (e) {
        if (e.which == "32") {
            sIp = true;
        }
        if (sIp) {
            if (x_x91.dialog("isOpen") === false && e.keyCode == "65") {
                yqm();
            } else if (x_x91.dialog("isOpen") === false && e.keyCode == "68") {
                sIp = false;
                $('#btntwo').trigger('click');
                var y_221 = $('#two .pq-row-select');
                if (!y_221.length) {
                    alert('Выберете строку!');
                    return;
                }
                if (!y_221.is(":visible")) {
                    var xo_2 = y_221.attr('branch');
                    var _yo_3 = y_221.attr('_yo_3');
                    var _yo_1 = y_221.attr('_yo_1');
                    var _yo_2 = y_221.attr('_yo_2');
                    var y_224 = $('#two tr[class *="rowItogo"][branch="' + xo_2 + '"][_yo_3="' + _yo_3 + '"][_yo_1="' + _yo_1 + '"][_yo_2="' + _yo_2 + '"]');
                    y_224.children('th[class *="cellExcelHeadRow"]').trigger('click');
                }
                if (!confirm("Вы действительно хотите удалить строку?")) {
                    return;
                }
                ddd(y_221);
            } else if (e.keyCode == "49") {
                $('#btnone').trigger('click');
            } else if (e.keyCode == "50") {
                $('#btntwo').trigger('click');
            }
        }
    });
    function aEtR1(p_) {
        var _oo = p_.attr('branch');
        var _yo_3 = p_.attr('_yo_3');
        p_.children('th[class *="cellExcelHeadRow"]').click(function () {
            var x_ = $(this).html() == '-';
            var s_ = $('#one tr[branch="' + _oo + '"][_yo_3="' + _yo_3 + '"][class *="pq-grid-row"]');
            if (x_) {
                s_.hide();
                $(this).html('+');
                p_.removeClass('rowItogoExpanded')
            } else {
                s_.show();
                $(this).html('-');
                p_.addClass('rowItogoExpanded')
            }
        })
    }
    ;
    function aEtR2(p_) {
        var _oo = p_.attr('branch');
        var _yo_3 = p_.attr('_yo_3');
        var _yo_1 = p_.attr('_yo_1');
        var _yo_2 = p_.attr('_yo_2');
        p_.children('th[class *="cellExcelHeadRow"]').click(function () {
            var x_ = $(this).html() == '-';
            var s_ = $('#two tr[branch="' + _oo + '"][_yo_3="' + _yo_3 + '"][class *="pq-grid-row"][_yo_1="' + _yo_1 + '"][_yo_2="' + _yo_2 + '"]');
            if (x_) {
                s_.hide();
                $(this).html('+');
                p_.removeClass('rowItogoExpanded');
            } else {
                s_.show();
                $(this).html('-');
                p_.addClass('rowItogoExpanded')
            }
        })
    }
    ;
    function rC(p) {
        var f;
        if (!p || (p != 'one' && p != 'two')) {
            f = '';
        } else {
            f = '#' + p + ' '
        }
        $(f + '.formula').sort(function (a, b) {
            var div1 = $(a).parents('.mainDiv').attr('id');
            var div2 = $(b).parents('.mainDiv').attr('id');
            var dN1 = div1 == 'one' ? 1 : 2;
            var dN2 = div2 == 'one' ? 1 : 2;
            if (dN1 == dN2) {
                var idA = $(a).attr('id');
                var rowA = parseInt(idA.substr(3));
                var idB = $(b).attr('id');
                var rowB = parseInt(idB.substr(3));
                if (rowB == rowA) {
                    var letA = idA.substr(2, 1);
                    var letB = idB.substr(2, 1);
                    return (ALPHABETE.indexOf(letA) - ALPHABETE.indexOf(letB));
                } else {
                    return (rowA - rowB);
                }
            } else {
                return dN2 - dN1;
            }
        }).each(function (ind, elem) {
            var p = $(elem).parents('.mainDiv').attr('id') == 'one' ? 1 : 2;
            var newVal = 0;
            var formula = $(elem).attr('formula');
            if (formula[1] == 'S') {
                var matches = formula.match(/\((.+)\:(.+)\)/);
                if (!matches) {
                    console.log('Ошибка в формуле');
                    console.log(formula);
                    return;
                }
                var low = matches[1];
                var lowCol = low.substr(0, 1);
                var lowRow = parseInt(low.substr(1));
                var high = matches[2];
                var highCol = high.substr(0, 1);
                var highRow = parseInt(high.substr(1));
                var ch = lowCol;
                while (ch <= highCol) {
                    var r = lowRow;
                    while (r <= highRow) {
                        var el = $('#' + p + '_' + ch + r);
                        var elType = el.prop('tagName');
                        if (elType == 'TD') {
                            newVal += parseFloat(el.html())
                        } else {
                            newVal += parseFloat(el.val())
                        }
                        ++r;
                    }
                    ch = ALPHABETE[ALPHABETE.indexOf(ch) + 1]
                }
            } else if (formula[1] == '\'') {
                var matches = formula.match(/=\'.+\'!(.+)/);
                if (!matches) {
                    console.log('Ошибка в формуле');
                    console.log(formula);
                    return;
                }
                var colRow = matches[1];
                newVal = (parseFloat($('#2_' + colRow).html()))
            } else {
                var matches = formula.match(/([\+|\-]?[A-Z]\d+)/g);
                if (!matches) {
                    newVal = 0;
                } else {
                    matches.forEach(function (val) {
                        if (val[0] != '+' && val[0] != '-') {
                            val = '+' + val;
                        }
                        var letter = val.substr(1, 1);
                        var row = parseInt(val.substr(2));
                        var el = $('#' + p + '_' + letter + row);
                        var elType = el.prop('tagName');
                        if (elType == 'TD') {
                            newVal += (parseFloat(el.html())) * (val[0] == '-' ? -1 : 1)
                        } else {
                            newVal += (parseFloat(el.val())) * (val[0] == '-' ? -1 : 1)
                        }
                    })
                }
            }
            if (isNumber(newVal) && newVal != 0) {
                newVal = newVal.toFixed(4);
                if (newVal == 0) {
                    newVal = 0
                }
            }
            
            $(elem).removeClass("ui-state-error");
            
            var elem_part = $(elem).attr('id').substr(0, 1);
            var elem_col = $(elem).attr('id').substr(2, 1);
            var needToCheckNumber;
            if (elem_part == '1'){
                needToCheckNumber = elem_col != PART1_COL_TAIL_BEGIN && elem_col != PART1_COL_PRIXOD_2 && elem_col != PART1_COL_RASXOD_1 && elem_col != PART1_COL_RASXOD_VSEGO && elem_col != PART1_COL_PRIXOD_4 && elem_col != PART1_COL_PRIXOD_VSEGO;
            }else{
                needToCheckNumber = elem_col != PART2_COL_PURCHASE_AMOUNT;
            }  
            
            if (!isNumber(newVal) || (needToCheckNumber && ((newVal < 0) || (newVal > 0 && newVal < lvm)))){
                $(elem).addClass( "ui-state-error" );
            }
            
            var prevVal = $(elem).html();
            if (prevVal != newVal) {
                $(elem).html(newVal);
                cVf.push($(elem))
            }
        });
        $('[id^="perc"]').add('#vsegoTailPerc').each(function (ind, elem) {
            var row = $(elem).parent().parent().attr('rownum');
            if (!row) {
                row = $(elem).parent().attr('rownum')
            }
            var a, b, c;
            var elG = $('#1_G' + row);
            var elGType = elG.prop('tagName');
            if (elGType == 'TD') {
                a = parseFloat(elG.html())
            } else {
                a = parseFloat(elG.val())
            }
            if (zz == 11) {
                b = parseFloat($('#1_O' + row).html());
                c = parseFloat($('#1_U' + row).html())
            } else {
                b = parseFloat($('#1_N' + row).html());
                c = parseFloat($('#1_S' + row).html())
            }
            var eType = $(this).prop('tagName');
            if (a + b == 0) {
                if (eType == 'TD') {
                    var prevVal = $(elem).html();
                    if (prevVal != 0) {
                        $(elem).html(0);
                        cVf.push($(elem))
                    }
                } else {
                    var prevVal = $(elem).val();
                    if (prevVal != 0) {
                        $(elem).val(0);
                        cVf.push($(elem).parent())
                    }
                }
                return;
            }
            var newVal = c * 100 / (a + b);
            $(elem).attr('readonly', false);
            newVal = newVal.toFixed(4);//ostatok v procent
            if (eType == 'TD') {
                var prevVal = $(elem).html();
                if (prevVal != newVal) {
                    $(elem).html(newVal);
                    cVf.push($(elem))
                }
            } else {
                var prevVal = $(elem).val();
                if (prevVal != newVal) {
                    $(elem).val(newVal);
                    cVf.push($(elem).parent());
                    var input_size = (newVal.toString()).length;
                    input_size = input_size > MAX_INP_SIZE ? MAX_INP_SIZE : input_size;
                    $(elem).attr('size', input_size)
                }
            }
        });
    };
    
    
    $('#one tr[class *="rowItogo"]').each(function () {
        aEtR1($(this))
    });
    $('#two tr[class *="rowItogo"]').each(function () {
        aEtR2($(this))
    });
    $('#one tr .pq-grid-row').click(function () {
        var rownum = $(this).attr('rownum');
        $('#one .pq-grid-row').removeClass('pq-row-select ui-state-highlight pq-grid-row-hover ui-state-hover');
        $('#1_pos_' + rownum).addClass('pq-row-select ui-state-highlight ui-state-hover')
    });
    $('#two tr .pq-grid-row').click(function () {
        var rownum = $(this).attr('rownum');
        $('#two .pq-grid-row').removeClass('pq-row-select ui-state-highlight pq-grid-row-hover ui-state-hover');
        $('#2_pos_' + rownum).addClass('pq-row-select ui-state-highlight ui-state-hover');
    });
    $('.switcher').click(function (event) {
        var btn = event.target;
        var activate = $(btn).attr('activate');
        var deactivate = activate == 'one' ? 'two' : 'one';
        $('#btn' + activate).attr('style', 'font-size:20px;background-color:lightgray;');
        $('#btn' + deactivate).attr('style', 'font-size:20px;background-color:gray;');
        $('#' + activate).attr('style', 'display:block');
        $('#' + deactivate).attr('style', 'display:none')
    });
    $(".pq-grid-row").mouseover(function () {
        $(this).not('.ui-state-highlight').addClass('pq-grid-row-hover ui-state-hover')
    });
    $(".pq-grid-row").mouseleave(function () {
        $(this).not('.ui-state-highlight').removeClass('pq-grid-row-hover ui-state-hover')
    });
    /*var s_6i=$('input[id^="2_'+PART2_COL_PURCHASE_DATE+'"]');$.each(s_6i,function(){var saveVal=$(this).val();var datePickerField=$(this);datePickerField.datepicker({changeMonth: true,changeYear: true,onSelect:function(){cVf.push(datePickerField.parent());_c();}});datePickerField.datepicker('option','dateFormat','dd.mm.yy');datePickerField.datepicker('setDate',saveVal);});*/var str_code_hash = {};
    $.each(code_str_hash, function (ind, val) {
        str_code_hash[val] = ind
    });
    var productType = $('[name="BPopupVal3"]');
    var selectedProductType = productType.val();
    productType.change(function () {
        $('#CPopupVal3').val(str_code_hash[$(this).val()])
    });
    $('#CPopupVal3').val(str_code_hash[selectedProductType]);
    $('#CPopupVal3').attr('readonly', 'readonly');
    var dateCellInput = $('#' + PART2_COL_PURCHASE_DATE + 'PopupVal3');
    dateCellInput.datepicker({changeMonth: true, changeYear: true});
    dateCellInput.datepicker('option', 'dateFormat', 'dd.mm.yy');
    if (zz == 11) {
        var d1 = $('#' + PART2_COL_SUPPLIER_LICENCE_ISSUE_DATE + 'PopupVal3');
        d1.datepicker({changeMonth: true, changeYear: true, });
        d1.datepicker('option', 'dateFormat', 'dd.mm.yy');
        var d2 = $('#' + PART2_COL_SUPPLIER_LICENCE_EXPIRE_DATE + 'PopupVal3');
        d2.datepicker({changeMonth: true, changeYear: true, });
        d2.datepicker('option', 'dateFormat', 'dd.mm.yy');
    }
    var _a2 = $([]);
    $("#popupTable3 tr td input").each(function (ind, val) {
        $(this).change(function () {
            _a2.removeClass("ui-state-error");
            meI();
        });
        if ($(val).attr('type') == 'text') {
            _a2 = _a2.add($(val));
        }
    });
    var form3, tips3 = $("#validateTips3");
    function _u3(t) {
        tips3.text(t).addClass("ui-state-highlight");
        setTimeout(function () {
            tips3.removeClass("ui-state-highlight", 1500);
        }, 500);
    }
    ;
    function apE1(row) {
        var rowNum = row.attr('rownum');
        var p = $('#perc' + rowNum);
        p.focus(function () {
            beingEditedVal = $(this).val();
        });
        p.focusout(function () {
            var userInput = $(this).val();
            if (beingEditedVal == userInput) {
                return;
            }
            if (!checkPercent({}, userInput)) {
                $('#log').html('Вы ввели неверное значение процента! Было оставлено старое значение.');
                $(this).val(beingEditedVal);
                return;
            }
            ;
            userInput = $.trim(userInput);
            $(this).val(userInput);
            beingEditedVal = userInput;
            cVf.push($(this).parent());
            var cRow = $(this).parent().parent().attr('rownum');
            ozm(cRow, userInput);
            rC('one');
            _c();
        })
    }
    ;
    function meI() {
        _u3(MSG_TIPS_DEFAULT);
        _a2.removeClass("ui-state-error");
        var mnf = $('#DPopupVal3'), mni = $('#EPopupVal3'), mnk = $('#FPopupVal3'), snf = $('#GPopupVal3'), sni = $('#HPopupVal3'), skf = $('#IPopupVal3'), a = $('#' + PART2_COL_PURCHASE_DATE + 'PopupVal3'), b = $('#' + PART2_COL_PURCHASE_TTN + 'PopupVal3'), c = $('#' + PART2_COL_PURCHASE_AMOUNT + 'PopupVal3'), d = mnf.val(), e = mni.val(), _f = mnk.val(), _g = snf.val(), _h = sni.val(), _i9 = skf.val(), _j8 = a.val(), _k7 = b.val(), _l6 = c.val();
        if (!d) {
            mnf.addClass("ui-state-error");
            _u3("Не задано наименование производителя!");
            return false;
        }
        var res = checkCompany(e, _f);
        if (!res.company_inn_valid) {
            mni.addClass("ui-state-error");
            _u3(ERROR_MSG_WRONG_INN);
            return false;
        }
        if (!res.company_kpp_valid) {
            mnk.addClass("ui-state-error");
            _u3(ERROR_MSG_WRONG_KPP);
            return false;
        }
        if (!_g) {
            snf.addClass("ui-state-error");
            _u3("Не задано наименование поставщика!");
            return false;
        }
        res = checkCompany(_h, _i9);
        if (!res.company_inn_valid) {
            sni.addClass("ui-state-error");
            _u3(ERROR_MSG_WRONG_INN);
            return false;
        }
        if (!res.company_kpp_valid) {
            skf.addClass("ui-state-error");
            _u3(ERROR_MSG_WRONG_KPP);
            return false;
        }
        if (zz == 11) {
            var _z1 = $('#JPopupVal3');
            var _z2 = $('#KPopupVal3');
            var _z3 = $('#LPopupVal3');
            var _z4 = $('#MPopupVal3');
            var _z5 = _z1.val();
            var _z6 = _z2.val();
            var _z7 = _z3.val();
            var _z8 = _z4.val();
            if (!_z5.length) {
                _z1.addClass("ui-state-error");
                _u3('Не задано поле "Номер лицензии"');
                return false;
            }
            if (!isDateValid(_z6)) {
                _z2.addClass("ui-state-error");
                _u3(ERROR_MSG_WRONG_DATE_FORMAT);
                return false;
            }
            if (!isDateValid(_z7)) {
                _z3.addClass("ui-state-error");
                _u3(ERROR_MSG_WRONG_DATE_FORMAT);
                return false;
            }
            if (!isDateValid(_j8)) {
                a.addClass("ui-state-error");
                _u3(ERROR_MSG_WRONG_DATE_FORMAT);
                return false;
            }
            var _z6_parsed = $.datepicker.parseDate('dd.mm.yy', _z6);
            var _z99 = $.datepicker.parseDate('dd.mm.yy', _z7);
            var _j8_parsed = $.datepicker.parseDate('dd.mm.yy', _j8);
            if (_z99 < _j8_parsed || _z6_parsed > _j8_parsed) {
                a.addClass("ui-state-error");
                _u3('Дата поставки не входит в период действия лицензии!');
                return false;
            }
            if (!_z8.length) {
                _z4.addClass("ui-state-error");
                _u3('Не задано поле "Лицензия - кем выдана"');
                return false;
            }
        }
        if (!isDateValid(_j8)) {
            a.addClass("ui-state-error");
            _u3(ERROR_MSG_WRONG_DATE_FORMAT);
            return false;
        }
        if (!_k7) {
            b.addClass("ui-state-error");
            _u3('Поле "Номер ТТН" должно быть заполнено');
            return false;
        }
        if (!isNumber(_l6)) {
            c.addClass("ui-state-error");
            _u3('Поле "Объем продукции" должно быть числом');
            return false;
        } else if (_l6 < lvm) {
            c.addClass("ui-state-error");
            _u3('Значение должно быть больше 0.05!');
            return false;
        }
        return true;
    }
    ;
    function ulQx(div) {
        var _v = $('#' + div + ' tr[class *="pq-grid-row"]');
        if (!_v.length) {
            return;
        }
        var _t = $(_v[0]).attr('branch');
        var counter = 1;
        _v.each(function () {
            var br = $(this).attr('branch');
            if (br != _t) {
                _t = br;
                counter = 1;
            }
            $(this).find('td').first().html(counter);
            ++counter;
        })
    }
    ;
    function zqs(div, _x, op) {
        var _xx = parseInt(_x.attr('rownum'));
        var _d5 = div == 'one' ? 1 : 2;
        var eCxN = {};
        for (var key in eCx) {
            var _c_ = parseInt(key.substr(3));
            var _c_1 = eCx[key];
            var _e_ = _c_1.part;
            var divPart = div == 'one' ? 1 : 2;
            if (divPart != _e_) {
                eCxN[key] = _c_1;
                continue
            }
            if ((op < 0 && _c_ == _xx)) {
                continue;
            }
            if (_c_ >= _xx) {
                _c_1.elem = _c_1.elem.substr(0, 1) + (_c_ + op);
                eCxN[_e_ + '_' + _c_1.elem] = _c_1
            } else {
                eCxN[key] = _c_1
            }
        }
        eCx = eCxN;
        $('#' + div + ' tr').each(function () {
            var _c_2 = $(this);
            var _c_3 = parseInt(_c_2.attr('rownum'));
            if (_c_3 >= _xx) {
                var _c_4 = _c_3 + op;
                _c_2.attr('rownum', _c_4);
                var id_attr = _c_2.attr('id');
                if (id_attr) {
                    _c_2.attr('id', _d5 + '_pos_' + _c_4)
                }
                if (parseInt(_c_2.children()[0].innerHTML)) {
                    _c_2.children()[0].innerHTML = _c_4
                }
                _c_2.children('td:not([class])').each(function () {
                    var oldId = $(this).attr('id');
                    var newId = oldId.replace(/([1-2]_[A-Z]+)[0-9]+/, "$1" + _c_4);
                    $(this).attr('id', newId)
                });
                _c_2.children('td .input_container').each(function () {
                    ;
                    var oldId = $(this).attr('id');
                    var newId = oldId.replace(/(TD_[1-2]_[A-Z]+)[0-9]+/, "$1" + _c_4);
                    var y_232 = $($(this).children()[0]);
                    $(this).attr('id', newId);
                    var oldInputId = y_232.attr('id');
                    var newInputId = oldInputId.replace(/([1-2]_[A-Z]+)[0-9]+/, "$1" + _c_4);
                    y_232.attr('id', newInputId)
                });
                var _f6 = $(this).children('.formula');
                _f6.sort(function (a, b) {
                    var idA = $(a).attr('id');
                    var idB = $(b).attr('id');
                    var letA = idA.substr(2, 1);
                    var letB = idB.substr(2, 1);
                    return (ALPHABETE.indexOf(letA) - ALPHABETE.indexOf(letB))
                }).each(function () {
                    var _f7 = $(this);
                    if (!_f7.length) {
                        return;
                    }
                    var formulaId = _f7.attr('id');
                    var _f9 = formulaId.match(/([1-2]_)([A-Z]+)[0-9]+/);
                    var _f8 = _f9[2];
                    _f7.attr('id', _d5 + '_' + _f8 + _c_4);
                    if (_f7.hasClass('formulaFrom2ndSheet')) {
                        return;
                    }
                    var _f1 = _f7.attr('formula');
                    var matches = _f1.match(/\((.+)\:(.+)\)/);
                    if (!matches) {
                        var newFormula = _f1.replace(/([\+|\-]?[A-Z])(\d+)/g, function (str, p1, p2, offset, origS) {
                            var _c_3 = parseInt(p2);
                            var _c_4 = _c_3 >= _xx ? _c_3 + (1 * op) : _c_3;
                            return p1 + _c_4
                        });
                        if (!newFormula) {
                            console.log('Ошибка в формуле');
                            console.log(_f1);
                            return;
                        }
                        _f7.attr('formula', newFormula);
                        return;
                    }
                    var low = matches[1];
                    var lowRow = parseInt(low.substr(1));
                    var lowLet = low.substr(0, 1);
                    var high = matches[2];
                    var highRow = parseInt(high.substr(1));
                    var _u2 = high.substr(0, 1);
                    _f7.attr('formula', '=SUM(' + lowLet + (lowRow + (op)) + ':' + _u2 + (highRow + (op)) + ')');
                })
            }
        })
    }
    ;
    function aErd(_lq, _un) {
        $("#" + _lq + "_pos_" + _un).mouseover(function () {
            $(this).not('.ui-state-highlight').addClass('pq-grid-row-hover ui-state-hover')
        });
        $("#" + _lq + "_pos_" + _un).mouseleave(function () {
            $(this).not('.ui-state-highlight').removeClass('pq-grid-row-hover ui-state-hover');
        });
        var div = _lq == 1 ? 'one' : 'two';
        $("#" + _lq + "_pos_" + _un).click(function () {
            var rownum = $(this).attr('rownum');
            $('#' + div + ' .pq-grid-row').removeClass('pq-row-select ui-state-highlight pq-grid-row-hover ui-state-hover');
            $('#' + _lq + '_pos_' + rownum).addClass('pq-row-select ui-state-highlight ui-state-hover');
        });
        $("#" + _lq + "_pos_" + _un + ' input').focus(function () {
            beingEditedVal = $(this).val()
        });
        if (_lq == 2) {
            $("#2_pos_" + _un + ' input').focusout(function () {
                var userInput = $(this).val();
                if (beingEditedVal == userInput) {
                    return;
                }
                userInput = $.trim(userInput);
                $(this).val(userInput);
                beingEditedVal = userInput;
                cVf.push($(this).parent());
                var max_size = 25;
                var input_size = (userInput.toString()).length;
                input_size = input_size > max_size ? max_size : input_size;
                $(this).attr('size', input_size);
                rC();
                _c();
            });
            
            $('[id ^="2_'+PART2_COL_PURCHASE_AMOUNT+'"]').change(function(){
                var $nR = $('#2_pos_'+_un);
                var br = $nR.attr('branch');
                var sup_inn = $('#2_' + PART2_COL_SUPPLIER_INN + _un).html();
                var sup_kpp = $('#2_' + PART2_COL_SUPPLIER_KPP + _un).html();
                var pur_amnt = (parseFloat(old_value_current) ? - parseFloat(old_value_current) : 0) + (parseFloat($(this).val()) ? parseFloat($(this).val()) : 0);
                var name = $('#2_' + PART2_COL_SUPPLIER_NAME + _un).html();
                updateDeliveriesInfo(br, name, sup_inn, sup_kpp, pur_amnt, true);
            })
            .focus(function(){
                old_value_current = parseFloat($(this).val()) ? parseFloat($(this).val()) : 0;
            });
            
            /*var dateCellInput=$( '#'+ _lq+ '_'+ PART2_COL_PURCHASE_DATE+ _un);var initVall=dateCellInput.val();dateCellInput.datepicker({changeMonth: true,changeYear: true,onSelect:function(){cVf.push(dateCellInput.parent());_c();}});dateCellInput.datepicker('option','dateFormat','dd.mm.yy');dateCellInput.datepicker('setDate',initVall);*/
        } else {
            $("#1_pos_" + _un + ' input').not('[id^="perc"]').focusout(function () {
                var userInput = $(this).val();
                if (beingEditedVal == userInput) {
                    return;
                }
                ;
                userInput = $.trim(userInput);
                $(this).val(userInput);
                beingEditedVal = userInput;
                cVf.push($(this).parent());
                var max_size = 10;
                var input_size = (userInput.toString()).length;
                input_size = input_size > max_size ? max_size : input_size;
                $(this).attr('size', input_size);
                rC('one');
                _c();
            })
        }
    }
    ;
    function ssPa(_nn9, __s1, __s2s, _z_1_q, _z_3_q, x__181) {
        if (!x__181) {
            x__181 = 1;
        }
        var x__177 = $('[rowNum="' + _nn9 + '"]');
        zqs('two', x__177, 1);
        var x__180 = '<TR class="pq-grid-row" id="2_pos_' + _nn9 + '" rownum="' + _nn9 + '" style="display:table-row" branch="' + __s1 + '" _yo_3="' + __s2s + '" _yo_1="' + _z_1_q + '" _yo_2="' + _z_3_q + '">';
        x__180 += '<TH class="cellExcelHeadRow">' + _nn9 + '</TH>';
        x__180 += '<TD id="2_A' + _nn9 + '" dt="' + part2_col_data_type_hash['A'] + '">' + x__181 + '</TD>';
        $('#popupTable3').find('[name$="PopupVal3"]').each(function () {
            var col = $(this).attr('name').substr(0, 1);
            var val = $(this).val();
            val = $.trim(val);
            if ((zz == 11 && (col == 'N' || col == 'O' || col == 'P' || col == 'Q')) || (zz == 12 && (col == 'J' || col == 'K' || col == 'L' || col == 'M'))) {
                var val_length = val.toString().length;
                var inp_size = val_length > MIN_INP_SIZE ? val_length : MIN_INP_SIZE;
                var input = '<input size="' + inp_size + '" type="text" id="2_' + col + _nn9 + '" value="' + val + '">';
                x__180 += '<TD class="input_container" id="TD_2_' + col + _nn9 + '" dt="' + part2_col_data_type_hash[col] + '">' + input + '</TD>';
            } else {
                x__180 += '<TD id="2_' + col + _nn9 + '" dt="' + part2_col_data_type_hash[col] + '">' + val + '</TD>';
            }
        });
        $('#two #excelTable tr[rownum="' + (_nn9 - 1) + '"]').after(x__180);
        aErd(2, _nn9);
    }
    ;
    function ssCa(_ip1, __s1, __s2s, _z_1_q, _z_3_q) {
        var x__177 = $('[rowNum="' + _ip1 + '"]');
        zqs('two', x__177, 1);
        var x__178 = '<tr rownum="' + _ip1 + '" class="rowItogo rowItogoExpanded" branch="' + __s1 + '" _yo_3="' + __s2s + '" _yo_1="' + _z_1_q + '" _yo_2="' + _z_3_q + '">';
        var _z_2_q = $('#DPopupVal3').val();
        x__178 += '<th class="cellExcelHeadRow">-</th>';
        x__178 += '<td colspan="' + PART2_COLUMNS_CNT + '" id="2_A' + _ip1 + '">Итого по коду: ' + __s2s + ' и производителю/импортеру: ' + _z_2_q + ' ' + _z_1_q + '/' + _z_3_q + '</td>';
        x__178 += '<td id="2_' + PART2_COL_PURCHASE_AMOUNT + _ip1 + '" class="formula" formula="=SUM(' + PART2_COL_PURCHASE_AMOUNT + (_ip1) + ':' + PART2_COL_PURCHASE_AMOUNT + (_ip1 - 1) + ')" dt="' + part2_col_data_type_hash[PART2_COL_PURCHASE_AMOUNT] + '">0</td>';
        x__178 += '<td id="vsegoStrok' + (_ip1 + 1) + '" class="vsegoStrok">1</td></tr>';
        $('#two #excelTable tr[rownum="' + (_ip1 - 1) + '"]').after(x__178);
        var added = $('#two tr[rownum="' + _ip1 + '"]');
        aEtR2(added);
    }
    function sFpa(_nn9, __s1, _yo_3, _yo_1, _yo_2, x__181) {
        if (!x__181) {
            x__181 = 1;
        }
        zqs('one', $('[rowNum="' + _nn9 + '"]'), 1);
        var x__180 = '<TR class="pq-grid-row" id="1_pos_' + _nn9 + '" rownum="' + _nn9 + '" style="display:table-row" branch="' + __s1 + '" _yo_3="' + _yo_3 + '" _yo_1="' + _yo_1 + '" _yo_2="' + _yo_2 + '">';
        x__180 += '<TH class="cellExcelHeadRow">' + _nn9 + '</TH>';
        var col = 'A';
        x__180 += '<TD id="1_' + col + _nn9 + '" dt="' + part1_col_data_type_hash[col] + '">' + x__181 + '</TD>';
        col = 'B';
        x__180 += '<TD id="1_' + col + _nn9 + '" dt="' + part1_col_data_type_hash[col] + '">' + $('[name="' + col + 'PopupVal3"]').val() + '</TD>';
        col = 'C';
        x__180 += '<TD id="1_' + col + _nn9 + '" dt="' + part1_col_data_type_hash[col] + '">' + $('#' + col + 'PopupVal3').val() + '</TD>';
        col = 'D';
        x__180 += '<TD id="1_' + col + _nn9 + '" dt="' + part1_col_data_type_hash[col] + '">' + $('#' + col + 'PopupVal3').val() + '</TD>';
        col = 'E';
        x__180 += '<TD id="1_' + col + _nn9 + '" dt="' + part1_col_data_type_hash[col] + '">' + $('#' + col + 'PopupVal3').val() + '</TD>';
        col = 'F';
        x__180 += '<TD id="1_' + col + _nn9 + '" dt="' + part1_col_data_type_hash[col] + '">' + $('#' + col + 'PopupVal3').val() + '</TD>';
        col = 'G';
        var idd = '1_' + col + _nn9;
        x__180 += '<TD id="TD_' + idd + '" class="input_container" dt="' + part1_col_data_type_hash[col] + '"><input size="6" type="text" id="' + idd + '" value="0"></TD>';
        col = 'H';
        idd = '1_' + col + _nn9;
        x__180 += '<TD id="TD_' + idd + '" class="input_container" dt="' + part1_col_data_type_hash[col] + '"><input size="6" type="text" id="' + idd + '" value="0"></TD>';
        col = 'I';
        idd = '1_' + col + _nn9;
        x__180 += '<TD id="' + idd + '" class="formula formulaFrom2ndSheet" formula="=\'Раздел 2\'!' + (PART2_COL_PURCHASE_AMOUNT + 999) + '" dt="' + part1_col_data_type_hash[col] + '">0</TD>';
        col = 'J';
        idd = '1_' + col + _nn9;
        x__180 += '<TD id="TD_' + idd + '" class="input_container" dt="' + part1_col_data_type_hash[col] + '"><input size="6" type="text" id="' + idd + '" value="0"></TD>';
        col = PART1_COL_PRIXOD_4;
        idd = '1_' + col + _nn9;
        x__180 += '<TD id="' + idd + '" class="formula" formula="=SUM(' + PART1_COL_PRIXOD_1 + (_nn9) + ':' + PART1_COL_PRIXOD_3 + (_nn9) + ')" dt="' + part1_col_data_type_hash[col] + '">0</td>';
        col = 'L';
        idd = '1_' + col + _nn9;
        x__180 += '<TD id="TD_' + idd + '" class="input_container" dt="' + part1_col_data_type_hash[col] + '"><input size="6" type="text" id="' + idd + '" value="0"></TD>';
        col = 'M';
        idd = '1_' + col + _nn9;
        x__180 += '<TD id="TD_' + idd + '" class="input_container" dt="' + part1_col_data_type_hash[col] + '"><input size="6" type="text" id="' + idd + '" value="0"></TD>';
        if (zz == 11) {
            col = 'N';
            idd = '1_' + col + _nn9;
            x__180 += '<TD id="TD_' + idd + '" class="input_container" dt="' + part1_col_data_type_hash[col] + '"><input size="6" type="text" id="' + idd + '" value="0"></TD>';
            col = PART1_COL_PRIXOD_VSEGO;
            idd = '1_' + col + _nn9;
            x__180 += '<TD id="' + idd + '" class="formula" formula="=SUM(' + PART1_COL_PRIXOD_4 + (_nn9) + ':' + PART1_COL_PRIXOD_7 + (_nn9) + ')" dt="' + part1_col_data_type_hash[col] + '">0</td>';
            col = 'P';
            idd = '1_' + col + _nn9;
            x__180 += '<TD id="TD_' + idd + '" class="input_container" dt="' + part1_col_data_type_hash[col] + '"><input size="6" type="text" id="' + idd + '" value="0"></TD>';
            col = 'Q';
            idd = '1_' + col + _nn9;
            x__180 += '<TD id="TD_' + idd + '" class="input_container" dt="' + part1_col_data_type_hash[col] + '"><input size="6" type="text" id="' + idd + '" value="0"></TD>';
            col = 'R';
            idd = '1_' + col + _nn9;
            x__180 += '<TD id="TD_' + idd + '" class="input_container" dt="' + part1_col_data_type_hash[col] + '"><input size="6" type="text" id="' + idd + '" value="0"></TD>';
            col = 'S';
            idd = '1_' + col + _nn9;
            x__180 += '<TD id="TD_' + idd + '" class="input_container" dt="' + part1_col_data_type_hash[col] + '"><input size="6" type="text" id="' + idd + '" value="0"></TD>';
            col = PART1_COL_RASXOD_VSEGO;
            idd = '1_' + col + _nn9;
            x__180 += '<TD id="' + idd + '" class="formula" formula="=SUM(P' + (_nn9) + ':S' + (_nn9) + ')" dt="' + part1_col_data_type_hash[col] + '">0</td>';
            col = PART1_COL_TAIL_END;
            idd = '1_' + col + _nn9;
            x__180 += '<TD id="' + idd + '" class="formula" formula="=(G' + (_nn9) + '+O' + (_nn9) + '-T' + (_nn9) + ')" dt="' + part1_col_data_type_hash[col] + '">0</td>';
            col = PART1_COL_TAIL_OLD_MARK;
            idd = '1_' + col + _nn9;
            x__180 += '<TD id="TD_' + idd + '" class="input_container" dt="' + part1_col_data_type_hash[col] + '"><input size="6" type="text" id="' + idd + '" value="0"></TD>';
        } else {
            col = PART1_COL_PRIXOD_VSEGO;
            idd = '1_' + col + _nn9;
            x__180 += '<TD id="' + idd + '" class="formula" formula="=SUM(' + PART1_COL_PRIXOD_4 + (_nn9) + ':' + PART1_COL_PRIXOD_6 + (_nn9) + ')" dt="' + part1_col_data_type_hash[col] + '">0</td>';
            col = 'O';
            idd = '1_' + col + _nn9;
            x__180 += '<TD id="TD_' + idd + '" class="input_container" dt="' + part1_col_data_type_hash[col] + '"><input size="6" type="text" id="' + idd + '" value="0"></TD>';
            col = 'P';
            idd = '1_' + col + _nn9;
            x__180 += '<TD id="TD_' + idd + '" class="input_container" dt="' + part1_col_data_type_hash[col] + '"><input size="6" type="text" id="' + idd + '" value="0"></TD>';
            col = 'Q';
            idd = '1_' + col + _nn9;
            x__180 += '<TD id="TD_' + idd + '" class="input_container" dt="' + part1_col_data_type_hash[col] + '"><input size="6" type="text" id="' + idd + '" value="0"></TD>';
            col = PART1_COL_RASXOD_VSEGO;
            idd = '1_' + col + _nn9;
            x__180 += '<TD id="' + idd + '" class="formula" formula="=SUM(O' + (_nn9) + ':Q' + (_nn9) + ')" dt="' + part1_col_data_type_hash[col] + '">0</td>';
            col = PART1_COL_TAIL_END;
            idd = '1_' + col + _nn9;
            x__180 += '<TD id="' + idd + '" class="formula" formula="=(G' + (_nn9) + '+N' + (_nn9) + '-R' + (_nn9) + ')" dt="' + part1_col_data_type_hash[col] + '">0</td>';
        }
        $('#one #excelTable tr[rownum="' + (_nn9 - 1) + '"]').after(x__180);
        aErd(1, _nn9);
    }
    function sFca(_ip1, __s1, _yo_3) {
        var x__177 = $('[rowNum="' + _ip1 + '"]');
        zqs('one', x__177, 1);
        var x__178 = '<tr rownum="' + _ip1 + '" class="rowItogo rowItogoExpanded" branch="' + __s1 + '" _yo_3="' + _yo_3 + '">';
        x__178 += '<th class="cellExcelHeadRow">-</th>';
        x__178 += '<td colspan="' + PART1_ROW_ITOGO_COLSPAN + '" id="1_A' + _ip1 + '">Итого по коду: ' + _yo_3 + '</td>';
        x__178 += '<td id="1_G' + _ip1 + '" class="formula" formula="=SUM(G' + (_ip1) + ':G' + (_ip1 - 1) + ')" dt="' + part1_col_data_type_hash['G'] + '">0</td>';
        x__178 += '<td id="1_' + PART1_COL_PRIXOD_1 + _ip1 + '" class="formula" formula="=SUM(' + PART1_COL_PRIXOD_1 + (_ip1 - 1) + ':' + PART1_COL_PRIXOD_1 + (_ip1 - 1) + ')" dt="' + part1_col_data_type_hash[PART1_COL_PRIXOD_1] + '">0</td>';
        x__178 += '<td id="1_' + PART1_COL_PRIXOD_2 + _ip1 + '" class="formula" formula="=SUM(' + PART1_COL_PRIXOD_2 + (_ip1 - 1) + ':' + PART1_COL_PRIXOD_2 + (_ip1 - 1) + ')" dt="' + part1_col_data_type_hash[PART1_COL_PRIXOD_2] + '">0</td>';
        x__178 += '<td id="1_' + PART1_COL_PRIXOD_3 + _ip1 + '" class="formula" formula="=SUM(' + PART1_COL_PRIXOD_3 + (_ip1 - 1) + ':' + PART1_COL_PRIXOD_3 + (_ip1 - 1) + ')" dt="' + part1_col_data_type_hash[PART1_COL_PRIXOD_3] + '">0</td>';
        x__178 += '<td id="1_' + PART1_COL_PRIXOD_4 + _ip1 + '" class="formula" formula="=SUM(' + PART1_COL_PRIXOD_4 + (_ip1 - 1) + ':' + PART1_COL_PRIXOD_4 + (_ip1 - 1) + ')" dt="' + part1_col_data_type_hash[PART1_COL_PRIXOD_4] + '">0</td>';
        x__178 += '<td id="1_' + PART1_COL_PRIXOD_5 + _ip1 + '" class="formula" formula="=SUM(' + PART1_COL_PRIXOD_5 + (_ip1 - 1) + ':' + PART1_COL_PRIXOD_5 + (_ip1 - 1) + ')" dt="' + part1_col_data_type_hash[PART1_COL_PRIXOD_5] + '">0</td>';
        x__178 += '<td id="1_' + PART1_COL_PRIXOD_6 + _ip1 + '" class="formula" formula="=SUM(' + PART1_COL_PRIXOD_6 + (_ip1 - 1) + ':' + PART1_COL_PRIXOD_6 + (_ip1 - 1) + ')" dt="' + part1_col_data_type_hash[PART1_COL_PRIXOD_6] + '">0</td>';
        if (zz == 11) {
            x__178 += '<td id="1_' + PART1_COL_PRIXOD_7 + _ip1 + '" class="formula" formula="=SUM(' + PART1_COL_PRIXOD_7 + (_ip1 - 1) + ':' + PART1_COL_PRIXOD_7 + (_ip1 - 1) + ')" dt="' + part1_col_data_type_hash[PART1_COL_PRIXOD_7] + '">0</td>';
        }
        x__178 += '<td id="1_' + PART1_COL_PRIXOD_VSEGO + _ip1 + '" class="formula" formula="=SUM(' + PART1_COL_PRIXOD_VSEGO + (_ip1 - 1) + ':' + PART1_COL_PRIXOD_VSEGO + (_ip1 - 1) + ')" dt="' + part1_col_data_type_hash[PART1_COL_PRIXOD_VSEGO] + '">0</td>';
        x__178 += '<td id="1_' + PART1_COL_RASXOD_1 + _ip1 + '" class="formula" formula="=SUM(' + PART1_COL_RASXOD_1 + (_ip1 - 1) + ':' + PART1_COL_RASXOD_1 + (_ip1 - 1) + ')" dt="' + part1_col_data_type_hash[PART1_COL_RASXOD_1] + '">0</td>';
        x__178 += '<td id="1_' + PART1_COL_RASXOD_2 + _ip1 + '" class="formula" formula="=SUM(' + PART1_COL_RASXOD_2 + (_ip1 - 1) + ':' + PART1_COL_RASXOD_2 + (_ip1 - 1) + ')" dt="' + part1_col_data_type_hash[PART1_COL_RASXOD_2] + '">0</td>';
        x__178 += '<td id="1_' + PART1_COL_RASXOD_3 + _ip1 + '" class="formula" formula="=SUM(' + PART1_COL_RASXOD_3 + (_ip1 - 1) + ':' + PART1_COL_RASXOD_3 + (_ip1 - 1) + ')" dt="' + part1_col_data_type_hash[PART1_COL_RASXOD_3] + '">0</td>';
        if (zz == 11) {
            x__178 += '<td id="1_' + PART1_COL_RASXOD_4 + _ip1 + '" class="formula" formula="=SUM(' + PART1_COL_RASXOD_4 + (_ip1 - 1) + ':' + PART1_COL_RASXOD_4 + (_ip1 - 1) + ')" dt="' + part1_col_data_type_hash[PART1_COL_RASXOD_4] + '">0</td>';
        }
        x__178 += '<td id="1_' + PART1_COL_RASXOD_VSEGO + _ip1 + '" class="formula" formula="=SUM(' + PART1_COL_RASXOD_VSEGO + (_ip1 - 1) + ':' + PART1_COL_RASXOD_VSEGO + (_ip1 - 1) + ')" dt="' + part1_col_data_type_hash[PART1_COL_RASXOD_VSEGO] + '">0</td>';
        x__178 += '<td id="1_' + PART1_COL_TAIL_END + _ip1 + '" class="formula" formula="=SUM(' + PART1_COL_TAIL_END + (_ip1 - 1) + ':' + PART1_COL_TAIL_END + (_ip1 - 1) + ')" dt="' + part1_col_data_type_hash[PART1_COL_TAIL_END] + '">0</td>';
        if (zz == 11) {
            x__178 += '<td id="1_' + PART1_COL_TAIL_OLD_MARK + _ip1 + '" class="formula" formula="=SUM(' + PART1_COL_TAIL_OLD_MARK + (_ip1 - 1) + ':' + PART1_COL_TAIL_OLD_MARK + (_ip1 - 1) + ')" dt="' + part1_col_data_type_hash[PART1_COL_TAIL_OLD_MARK] + '">0</td>';
        }
        var percId = "perc" + _ip1;
        x__178 += '<td id="TD_' + percId + '">';
        x__178 += '<input size="6" type="text" id="' + percId + '" value="100.00">';
        x__178 += '</td></tr>';
        $('#one #excelTable tr[rownum="' + (_ip1 - 1) + '"]').after(x__178);
        var added = $('#one tr[rownum="' + _ip1 + '"]');
        aEtR1(added);
        apE1(added);
    }
    ;
    function oqd(div) {
        $('#' + div + ' .rowItogo').each(function () {
            var xo_2 = $(this).attr('branch');
            var _yo_3 = $(this).attr('_yo_3');
            var _yo_1, _yo_2;
            if (div == 'two') {
                _yo_1 = $(this).attr('_yo_1');
                _yo_2 = $(this).attr('_yo_2');
            }
            $(this).find('.formula').each(function () {
                var x__175 = $(this).attr('id')[2];
                var x__171 = $('#' + div + ' .pq-grid-row').filter('tr[branch="' + xo_2 + '"][_yo_3="' + _yo_3 + '"]');
                if (div == 'two') {
                    x__171 = x__171.filter('tr[_yo_1="' + _yo_1 + '"]tr[_yo_2="' + _yo_2 + '"]');
                }
                if (x__171.length) {
                    var x__173 = parseInt($(x__171[0]).attr('rownum'));
                    var x__174 = x__173;
                    x__171.each(function () {
                        var r = parseInt($(this).attr('rownum'));
                        if (r > x__174) {
                            x__174 = r;
                        }
                        if (r < x__173) {
                            x__173 = r;
                        }
                    });
                    var x__172 = '=SUM(' + x__175 + x__173 + ':' + x__175 + x__174 + ')';
                    $(this).attr('formula', x__172);
                } else {
                    console.log('ERROR! Such y_224 should have been deleted:', $(this));
                }
            })
        })
    }
    ;
    function uex(div) {
        $('#' + div + ' .rowFinalSum').children('.formula').each(function () {
            var col = $(this).attr('id')[2];
            var x__169 = [];
            $('#' + div + ' .rowItogo').each(function () {
                x__169.push(col + $(this).attr('rownum'));
            });
            var x__170 = '=(0)';
            if (x__169.length) {
                x__170 = '=(' + implode('+', x__169) + ')';
            }
            $(this).attr('formula', x__170);
        })
    }
    ;
    function llojg() {
        $('#one .formulaFrom2ndSheet').each(function () {
            var _p = $(this).parent();
            var xo_2 = _p.attr('branch');
            var _yo_3 = _p.attr('_yo_3');
            var _yo_1 = _p.attr('_yo_1');
            var _yo_2 = _p.attr('_yo_2');
            var _p_n0 = $('#two tr[class *="rowItogo"][branch="' + xo_2 + '"][_yo_3="' + _yo_3 + '"][_yo_1="' + _yo_1 + '"][_yo_2="' + _yo_2 + '"]');
            if (!_p_n0.length) {
                if ($(this).attr('formula') == '=0') {
                    return;
                }
                var fTr = $(this).parent();
                var x__167 = fTr.attr('rownum');
                $('#btnone').trigger('click');
                if (!fTr.is(":visible")) {
                    var xx_12_q = $('#one tr[class *= "rowItogo"][branch = "' + xo_2 + '"][_yo_3 = "' + _yo_3 + '"]');
                    xx_12_q.children('th[class *= "cellExcelHeadRow"]').trigger('click');
                }
                ;
                $('#1_G' + x__167).focus();
                fTr.trigger('click');
                if (!confirm("Поступлений в Разделе 2 не осталось. Удалить и движение?")) {
                    $(this).attr('formula', '=0');
                    return;
                }
                ;
                zqs('one', fTr, -1);
                fTr.remove();
                var x__n01 = $('#one .pq-grid-row').filter('[branch="' + xo_2 + '"][_yo_3="' + _yo_3 + '"]');
                if (!x__n01.length) {
                    var x__101 = $('#one .rowItogo').filter('[branch="' + xo_2 + '"][_yo_3="' + _yo_3 + '"]');
                    if (x__101.length) {
                        zqs('one', $('#one tr[rownum="' + x__167 + '"]'), -1);
                        x__101.remove();
                        x__n01 = $('#one .pq-grid-row').filter('[branch="' + xo_2 + '"]');
                        if (!x__n01.length) {
                            var x__166 = $('#one .rowBranch').filter('[branch="' + xo_2 + '"]');
                            if (x__166.length) {
                                zqs('one', $('#one tr[rownum="' + x__167 + '"]'), -1);
                                x__166.remove();
                            }
                        }
                    }
                }
                return;
            }
            var _p_n01 = parseInt(_p_n0.attr('rownum'));
            $(this).attr('formula', '=\'Раздел 2\'' + '!' + PART2_COL_PURCHASE_AMOUNT + _p_n01);
        })
    }
    ;
    function tkq(xo_2, _yo_3, _yo_1, _yo_2) {
        if (_yo_1) {
            var _ay0 = [];
            $('#one .rowBranch').each(function () {
                _ay0.push($(this).attr('branch'));
            });
            if ($.inArray(xo_2, _ay0) != -1) {
                var xo_6 = $('#one tr[class*="rowItogo"][branch="' + xo_2 + '"][_yo_3="' + _yo_3 + '"]');
                if (xo_6.length) {
                    var xo_9 = $('#one tr[class*="pq-grid-row"][branch="' + xo_2 + '"][_yo_3="' + _yo_3 + '"][_yo_1="' + _yo_1 + '"][_yo_2="' + _yo_2 + '"]');
                    if (xo_9.length) {
                    } else {
                        var xo_7 = parseInt(xo_6.attr('rownum'));
                        var xo_8 = $.trim($('#one tr[rownum="' + (xo_7 - 1) + '"]').children()[1].innerHTML);
                        xo_8 = parseInt(xo_8);
                        sFpa(xo_7, xo_2, _yo_3, _yo_1, _yo_2, xo_8 + 1);
                        if (!xo_6.hasClass('rowItogoExpanded')) {
                            $(xo_6).find('th').trigger('click');
                        }
                    }
                } else {
                    var _p_y5 = $('#one tr[branch="' + xo_2 + '"][class="rowBranch"]');
                    var _py5 = parseInt(_p_y5.attr('rownum'));
                    var _ip1 = _py5 + 1;
                    sFca(_ip1, xo_2, _yo_3);
                    sFpa(_ip1, xo_2, _yo_3, _yo_1, _yo_2);
                }
            } else {
                var sq_ = $('[name=B_a_1]');
                var __s1 = sq_.val();
                var sq_9 = $("[name=B_a_1] option:selected").text();
                var sf_9 = $('#one .rowFinalSum');
                var ac = parseInt(sf_9.attr('rownum'));
                zqs('one', sf_9, 1);
                var _xy5 = '<tr rownum="' + ac + '" class="rowBranch" branch="' + xo_2 + '">';
                _xy5 += '<th class="cellExcelHeadRow">' + ac + '</th>';
                var _br = __s1;
                if (__s1.length != 12 && isKppFake(__s1)) {
                    _br = __s1 + (' (внутренний идентификатор подразделения)');
                }
                _xy5 += '<td colspan="' + (PART1_ROW_OBOSOB_COLSPAN) + '" id="1_A' + ac + '">По обособленному подразделению: ' + sq_9 + ' ' + _br + '</td></tr>';
                $('#one #excelTable tr[rownum="' + (ac - 1) + '"]').after(_xy5);
                var _p_y5 = $('#one tr[branch="' + __s1 + '"][class="rowBranch"]');
                var _py5 = parseInt(_p_y5.attr('rownum'));
                var _ip1 = _py5 + 1;
                sFca(_ip1, __s1, _yo_3);
                sFpa(_ip1, __s1, _yo_3, _yo_1, _yo_2);
            }
        }
        llojg();
        ulQx('one');
        oqd('one');
        uex('one');
    }
    ;
    function eqo() {
        var qq = meI(), _ay0 = [];
        if (qq) {
            $('#two .rowBranch').each(function () {
                _ay0.push($(this).attr('branch'));
            });
            var sq_ = $('[name=B_a_1]');
            var __s1 = sq_.val();
            var sq_9 = $("[name=B_a_1] option:selected").text();
            var __s2s = $('#CPopupVal3').val();
            var _z_1_q = $('#EPopupVal3').val();
            var _z_3_q = $('#FPopupVal3').val();
            
            var newRowNumber = 0;
            
            if ($.inArray(__s1, _ay0) != -1) {
                var sx_9 = $('#two tr[branch="' + __s1 + '"][_yo_3="' + __s2s + '"][_yo_1="' + _z_1_q + '"][_yo_2="' + _z_3_q + '"]').length;
                if (sx_9) {
                    var pi1 = $('#two tr[class*="rowItogo"][branch="' + __s1 + '"][_yo_3="' + __s2s + '"][_yo_1="' + _z_1_q + '"][_yo_2="' + _z_3_q + '"]');
                    if (!pi1.hasClass('rowItogoExpanded')) {
                        $(pi1).find('th').trigger('click');
                    }
                    var _nn9 = pi1.attr('rownum');
                    newRowNumber = _nn9;
                    var o_1r = parseInt($('#2_A' + (_nn9 - 1)).html());
                    ssPa(_nn9, __s1, __s2s, _z_1_q, _z_3_q, o_1r + 1);
                    var v_s_q = pi1.find('.vsegoStrok');
                    var v_s_z = parseInt(v_s_q.html());
                    v_s_q.html(v_s_z + 1);
                    v_s_q.attr('id', 'vsegoStrok' + (parseInt(v_s_q.parent().attr('rownum'))));
                } else {
                    var _p_y5 = $('#two tr[branch="' + __s1 + '"][class="rowBranch"]');
                    var _py5 = parseInt(_p_y5.attr('rownum'));
                    var _ip1 = _py5 + 1;
                    newRowNumber = _ip1;
                    ssCa(_ip1, __s1, __s2s, _z_1_q, _z_3_q);
                    ssPa(_ip1, __s1, __s2s, _z_1_q, _z_3_q);
                }
            } else {
                var sf_9 = $('#two .rowFinalSum');
                var ac = parseInt(sf_9.attr('rownum'));
                zqs('two', sf_9, 1);
                var _xy5 = '<tr rownum="' + ac + '" class="rowBranch" branch="' + __s1 + '">';
                _xy5 += '<th class="cellExcelHeadRow">' + ac + '</th>';
                var _br = __s1;
                if (__s1.length != 12 && isKppFake(__s1)) {
                    _br = __s1 + (' (внутренний идентификатор подразделения)');
                }
                _xy5 += '<td colspan="' + (parseInt(PART2_COLUMNS_CNT) + 1) + '" id="2_A' + ac + '">По обособленному подразделению: ' + sq_9 + ' ' + _br + '</td></tr>';
                $('#two #excelTable tr[rownum="' + (ac - 1) + '"]').after(_xy5);
                var _p_y5 = $('#two tr[branch="' + __s1 + '"][class="rowBranch"]');
                var _py5 = parseInt(_p_y5.attr('rownum'));
                var _ip1 = _py5 + 1;
                newRowNumber = _ip1;
                ssCa(_ip1, __s1, __s2s, _z_1_q, _z_3_q);
                ssPa(_ip1, __s1, __s2s, _z_1_q, _z_3_q);
            }
            ulQx('two');
            oqd('two');
            uex('two');
            tkq(__s1, __s2s, _z_1_q, _z_3_q);
            x_x91.dialog("close");
            rC();
            _c();
            
            $nR = $('#2_pos_'+newRowNumber);
            var br = $nR.attr('branch');
            var sup_inn = $('#2_' + PART2_COL_SUPPLIER_INN + newRowNumber).html();
            var sup_kpp = $('#2_' + PART2_COL_SUPPLIER_KPP + newRowNumber).html();
            var pur_amnt = parseFloat($('#2_' + PART2_COL_PURCHASE_AMOUNT + newRowNumber).val());
            var name = $('#2_' + PART2_COL_SUPPLIER_NAME + newRowNumber).html();
            updateDeliveriesInfo(br, name, sup_inn, sup_kpp, pur_amnt);
        }
        return qq;
    }
    function ozm(cRow, percentVal) {
        if (zz == 11) {
            var colSupply = 'O';
            var colSale = 'P';
            var rasxodCols = ['Q', 'R', 'S'];
        } else {
            var colSupply = 'N';
            var colSale = 'O';
            var rasxodCols = ['P', 'Q'];
        }
        var VSEGO_PRED_OSTATOK = parseFloat($("#1_G" + cRow).html());
        var VSEGO_POSTUPLENIE = parseFloat($("#1_" + colSupply + cRow).html());
        var VSEGOPLUS = VSEGO_PRED_OSTATOK + VSEGO_POSTUPLENIE;
        var VSEGO_TAIL = VSEGOPLUS * percentVal / 100;
        var rasxConst = 0;
        $.each(rasxodCols, function (ind, v) {
            rasxConst += parseFloat($('#1_' + v + cRow).html());
        });
        var salesItogo = VSEGOPLUS - rasxConst - VSEGO_TAIL;
        var formula = $('#1_' + colSale + cRow).attr('formula');
        var matches = formula.match(/\((.+)\:(.+)\)/);
        if (!matches) {
            console.log('Ошибка в формуле');
            console.log(formula);
            return;
        }
        
        //console.log('VSEGO_PRED_OSTATOK ', VSEGO_PRED_OSTATOK)
        //console.log('VSEGO_POSTUPLENIE ', VSEGO_POSTUPLENIE)
        //console.log('VSEGOPLUS ', VSEGOPLUS)
        //console.log('VSEGO_TAIL ', VSEGO_TAIL)
        //console.log('percentVal ', percentVal)
        //console.log('salesItogo ', salesItogo)
        
        
        var low = matches[1];
        var lowRow = parseInt(low.substr(1));
        var high = matches[2];
        var highRow = parseInt(high.substr(1));
        if (salesItogo == 0) {
            for (var i = lowRow; i <= highRow; ++i) {
                var curELem = $('#1_' + colSale + i);
                var prevVal = curELem.val();
                if (prevVal != 0) {
                    curELem.val(0);
                    curELem.attr('size', 2);
                    cVf.push(curELem.parent());
                }
            }
        } else {
            for (var i = lowRow; i <= highRow; ++i) {
                var Xi = 0;
                var tail = parseFloat($('#1_G' + i).val());
                var supply = parseFloat($('#1_' + colSupply + i).html());
                var rasxodI = 0;
                $.each(rasxodCols, function (ind, v) {
                    rasxodI += parseFloat($('#1_' + v + i).val());
                });
                var Ki = (tail + supply - rasxodI) / VSEGOPLUS;
                var Xi = (Ki * salesItogo).toFixed(4);
                // не проверяем объем продаж
                //if (Xi < lvm) {
                //    if (Xi > lvm / 2) {
                //        Xi = lvm;
                //    } else {
                //        Xi = 0;
                //    }
                //}
                var curELem = $('#1_' + colSale + i);
                var prevVal = curELem.val();
                if (prevVal != Xi) {
                    ;
                    curELem.val(Xi);
                    cVf.push(curELem.parent());
                    var input_size = (Xi.toString()).length;
                    input_size = input_size > MAX_INP_SIZE ? MAX_INP_SIZE : input_size;
                    curELem.attr('size', input_size)
                }
            }
        }
    }
    x_x91 = $("#dialog-form3").dialog({autoOpen: false, height: 915, width: 500, position: ['right', 'top'], modal: true, buttons: {"Добавить": eqo, "Отменить": function () {
                _a2.removeClass("ui-state-error");
                x_x91.dialog("close");
            }}, close: function () {
            _a2.removeClass("ui-state-error");
            _u3(MSG_TIPS_DEFAULT);
        }, });
    form3 = x_x91.find("form").on("submit", function (event) {
        event.preventDefault();
        eqo();
    });
    _dgm_ = $("#grid_makers").dialog({width: 550, position: ['right', 'top'], modal: true, buttons: {"Выбрать": sM, "Отменить": function () {
                _dgm_.dialog("close");
            }}, close: function () {
            var ___g = $("#grid_makers");
            ___g.pqGrid("option", "dataModel", {});
            meI();
            $('[aria-describedby="dialog-form3"]').show();
        }, autoOpen: false});
    _dgs = $("#grid_suppliers").dialog({width: 550, position: ['right', 'top'], modal: true, buttons: {"Выбрать": sS, "Отменить": function () {
                _dgs.dialog("close");
            }}, close: function () {
            var a = $("#grid_suppliers");
            a.pqGrid("option", "dataModel", {});
            meI();
            $('[aria-describedby="dialog-form3"]').show();
        }, autoOpen: false});
    var beingEditedVal;
    $('#one td input').not('[id^="perc"]').focus(function () {
        beingEditedVal = $(this).val()
    });
    $('#two td input').focus(function () {
        beingEditedVal = $(this).val()
    });
    $('#one [id^="perc"]').focus(function () {
        beingEditedVal = $(this).val()
    });
    $('#one td input').not('[id^="perc"]').focusout(function () {
        var userInput = $(this).val();
        if (beingEditedVal == userInput) {
            return;
        }
        userInput = $.trim(userInput);
        $(this).val(userInput);
        beingEditedVal = userInput;
        cVf.push($(this).parent());
        var max_size = 10;
        var input_size = (userInput.toString()).length;
        input_size = input_size > max_size ? max_size : input_size;
        $(this).attr('size', input_size);
        rC('one');
        _c();
    });
    $('#two td input').focusout(function () {
        var userInput = $(this).val();
        if (beingEditedVal == userInput) {
            return;
        }
        userInput = $.trim(userInput);
        $(this).val(userInput);
        beingEditedVal = userInput;
        cVf.push($(this).parent());
        var max_size = 25;
        var input_size = (userInput.toString()).length;
        input_size = input_size > max_size ? max_size : input_size;
        $(this).attr('size', input_size);
        rC();
        _c();
    });
    $('[id^="perc"]').focusout(function () {
        var userInput = $(this).val();
        if (beingEditedVal == userInput) {
            return;
        }
        if (!checkPercent({}, userInput)) {
            $('#log').html('Вы ввели неверное значение процента! Было оставлено старое значение.');
            $(this).val(beingEditedVal);
            return;
        }
        ;
        userInput = $.trim(userInput);
        $(this).val(userInput);
        beingEditedVal = userInput;
        cVf.push($(this).parent());
        var cRow = $(this).parent().parent().attr('rownum');
        ozm(cRow, userInput);
        rC('one');
        _c();
    });
    var $toolbar = $("<div id='grud_toolbar' class='pq-grid-toolbar pq-grid-toolbar-crud'></div>").appendTo($(".pq-grid-top", this));
    $("<span>Добавить (пробел+A)</span>").appendTo($toolbar).button({icons: {primary: "ui-icon-circle-plus"}}).click(function (evt) {
        yqm();
    });
    $("<span>Удалить (пробел+D)</span>").appendTo($toolbar).button({icons: {primary: "ui-icon-circle-minus"}}).click(function () {
        var y_221 = $('#two .pq-row-select');
        if (!y_221.length) {
            alert('Выберете строку!');
            return;
        }
        if (!y_221.is(":visible")) {
            var xo_2 = y_221.attr('branch');
            var _yo_3 = y_221.attr('_yo_3');
            var _yo_1 = y_221.attr('_yo_1');
            var _yo_2 = y_221.attr('_yo_2');
            var y_224 = $('#two tr[class *="rowItogo"][branch="' + xo_2 + '"][_yo_3="' + _yo_3 + '"][_yo_1="' + _yo_1 + '"][_yo_2="' + _yo_2 + '"]');
            y_224.children('th[class *="cellExcelHeadRow"]').trigger('click')
        }
        if (!confirm("Вы действительно хотите удалить строку?")) {
            return;
        }
        ddd(y_221);
    });
    function ddd(y_221) {
        var pi1 = {};
        var xo_2 = y_221.attr('branch');
        var _yo_3 = y_221.attr('_yo_3');
        var _yo_1 = y_221.attr('_yo_1');
        var _yo_2 = y_221.attr('_yo_2');
        pi1 = $('#two tr[class*="rowItogo"][branch="' + xo_2 + '"][_yo_3="' + _yo_3 + '"][_yo_1="' + _yo_1 + '"][_yo_2="' + _yo_2 + '"]');
        var v_s_q = pi1.find('.vsegoStrok');
        var v_s_z = parseInt(v_s_q.html());
        v_s_q.html(v_s_z - 1);
        v_s_q.attr('id', 'vsegoStrok' + (parseInt(v_s_q.parent().attr('rownum')) - 1));
        var selectedRowNum = y_221.attr('rownum');
        
        var br = y_221.attr('branch');
        var sup_inn = $('#2_' + PART2_COL_SUPPLIER_INN + selectedRowNum).html();
        var sup_kpp = $('#2_' + PART2_COL_SUPPLIER_KPP + selectedRowNum).html();
        var pur_amnt = parseFloat($('#2_' + PART2_COL_PURCHASE_AMOUNT + selectedRowNum).val());
        var name = $('#2_' + PART2_COL_SUPPLIER_NAME + selectedRowNum).html();
        updateDeliveriesInfo(br, name, sup_inn, sup_kpp, -pur_amnt);
        
        zqs('two', y_221, -1);
        y_221.remove();
        
        var x__n01 = $('#two .pq-grid-row').filter('[branch="' + xo_2 + '"][_yo_3="' + _yo_3 + '"][_yo_1="' + _yo_1 + '"][_yo_2="' + _yo_2 + '"]');
        if (!x__n01.length) {
            var x__101 = $('#two .rowItogo').filter('[branch="' + xo_2 + '"][_yo_3="' + _yo_3 + '"][_yo_1="' + _yo_1 + '"][_yo_2="' + _yo_2 + '"]');
            if (x__101.length) {
                zqs('two', $('#two tr[rownum="' + selectedRowNum + '"]'), -1);
                x__101.remove();
                x__n01 = $('#two .pq-grid-row').filter('[branch="' + xo_2 + '"]');
                if (!x__n01.length) {
                    var x__166 = $('#two .rowBranch').filter('[branch="' + xo_2 + '"]');
                    if (x__166.length) {
                        zqs('two', $('#two tr[rownum="' + selectedRowNum + '"]'), -1);
                        x__166.remove();
                    }
                }
            }
        }
        ulQx('two');
        oqd('two');
        uex('two');
        tkq(xo_2, _yo_3);
        rC();
        _c();
    }
    function yqm() {
        if ($.isEmptyObject(rmk) && $.isEmptyObject(sps)) {
            var host_url = window.location.origin + (SERVER_TYPE_PROD ? "" : TEST_SUFFIX);
            $.ajax({type: "GET", url: host_url + '/declaration_view/actions.php?action=get_info', timeout: 5000, success: function (data) {
                    try {
                        var data_parsed = JSON.parse(data);
                    } catch (e) {
                        var msg = 'Время Вашей сессии истекло. Намжите на "Личный кабинет",введите ИНН и пароль и попробуйте снова. Если это не поможет,обратитесь к администратору!';
                        $('#log').html(msg);
                        alert(msg);
                        console.log(e);
                        console.log(data);
                        return;
                    }
                    if (data_parsed['status'] != 0) {
                        $('#log').html(data_parsed['error']);
                        alert(data_parsed['error']);
                    }
                    rmk = data_parsed['rmk'];
                    sps = data_parsed['sps'];
                    x_x91.dialog("open");
                }, error: function (data) {
                    alert('Error!');
                    console.log(data)
                }, async: false})
        } else {
            x_x91.dialog("open");
        }
    }
    
    function deliveryInfoDivInside(branch, name, inn, kpp, sum, lines){
        return '<b><font>В подразделение: '+branch+ " от "+name+" (инн: "+inn +", кпп: "+kpp+")</font></b>: объем - " + sum + ", строк - " +lines;
    }
    
    function makeDeliveriesInfo(){
        var $main_elem = $('#part2_deliveries');
        $main_elem.empty();
        
        var sup_hash = {}
        var names_hash = {}
        
        $('#two .pq-grid-row').each(function(){
            var branch = $(this).attr('branch');
            var rowNum = $(this).attr('rownum');
            var inn = $('#2_' + PART2_COL_SUPPLIER_INN + rowNum).html();
            var kpp = $('#2_' + PART2_COL_SUPPLIER_KPP + rowNum).html();
            var pur_amnt = parseFloat($('#2_' + PART2_COL_PURCHASE_AMOUNT + rowNum).val());
            var name = $('#2_' + PART2_COL_SUPPLIER_NAME + rowNum).html();
            
            if (!names_hash[inn]){
                names_hash[inn] = {}
            }
            if (!names_hash[inn][kpp]){
                names_hash[inn][kpp] = name.replace(/\"/g, '').replace(/\'/g, '')
            }
            
            if (!sup_hash[branch]){
                sup_hash[branch] = {}
            }
            if (!sup_hash[branch][inn]){
                sup_hash[branch][inn] = {}
            }
            if (!sup_hash[branch][inn][kpp]){
                sup_hash[branch][inn][kpp] = {}
            }
            if (!sup_hash[branch][inn][kpp]['lines']){
                sup_hash[branch][inn][kpp]['lines'] = 0
            }
            if (!sup_hash[branch][inn][kpp]['sum']){
                sup_hash[branch][inn][kpp]['sum'] = 0
            }
            
            sup_hash[branch][inn][kpp]['lines']++;
            if (parseFloat(pur_amnt)){
                sup_hash[branch][inn][kpp]['sum'] += pur_amnt;
            }
            
        })
        
        $.each(sup_hash, function(branch){
            $.each(sup_hash[branch], function(inn){
                $.each(sup_hash[branch][inn], function(kpp){
                    var s = sup_hash[branch][inn][kpp]['sum'].toFixed(4);
                    var ln = sup_hash[branch][inn][kpp]['lines'];
                    
                    var id_deliv_info = 'deliv_info_' + branch + '_' + inn + '_' + kpp;
                    var html = "<div id="+id_deliv_info+" class='delivInfo' deliv_branch='"+branch+"' deliv_sup_name='"+names_hash[inn][kpp]+"' deliv_sup_inn='"+inn+"' deliv_sup_kpp='"+kpp+"' deliv_sum='"+s+"' deliv_lines='"+ln+"'>" + deliveryInfoDivInside(branch, names_hash[inn][kpp], inn, kpp, s, ln) + "</div>";
                    $(html).appendTo($main_elem)
                })
            })
        })
    }
    
    function updateDeliveriesInfo(branch, sup_name, sup_inn, sup_kpp, sum, changeOperation){
        if (!changeOperation){
            changeOperation = false;
        }
        
        var $main_elem = $('#part2_deliveries');
        
        var id_deliv_info = 'deliv_info_' + branch + '_' + sup_inn + '_' + sup_kpp;
        var elem = $('#' + id_deliv_info);
        if (elem.length){
            var curLines = parseFloat(elem.attr('deliv_lines'));
            var newLines = curLines;
            if (!changeOperation){
                if (sum >= 0){
                    var newLines = curLines + 1;
                }
                else{
                    var newLines = curLines - 1;
                }
            }
            
            if (newLines <= 0){
                elem.remove();
            } 
            else{
                var newS = (parseFloat(elem.attr('deliv_sum')) + sum).toFixed(4);
                elem.attr('deliv_sum', newS);
                elem.attr('deliv_lines', newLines);
                elem.html(deliveryInfoDivInside(branch, elem.attr('deliv_sup_name'), elem.attr('deliv_sup_inn'), elem.attr('deliv_sup_kpp'), newS, newLines));
            }
        }
        else{
            var newS = sum.toFixed(4);
            var newLines = 1;
            
            var html = "<div id="+id_deliv_info+" class='delivInfo' deliv_branch='"+branch+"' deliv_sup_name='"+sup_name+"' deliv_sup_inn='"+sup_inn+"' deliv_sup_kpp='"+sup_kpp+"' deliv_sum='"+sum+"' deliv_lines='"+newLines+"'>" + deliveryInfoDivInside(branch, sup_name, sup_inn, sup_kpp, sum, newLines) + "</div>";
            $(html).appendTo($main_elem);
        }
    }
    
    var old_value_current = 0;
    $('[id ^="2_'+PART2_COL_PURCHASE_AMOUNT+'"]').change(function(){
        var rowNum = $(this).attr('id').substr(3)
        
        var $nR = $('#2_pos_'+rowNum);
        var br = $nR.attr('branch');
        var sup_inn = $('#2_' + PART2_COL_SUPPLIER_INN + rowNum).html();
        var sup_kpp = $('#2_' + PART2_COL_SUPPLIER_KPP + rowNum).html();
        var pur_amnt = (parseFloat(old_value_current) ? - parseFloat(old_value_current) : 0) + (parseFloat($(this).val()) ? parseFloat($(this).val()) : 0);
        var name = $('#2_' + PART2_COL_SUPPLIER_NAME + rowNum).html();
        updateDeliveriesInfo(br, name, sup_inn, sup_kpp, pur_amnt, true);
    })
    .focus(function(){
        old_value_current = parseFloat($(this).val()) ? parseFloat($(this).val()) : 0;
    });
    
    makeDeliveriesInfo();
    
    rC();
    _c(true);
});
