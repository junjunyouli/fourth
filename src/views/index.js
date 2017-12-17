module.exports=function (templateParams) {
	var _cssList=['vendor'];
	var webAssetsHelp=require('./webAssetsHelp.js')(templateParams,_cssList);

	var getScripts = "var scripts =["+webAssetsHelp.scriptList+"];"+
					"var flag = false;"+
					"for (let i = 0;i<scripts.length;i++) {"+
						"if(localStorage.getItem(scripts[i])){"+
						 "$('<scr'+'ipt>'+localStorage.getItem(scripts[i])+'</scr'+'ipt>').attr({type: 'text/javascript',id: i}).appendTo($('head').remove('#'+i));"+
						  "}else{"+
							  "localStorage.clear();flag=true;"+
							  "for(let j =0;j<scripts.length;j++){"+
							  		"axios.get(scripts[j]).then(function(resulet){localStorage.setItem(script[j],resulet.data)});"+
							  		"break;"+
							  "}"+
							"}"+
					"}"+
					"if(flag){Lazyload.js(scripts,function(){})}";



	var _html="{% extends './template.html' %}"+
	              "{% block title %}My Page{% endblock %}"+
	              "{% block styles %}"+
	              webAssetsHelp.styles+
	              "{% endblock %}"+
	              "{% block content %}{% include '../widget/index.html' %}{% endblock %}"+
	              "{% block script %}"+
	              "<script>"+
	              getScripts+
	              "</script>"+
	              "{% endblock %}";

              return _html;
}

