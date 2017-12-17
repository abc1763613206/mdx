(function(){
    tinymce.create('tinymce.plugins.mdx_fold', {
        init : function(ed, url){
            ed.addButton('mdx_fold', {
                title : '添加折叠内容',
                image : url+'/bt_icon/fold.png',
                onclick : function(){
                    ed.selection.setContent('[mdx_fold title="你的标题..."][/mdx_fold]');
                }
            });
        },
        createControl:function(n, cm){
            return null;
        },
    });
    tinymce.PluginManager.add('mdx_fold', tinymce.plugins.mdx_fold);
})();