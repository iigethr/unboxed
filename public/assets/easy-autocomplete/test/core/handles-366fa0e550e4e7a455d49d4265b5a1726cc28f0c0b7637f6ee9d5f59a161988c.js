QUnit.test("Handles should generate id and it should be possible to use it with functions",function(e){$(".input-no-id").attr("id","");$(".input-no-id").easyAutocomplete({data:["black","white","magenta","yellow"],list:{match:{enabled:!0}}});var t=$.Event("keyup");t.keyCode=50,$(".input-no-id").val("a").trigger(t);var a=$.Event("keyup");a.keyCode=40,$(".input-no-id").trigger(a);var n=$(".input-no-id").attr("id"),d=$("#"+n);e.ok(0<n.length,"input field has id"),e.equal(d.getSelectedItemIndex(),0,"getSelectedItemIndex passed"),e.equal(d.getSelectedItemData(),"black","getSelectedItemData passed"),e.equal(d.getItemData(1),"magenta","getItemData passed"),expect(4)}),QUnit.test("It should be possible to invoke plugin on element found whith class selector and use its id to with functions",function(e){$(".input-with-id").easyAutocomplete({data:["black","white","magenta","yellow"],list:{match:{enabled:!0}}});var t=$.Event("keyup");t.keyCode=50,$("#input-with-id").val("a").trigger(t);var a=$.Event("keyup");a.keyCode=40,$("#input-with-id").trigger(a);var n=$("#input-with-id");e.equal(n.getSelectedItemIndex(),0,"getSelectedItemIndex passed"),e.equal(n.getSelectedItemData(),"black","getSelectedItemData passed"),e.equal(n.getItemData(1),"magenta","getItemData passed"),expect(3)}),QUnit.test("It should be possible to invoke plugin on couple of element found whith class selector and use its id to with functions",function(e){$(".input").easyAutocomplete({data:["black","white","magenta","yellow"],list:{match:{enabled:!0}}});var t=$.Event("keyup");t.keyCode=50,$(".input").val("a").trigger(t);var a=$.Event("keyup");a.keyCode=40,$(".input").trigger(a);var n=$("#inputOne"),d=$("#inputTwo");e.equal(n.getSelectedItemIndex(),0,"getSelectedItemIndex passed"),e.equal(n.getSelectedItemData(),"black","getSelectedItemData passed"),e.equal(n.getItemData(1),"magenta","getItemData passed"),e.equal(d.getSelectedItemIndex(),0,"getSelectedItemIndex passed"),e.equal(d.getSelectedItemData(),"black","getSelectedItemData passed"),e.equal(d.getItemData(1),"magenta","getItemData passed"),expect(6)});