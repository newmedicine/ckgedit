function parse_wikitext(B){if(ckgedit_dwedit_reject){var f=GetE("ebut_cancel");f.click();return true}var z=getComplexTables();function n(U,V,P){var S=new Array();for(var R=V;R<U.length;R++){for(var Q=0;Q<U[R].length;Q++){if(U[R][Q].rowspan>0){var T=U[R][Q].text;S.push({row:R,column:Q,spans:U[R][Q].rowspan,text:T});if(!P){break}}}}return S}function D(T,P,R,S,i){var Q=S[T][P].colspan?S[T][P].colspan:0;S[T][P].rowspan=0;for(K=0;K<R-1;K++){S[++T].splice(P,0,{type:"td",rowspan:0,colspan:Q,prev_colspan:Q,text:" ::: "})}}function y(U){var R=n(U,0,true);var P=R.length;if(!P){return false}var V=R[0].row;var Q=R[0].column;D(V,Q,R[0].spans,U);P--;for(var T=0;T<P;T++){V++;var S=n(U,V,false);if(S.length){D(S[0].row,S[0].column,S[0].spans,U)}}return true}function m(S){if(!z){return}for(var Q=0;Q<S.length;Q++){if(!y(S)){break}}r+="\n";for(var Q=0;Q<S.length;Q++){r+="\n";for(var P=0;P<S[Q].length;P++){var R=S[Q][P].type=="td"?"|":"^";r+=R;var U=S[Q][P].align?S[Q][P].align:false;if(U=="center"||U=="right"){r+="  "}r+=S[Q][P].text;if(U=="center"||U=="left"){r+="  "}if(S[Q][P].colspan){for(var T=0;T<S[Q][P].colspan-1;T++){r+=R}}}r+="|"}}window.dwfckTextChanged=false;if(B!="bakup"){draft_delete()}var v="\nL_BR_K  \n";var E={b:"**",i:"//",em:"//",u:"__",br:v,strike:"<del>",del:"<del>",s:"<del>",p:"\n\n",a:"[[",img:"{{",strong:"**",h1:"\n====== ",h2:"\n===== ",h3:"\n==== ",h4:"\n=== ",h5:"\n== ",td:"|",th:"^",tr:" ",table:"\n\n",ol:"  - ",ul:"  * ",li:"",code:"''",pre:"\n<",hr:"\n\n----\n\n",sub:"<sub>",font:"",sup:"<sup>",div:"\n\n",span:"\n",dl:"\n",dd:"\n",dt:"\n"};var o={del:"</del>",s:"</del>",strike:"</del>",p:" ",br:" ",a:"]]",img:"}}",h1:" ======\n",h2:" =====\n",h3:" ====\n",h4:" ===\n",h5:" ==\n",td:" ",th:" ",tr:"|\n",ol:" ",ul:" ",li:"\n",pre:"\n</",sub:"</sub>",sup:"</sup> ",div:"\n\n",p:"\n\n",font:"</font>",span:" "};E.temp_u="CKGE_TMP_u";E.temp_strong="CKGE_TMP_strong";E.temp_em="CKGE_TMP_em";E.temp_i="CKGE_TMP_i";E.temp_b="CKGE_TMP_b";E.temp_del="CKGE_TMP_del";E.temp_strike="CKGE_TMP_strike";E.temp_code="CKGE_TMP_code";E.temp_sup="CKGE_TMP_sup";E.temp_csup="CKGE_TMP_csup";E.temp_sub="CKGE_TMP_sub";E.temp_csub="CKGE_TMP_csub";E.temp_del="CKGE_TMP_del";E.temp_cdel="CKGE_TMP_cdel";E.temp_strike="CKGE_TMP_del";E.temp_cstrike="CKGE_TMP_cdel";E.temp_s="CKGE_TMP_del";E.temp_cs="CKGE_TMP_cdel";var l={CKGE_TMP_b:"**",CKGE_TMP_strong:"**",CKGE_TMP_em:"//",CKGE_TMP_u:"__",CKGE_TMP_sup:"<sup>",CKGE_TMP_sub:"<sub>",CKGE_TMP_csub:"</sub>",CKGE_TMP_csup:"</sup>",CKGE_TMP_del:"<del>",CKGE_TMP_strike:"<del>",CKGE_TMP_code:"''"};E.blank="";E.fn_start="((";E.fn_end="))";E.row_span=":::";E.p_insert="_PARA__TABLE_INS_";E.format_space="_FORMAT_SPACE_";E.pre_td="<";var t={strong:true,b:true,i:true,em:true,u:true,del:true,strike:true,code:true,sup:true,sub:true,s:true};var r="";var O=false;var s=false;var b=false;var J=false;var h=false;var H=false;var L=false;var I=false;var g=false;var G=false;var q=false;var N=false;var M=false;var A;var c=new Array();var x=new Array();var e=false;var d=E.p_insert;var F="(br|co|coMULTI|es|kw|me|nu|re|st|sy)[0-9]";String.prototype.splice=function(i,Q,P){return(this.slice(0,i)+P+this.slice(i+Math.abs(Q)))};String.frasl=new RegExp("⁄|&frasl;|&#8260;|&#x2044;","g");F=new RegExp(F);HTMLParser(CKEDITOR.instances.wiki__text.getData(),{attribute:"",link_title:"",link_class:"",image_link_type:"",td_align:"",in_td:false,td_colspan:0,td_rowspan:0,rowspan_col:0,last_column:-1,row:0,col:0,td_no:0,tr_no:0,current_row:false,in_table:false,in_multi_plugin:false,is_rowspan:false,list_level:0,prev_list_level:-1,list_started:false,xcl_markup:false,in_link:false,link_formats:new Array(),last_tag:"",code_type:false,in_endnotes:false,is_smiley:false,geshi:false,downloadable_code:false,export_code:false,code_snippet:false,downloadable_file:"",external_mime:false,in_header:false,curid:false,format_in_list:false,prev_li:new Array(),link_only:false,in_font:false,using_fonts:false,interwiki:false,bottom_url:false,font_family:"inherit",font_size:"inherit",font_weight:"inherit",font_color:"inherit",font_bgcolor:"inherit",font_style:"inherit",is_mediafile:false,end_nested:false,mfile:false,backup:function(R,Q){var T=r.lastIndexOf(R);var P=r.indexOf(Q,T);if(T==-1||P==-1){return}if(R.length+P==P){var S=r.substring(0,T);var i=r.substring(P);r=S+i;return true}return false},is_iwiki:function(Q,S){var R=Q.match(/iw_(\w+\.?\w{0,12})/);var i=S.split(/\//);var P=i[i.length-1];P=P.replace(String.frasl,"/");if(!P.match(/oIWIKIo.*?cIWIKIc/)){P="oIWIKIo"+P+"cIWIKIc"}P=P.replace(/^.*?oIWIKIo/,"oIWIKIo");P=P.replace(/cIWIKIc.*/,"cIWIKIc");R[1]=R[1].replace(/_(\w{2})/,".$1");this.attr=R[1]+">"+P;q=true;this.interwiki=true},start:function(at,Y,ai){if(E[at]){if(t[at]&&this.in_link){this.link_formats.push(at);return}if(t[at]&&(this.in_font||this.in_header)){r+=" ";var ao="temp_"+at;r+=E[ao];r+=" ";return}else{if(at=="acronym"){return}}if(t[at]&&this.in_endnotes){if(at=="sup"){return}}if(at=="ol"||at=="ul"){this.prev_list_level=this.list_level;this.list_level++;if(this.list_level==1){this.list_started=false}if(this.list_started){this.prev_li.push(E.li)}E.li=E[at];return}else{if(!this.list_level){E.li="";this.prev_li=new Array()}}this.is_mediafile=false;if(at=="img"){var ar="?";var P;var R;var au=false;var ag="";var ab="";var ah=false;this.is_smiley=false;this.in_link=false}if(at=="a"){var af=true;var aA="";this.xcl_markup=false;this.in_link=true;this.link_pos=r.length;this.link_formats=new Array();this.footnote=false;var Z=false;this.id="";this.external_mime=false;var az=false;this.export_code=false;this.code_snippet=false;this.downloadable_file="";var ad=false;this.link_only=false;save_url="";this.interwiki=false;this.bottom_url=false;this.link_title=false;var am="";var ac=""}if(at=="p"){this.in_link=false;if(this.in_table){at="p_insert";J=true}}if(at=="table"){this.td_no=0;this.tr_no=0;this.in_table=true;this.is_rowspan=false;this.row=-1;this.rows=new Array();A=this.rows;this.table_start=r.length}else{if(at=="tr"){this.tr_no++;this.td_no=0;this.col=-1;this.row++;this.rows[this.row]=new Array();this.current_row=this.rows[this.row]}else{if(at=="td"||at=="th"){this.td_no++;this.col++;this.current_row[this.col]={type:at,rowspan:0,colspan:0,text:""};this.cell_start=r.length;this.current_cell=this.current_row[this.col];if(this.td_rowspan&&this.rowspan_col==this.td_no&&this.td_no!=this.last_column){this.is_rowspan=true;this.td_rowspan--}else{this.is_rowspan=false}}}}var Q;this.attr=false;this.format_tag=false;if(t[at]){this.format_tag=true}var aa=false;for(var ax=0;ax<Y.length;ax++){if(at=="td"||at=="th"){if(Y[ax].name=="colspan"){this.current_row[this.col].colspan=Y[ax].value}if(Y[ax].name=="class"){if((Q=Y[ax].value.match(/(left|center|right)/))){this.current_row[this.col].align=Q[1]}}if(Y[ax].name=="rowspan"){this.current_row[this.col].rowspan=Y[ax].value}}if(Y[ax].escaped=="u"&&at=="em"){at="u";this.attr="u";break}if(at=="div"){if(Y[ax].name=="class"&&Y[ax].value=="footnotes"){at="blank";this.in_endnotes=true}break}if(at=="dl"&&Y[ax].name=="class"&&Y[ax].value=="file"){this.downloadable_code=true;b=true;return}if(at=="span"&&Y[ax].name=="class"){if(Y[ax].value=="np_break"){return}}if(at=="span"&&Y[ax].name=="class"){if(Y[ax].value=="curid"){this.curid=true;return}if(Y[ax].value=="multi_p_open"){this.in_multi_plugin=true;L=true;return}if(Y[ax].value=="multi_p_close"){this.in_multi_plugin=false;return}if(Y[ax].value.match(F)){at="blank";this.geshi=true;break}}if(at=="span"&&!ckgedit_xcl_styles){if(Y[ax].name=="style"){if(!this.in_font){r+="__STYLE__"}this.in_font=true;this.using_fonts=true;Q=Y[ax].value.match(/font-family:\s*([\w\-\s,]+);?/);if(Q){this.font_family=Q[1]}Q=Y[ax].value.match(/font-size:\s*(.*)/);if(Q){Q[1]=Q[1].replace(/;/,"");this.font_size=Q[1]}Q=Y[ax].value.match(/font-weight:\s*(\w+);?/);if(Q){this.font_weight=Q[1]}Q=Y[ax].value.match(/.*?color:\s*(.*)/);var al=false;if(Q){Q[1]=Q[1].replace(/;/,"");if(Q[0].match(/background/)){this.font_bgcolor=Q[1]}else{this.font_color=Q[1]}}if(!al){Q=Y[ax].value.match(/background:\s*(\w+)/);if(Q&&Q[0].match(/background/)){this.font_bgcolor=Q[1]}}}}if(at=="td"||at=="th"){if(at=="td"){r=r.replace(/\^$/,"|")}this.in_td=true;if(Y[ax].name=="align"){this.td_align=Y[ax].escaped}else{if(Y[ax].name=="class"){Q=Y[ax].value.match(/\s*(\w+)align/);if(Q){this.td_align=Q[1]}}else{if(Y[ax].name=="colspan"){h=true;this.td_colspan=Y[ax].escaped}else{if(Y[ax].name=="rowspan"){this.td_rowspan=Y[ax].escaped-1;this.rowspan_col=this.td_no}}}}J=true}if(at=="a"){if(Y[ax].name=="title"){this.link_title=Y[ax].escaped;if(ac){am=Y[ax].escaped}else{this.link_title=this.link_title.replace(/\s+.*$/,"")}}else{if(Y[ax].name=="class"){if(Y[ax].value.match(/fn_top/)){this.footnote=true}else{if(Y[ax].value.match(/fn_bot/)){Z=true}else{if(Y[ax].value.match(/mf_(png|gif|jpg|jpeg)/i)){this.link_only=true}}}this.link_class=Y[ax].escaped;az=this.link_class.match(/mediafile/)}else{if(Y[ax].name=="id"){this.id=Y[ax].value}else{if(Y[ax].name=="type"){aA=Y[ax].value}else{if(Y[ax].name=="href"&&!this.code_type){var X=Y[ax].escaped.match(/https*:\/\//)?true:false;if(X){save_url=Y[ax].escaped}if(Y[ax].escaped.match(/\/lib\/exe\/detail.php/)){this.image_link_type="detail"}else{if(Y[ax].escaped.match(/exe\/fetch.php/)){this.image_link_type="direct"}}if(this.link_class&&this.link_class.match(/media/)&&!this.link_title){var ak=Y[ax].escaped.match(/media=(.*)/);if(ak){this.link_title=ak[1]}}var aq=Y[ax].escaped.match(/fetch\.php.*?media=.*?\.(png|gif|jpg|jpeg)$/i);if(aq){aq=aq[1]}if(Y[ax].escaped.match(/^https*:/)){this.attr=Y[ax].escaped;af=false}if(Y[ax].escaped.match(/^ftp:/)){this.attr=Y[ax].escaped;af=false}else{if(Y[ax].escaped.match(/do=export_code/)){this.export_code=true}else{if(Y[ax].escaped.match(/^nntp:/)){this.attr=Y[ax].escaped;af=false}else{if(Y[ax].escaped.match(/^mailto:/)){this.attr=Y[ax].escaped.replace(/mailto:/,"");af=false}else{if(Y[ax].escaped.match(/m-files/)){this.attr=Y[ax].escaped;this.mfile=Y[ax].escaped;af=false}else{if(Y[ax].escaped.match(/^file:/)){var S=Y[ax].value.replace(/file:[\/]+/,"");S=S.replace(/[\/]/g,"\\");S="\\\\"+S;this.attr=S;af=false}else{if(X&&!aq&&(Q=Y[ax].escaped.match(/fetch\.php(.*)/))){if(Q[1].match(/media=/)){W=Q[1].split(/=/);this.attr=W[1]}else{Q[1]=Q[1].replace(/^\//,"");this.attr=Q[1]}af=false;this.attr=decodeURIComponent?decodeURIComponent(this.attr):unescape(this.attr);if(!this.attr.match(/^:/)){this.attr=":"+this.attr}this.external_mime=true}else{af=false;Q=Y[ax].escaped.match(/doku.php\?id=(.*)/);if(!Q){Q=Y[ax].escaped.match(/doku.php\/(.*)/)}if(Q){if(!Q[1].match(/\?/)&&Q[1].match(/&amp;/)){ad=true;Q[1]=Q[1].replace(/&amp;/,"?")}}if(Q&&Q[1]){if(!Q[1].match(/^:/)){this.attr=":"+Q[1]}else{this.attr=Q[1]}if(this.attr.match(/\.\w+$/)){if(aA&&aA=="other_mime"){this.external_mime=true}else{for(var av=ax+1;av<Y.length;av++){if(Y[av].value.match(/other_mime/)){this.external_mime=true}break}}}}else{Q=Y[ax].value.match(/\\\\/);if(Q){this.attr=Y[ax].escaped;af=false}}}}}}}}}if(this.link_class=="media"){if(Y[ax].value.match(/http:/)){af=false}}if(!this.attr&&this.link_title){if(Q=this.link_class.match(/media(.*)/)){this.link_title=decodeURIComponent(safe_convert(this.link_title));this.attr=this.link_title;var aw=Q[1].split(/_/);if(aw&&aw[1]){aq=aw[1]}else{if(aw){aq=aw[0]}else{aq="mf"}}if(!this.attr.match(/^:/)&&!this.attr.match(/^https?\:/)){this.attr=":"+this.attr.replace(/^\s+/,"")}this.external_mime=true;af=false}}if(this.attr.match&&this.attr.match(/%[a-fA-F0-9]{2}/)&&(Q=this.attr.match(/userfiles\/file\/(.*)/))){Q[1]=Q[1].replace(/\//g,":");if(!Q[1].match(/^:/)){Q[1]=":"+Q[1]}this.attr=decodeURIComponent?decodeURIComponent(Q[1]):unescape(Q[1]);this.attr=decodeURIComponent?decodeURIComponent(this.attr):unescape(this.attr);this.external_mime=true}if(this.link_title&&this.link_title.match(/Snippet/)){this.code_snippet=true}if(Y[ax].value.match(/^#/)&&this.link_class.match(/wikilink/)){this.attr=Y[ax].value;this.link_title=false}if(this.link_class.match(/wikilink/)&&this.link_title){this.external_mime=false;if(!this.attr){this.attr=this.link_title}if(!this.attr.match(/^:/)){this.attr=":"+this.attr}if(this.attr.match(/\?.*?=/)){var W=this.attr.split(/\?/);W[0]=W[0].replace(/\//g,":");this.attr=W[0]+"?"+W[1]}else{this.attr=this.attr.replace(/\//g,":")}if(!ad&&Y[ax].name=="href"){if(!this.attr.match(/\?.*?=/)&&!Y[ax].value.match(/doku.php/)){var ay=Y[ax].value.match(/(\?.*)$/);if(ay&&ay[1]){this.attr+=ay[1]}}}}else{if(this.link_class.match(/mediafile/)&&this.link_title&&!this.attr){this.attr=this.link_title;this.external_mime=true;if(!this.attr.match(/^:/)){this.attr=":"+this.attr}}else{if(this.link_class.match(/interwiki/)){ac=this.link_class}}}if(this.link_class=="urlextern"&&!this.mfile&&save_url){this.attr=save_url;this.external_mime=false}if(this.in_endnotes){if(this.link_title){this.bottom_url=this.link_title}else{if(this.attr){this.bottom_url=this.attr}}}this.link_title="";this.link_class=""}}}}}}if(ac&&am){this.is_iwiki(ac,am);ac="";am=""}if(at=="sup"){if(Y[ax].name=="class"){Q=Y[ax].value.split(/\s+/);if(Q[0]=="dwfcknote"){this.attr=Q[0];at="blank";if(oDokuWiki_FCKEditorInstance.oinsertHtmlCodeObj.notes[Q[1]]){aa="(("+oDokuWiki_FCKEditorInstance.oinsertHtmlCodeObj.notes[Q[1]]+"))"}break}}}if(at=="pre"){if(Y[ax].name=="class"){var W=Y[ax].escaped.split(/\s+/);if(W.length>1){this.attr=Y[ax].value;this.code_type=W[0]}else{this.attr=Y[ax].escaped;this.code_type=this.attr}if(this.downloadable_code){this.attr=this.attr.replace(/\s*code\s*/,"");this.code_type="file"}s=true;if(this.in_table){at="pre_td"}break}}else{if(at=="img"){if(Y[ax].name=="alt"){ab=Y[ax].value}if(Y[ax].name=="type"){this.image_link_type=Y[ax].value}if(Y[ax].name=="src"){var aj="";if(Q=Y[ax].escaped.match(/fetch\.php.*?(media=.*)/)){var W=Q[1].split("=");aj=W[1];if(Q=Y[ax].escaped.match(/(media.*)/)){var W=Q[1].split("=");var U=W[1];aj=decodeURIComponent?decodeURIComponent(U):unescape(U)}if(!aj.match(/https?:/)&&!aj.match(/^:/)){aj=":"+aj}}else{if(Y[ax].escaped.match(/https?:\/\//)){aj=Y[ax].escaped;aj=aj.replace(/\?.*?$/,"")}else{if(Q=Y[ax].escaped.match(/\/_media\/(.*)/)){var W=Q[1].split(/\?/);aj=W[0];aj=aj.replace(/\//g,":");if(!aj.match(/^:/)){aj=":"+aj}}else{if(Q=Y[ax].escaped.match(/\/lib\/exe\/fetch.php\/(.*)/)){var W=Q[1].split(/\?/);aj=W[0];if(!aj.match(/^:/)){aj=":"+aj}}else{Q=Y[ax].escaped.match(/^.*?\/userfiles\/image\/(.*)/);if(!Q){var T=doku_base+"data/media/";T=T.replace(/([\/\\])/g,"\\$1");T="^.*?"+T+"(.*)";T=new RegExp(T);Q=Y[ax].escaped.match(T)}if(Q&&Q[1]){aj=Q[1].replace(/\//g,":");aj=":"+aj}else{aj=decodeURIComponent?decodeURIComponent(Y[ax].escaped):unescape(Y[ax].escaped);if(aj.search(/data:image.*?;base64/)>-1){ah=true}}if(aj&&aj.match(/lib\/images\/smileys/)){this.is_smiley=true}}}}}this.attr=aj;if(this.attr&&this.attr.match&&this.attr.match(/%[a-fA-F0-9]{2}/)){this.attr=decodeURIComponent(safe_convert(this.attr));this.attr=decodeURIComponent(safe_convert(this.attr))}}else{if(Y[ax].name=="width"&&!au){P=Y[ax].value}else{if(Y[ax].name=="height"&&!au){R=Y[ax].value}else{if(Y[ax].name=="style"){var V=Y[ax].escaped.match(/width:\s*(\d+)/);if(V){P=V[1];var V=Y[ax].escaped.match(/height:\s*(\d+)/);if(V){R=V[1]}}}else{if(Y[ax].name=="align"||Y[ax].name=="class"){if(Y[ax].escaped.match(/(center|middle)/)){ag="center"}else{if(Y[ax].escaped.match(/right/)){ag="right"}else{if(Y[ax].escaped.match(/left/)){ag="left"}else{ag=""}}}}}}}}}}}if(this.is_smiley){if(ab){r+=ab+" ";ab=""}this.is_smiley=false;return}if(this.link_only){at="img"}if(at=="br"){if(this.in_multi_plugin){r+="\n";return}if(!this.code_type){O=true}else{if(this.code_type){r+="\n";return}}if(this.in_table){r+=d;return}if(this.list_started){r+="_LIST_EOFL_"}else{r+="\\\\  ";return}}else{if(at.match(/^h(\d+|r)/)){var ae=r.length;if(at.match(/h(\d+)/)){this.in_header=true}if(ae){if(r.charCodeAt(ae-1)==32){r=r.replace(/\x20+$/,"")}}}else{if(this.last_col_pipes){if(t[at]){r+=E[at]}at="blank"}else{if(aa){r+=aa;return}}}}if(at=="b"||at=="i"&&this.list_level){if(r.match(/(\/\/|\*)(\x20)+/)){r=r.replace(/(\/\/|\*)(\x20+)\-/,"$1\n$2-")}}if(at=="li"&&this.list_level){if(this.list_level==1&!this.list_started){r+="\n";this.list_started=true}r=r.replace(/[\x20]+$/,"");for(var ap=0;ap<this.list_level;ap++){if(r.match(/_FORMAT_SPACE_\s*$/)){r=r.replace(/_FORMAT_SPACE_\s*$/,"\n")}if(this.list_level>1){r+="  "}}if(this.prev_list_level>0&&E.li==E.ol){this.prev_list_level=-1}}if(at=="a"&&af){this.xcl_markup=true;return}else{if(at=="a"&&(this.export_code||this.code_snippet)){return}else{if(at=="a"&&this.footnote){at="fn_start"}else{if(at=="a"&&Z){c.push(this.id)}else{if(at=="a"&&this.external_mime){if(this.in_endnotes){this.link_class="media";return}if(az&&az=="mediafile"){r+=E.img;r+=this.attr+"|";this.is_mediafile=true}return}else{if(this.in_font){return}}}}}}if(this.in_endnotes&&at=="a"){return}if(this.code_type&&at=="span"){at="blank"}if(this.mfile&&!this.attr){this.attr=this.mfile}r+=E[at];if(at=="td"||at=="th"||(this.last_col_pipes&&this.td_align=="center")){if(this.is_rowspan){r+=E.row_span+" | ";this.is_rowspan=false}if(this.td_align=="center"||this.td_align=="right"){r+="  "}}else{if(at=="a"&&this.attr){this.attr=this.attr.replace(/%7c/,"%257c");r+=this.attr+"|"}else{if(at=="img"){var an=this.image_link_type;this.image_link_type="";if(this.link_only){an="link_only"}if(!an||ah){an="nolink"}else{if(an=="detail"){an=""}}if(an=="link_only"){ar="?linkonly"}else{if(an){ar+=an+"&"}}if(P&&R){ar+=P+"x"+R}else{if(P){ar+=P}else{if(!an){ar=""}}}if(ag&&ag!="left"){r+="  "}this.attr+=ar;if(ag=="center"||ag=="left"){this.attr+="  "}r+=this.attr+"}}";this.attr="src"}else{if(at=="pre"||at=="pre_td"){if(this.downloadable_file){this.attr+=" "+this.downloadable_file}if(!this.attr){this.attr="code"}r+=this.attr+">";this.downloadable_file="";this.downloadable_code=false}}}}}},end:function(af){if(t[af]&&(this.in_font||this.in_header)){r+=" ";if(af=="sup"||af=="sub"||af=="del"||af=="strike"||af=="s"){var ae="temp_c"+af}else{var ae="temp_"+af}r+=E[ae];r+=" ";return}if(this.in_endnotes&&af=="a"){return}if(this.link_only){this.link_only=false;return}if(!E[af]){return}if(af=="sup"&&this.attr=="dwfcknote"){return}if(this.is_smiley){this.is_smiley=false;if(af!="li"){return}}if(af=="span"&&this.in_font&&!ckgedit_xcl_styles){af="font";var Z="<font "+this.font_size+"/"+this.font_family+";;"+this.font_color+";;"+this.font_bgcolor+">";var ac=Z.match(/(inherit)/g);if(ac&&ac.length<3){M=true}var V=r.lastIndexOf("__STYLE__");r=r.splice(V,9,Z);this.font_size="inherit";this.font_family="inherit";this.font_color="inherit";this.font_bgcolor="inherit";this.in_font=false;N=true;r=r.replace(/__STYLE__/g,"")}if(af=="span"&&this.curid){this.curid=false;return}if(af=="dl"&&this.downloadable_code){this.downloadable_code=false;return}if(z&&(af=="td"||af=="th")){this.current_cell.text=r.substring(this.cell_start);this.current_cell.text=this.current_cell.text.replace(/:::/gm,"");this.current_cell.text=this.current_cell.text.replace(/^[\s\|\^]+/,"")}if(af=="a"&&(this.export_code||this.code_snippet)){this.export_code=false;this.code_snippet=false;return}if(this.code_type&&af=="span"){af="blank"}var ab=af;if(this.footnote){af="fn_end";this.footnote=false}else{if(af=="a"&&this.xcl_markup){this.xcl_markup=false;return}else{if(af=="table"){this.in_table=false;if(z){r=r.substring(0,this.table_start);m(this.rows)}}}}if(af=="p"&&this.in_table){af="p_insert";J=true}if(this.geshi){this.geshi=false;return}if(af=="code"&&!this.list_started){if(r.match(/''\s*$/m)){r=r.replace(/''\s*$/,"\n");return}}else{if(af=="a"&&this.attr=="src"){if(this.backup("[[","{")){return}}}if(this.end_nested){this.end_nested=false;return}if(af=="ol"||af=="ul"){this.list_level--;if(!this.list_level){this.format_in_list=false}if(this.prev_li.length){E.li=this.prev_li.pop();this.end_nested=true;return}af="\n\n"}else{if(af=="a"&&this.external_mime){this.external_mime=false;if(this.is_mediafile){af="}} "}else{return}}else{if(af=="pre"){af=o[af];if(this.code_type){af+=this.code_type+">"}else{var Q=r.lastIndexOf("code");var S=r.lastIndexOf("file");if(S>Q){this.code_type="file"}else{this.code_type="code"}af+=this.code_type+">"}this.code_type=false}else{if(o[af]){af=o[af]}else{if(this.attr=="u"&&af=="em"){af="u"}else{if(af=="acronym"){}else{af=E[af]}}}}}}if(ab=="tr"){if(this.last_col_pipes){af="\n";this.last_col_pipes=""}if(this.td_rowspan&&this.rowspan_col==this.td_no+1){this.is_rowspan=false;this.last_column=this.td_no;this.td_rowspan--;af="|"+E.row_span+"|\n"}}else{if(ab=="td"||ab=="th"){this.last_col_pipes="";this.in_td=false}else{if(ab.match(/h\d+/)){this.in_header=false}}}if(E.li){if(r.match(/\n$/)&&!this.list_level){af=""}}if(this.in_link&&t[ab]&&this.link_formats.length){return}if(this.in_endnotes&&ab=="sup"){return}r+=af;if(t[ab]){if(this.list_level){this.format_in_list=true;g=true}r+=E.format_space;H=E.format_space}this.last_tag=ab;if(this.td_colspan&&!z){if(this.td_align=="center"){r+=" "}var R="|";if(ab=="th"){R="^"}var U=R;for(var W=1;W<this.td_colspan;W++){U+=R}this.last_col_pipes=U;r+=U;this.td_colspan=false}else{if(this.td_align=="center"){r+=" ";this.td_align=""}}if(ab=="a"&&this.link_formats.length){var ad=r.substring(this.link_pos);var X=r.substring(0,this.link_pos);var P="";var aa="";for(var W=0;W<this.link_formats.length;W++){var T=E[this.link_formats[W]];var Y=o[this.link_formats[W]]?o[this.link_formats[W]]:T;P+=E[this.link_formats[W]];aa=Y+aa}X+=P;ad+=aa;r=X+ad;this.link_formats=new Array();this.in_link=false}else{if(ab=="a"){this.link_formats=new Array();this.in_link=false}}},chars:function(S){S=S.replace(/\t/g,"    ");if(S.match(/~~START_HTML_BLOCK~~/)){S=S.replace(/~~START_HTML_BLOCK~~\n*/,"~~START_HTML_BLOCK~~\n<code>\n")}if(S.match(/~~CLOSE_HTML_BLOCK~~/)){S=S.replace(/~~CLOSE_HTML_BLOCK~~\n*/gm,"\n</code>\n\n~~CLOSE_HTML_BLOCK~~\n\n")}if(this.interwiki){S=S.replace(String.frasl,"/")}if(this.interwiki&&r.match(/>\w+\s*\|$/)){this.interwiki=false;if(this.attr){r+=S}else{r=r.replace(/>\w+\s*\|$/,">"+S)}return}if(this.in_multi_plugin){S=S.replace("&lt; ","&lt;")}S=S.replace(/&#39;/g,"'");S=S.replace(/^(&gt;)+/,function(U,T){return(U.replace(/(&gt;)/g,"__QUOTE__"))});r=r.replace(/([\/\*_])_FORMAT_SPACE_([\/\*_]{2})_FORMAT_SPACE_$/,"$1$2");if(S.match(/^&\w+;/)){r=r.replace(/_FORMAT_SPACE_\s*$/,"")}if(this.link_only){if(S){replacement="|"+S+"}} ";r=r.replace(/\}\}\s*$/,replacement)}return}if(!this.code_type){if(!this.last_col_pipes){S=S.replace(/\x20{6,}/,"   ");S=S.replace(/^(&nbsp;)+\s*$/,"_FCKG_BLANK_TD_");S=S.replace(/(&nbsp;)+/," ")}if(this.format_tag){if(!this.list_started||this.in_table){S=S.replace(/^\s+/,"@@_SP_@@")}}else{if(this.last_tag=="a"){S=S.replace(/^\s{2,}/," ")}else{if(!this.using_fonts){S=S.replace(/^\s+/,"")}}}if(S.match(/nowiki&gt;/)){I=true}if(this.format_in_list){S=S.replace(/^[\n\s]+$/g,"");if(S.match(/\n{2,}\s{1,}/)){S=S.replace(/\n{2,}/,"\n")}}if(this.in_td&&!S){S="_FCKG_BLANK_TD_";this.in_td=false}}else{S=S.replace(/&lt;\s/g,"<");S=S.replace(/\s&gt;/g,">");var i=S.match(/^\s*geshi:\s+(.*)$/m);if(i){r=r.replace(/<(code|file)>\s*$/,"<$1 "+i[1]+">");S=S.replace(i[0],"")}}if(this.attr&&this.attr=="dwfcknote"){if(S.match(/fckgL\d+/)){return}if(S.match(/^[\-,:;!_]/)){r+=S}else{r+=" "+S}return}if(this.downloadable_code&&(this.export_code||this.code_snippet)){this.downloadable_file=S;return}if(this.last_tag=="a"&&S.match(/^[\.,;\:\!]/)){r=r.replace(/\s$/,"")}if(this.in_header){S=S.replace(/---/g,"&mdash;");S=S.replace(/--/g,"&ndash;")}if(this.list_started){r=r.replace(/_LIST_EOFL_\s*L_BR_K\s*$/,"_LIST_EOFL_")}if(!this.code_type){if(!r.match(/\[\[\\\\.*?\|$/)&&!S.match(/\w:(\\(\w?))+/)){if(!S.match(/\\\\[\w\.\-\_]+\\[\w\.\-\_]+/)){S=S.replace(/([\\])/g,"%%$1%%")}S=S.replace(/([\*])/g,"_CKG_ASTERISK_")}}if(this.in_endnotes&&c.length){if(S.match(/\w/)&&!S.match(/^\s*\d\)\s*$/)){S=S.replace(/\)\s*$/,"_FN_PAREN_C_");var P=c.length-1;if(this.bottom_url){if(this.link_class&&this.link_class=="media"){S="{{"+this.bottom_url+"|"+S+"}}"}else{S="[["+this.bottom_url+"|"+S+"]]"}}if(x[c[P]]){S=S.replace("(","L_PARgr");S=S.replace(")","R_PARgr");x[c[P]]+=" "+S}else{S=S.replace("(","L_PARgr");S=S.replace(")","R_PARgr");x[c[P]]=S}}this.bottom_url=false;return}if(S&&S.length){r+=S}r=r.replace(/(&\w+;)\s*([\*\/_]{2})_FORMAT_SPACE_(\w+)/,"$1$2$3");if(this.list_level&&this.list_level>1){r=r.replace(/(\[\[.*?\]\])([ ]+[\*\-].*)$/," $1\n$2")}try{var R=new RegExp("([*/_]{2,})_FORMAT_SPACE_([*/_]{2,})("+RegExp.escape(S)+")$");if(r.match(R)){r=r.replace(R,"$1$2$3")}}catch(Q){}if(!e){if(S.match(/&lt;/)){e=true}}},comment:function(i){},dbg:function(P,i){if(P.replace){P=P.replace(/^\s+/g,"");P=P.replace(/^\n$/g,"");P=P.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");if(!P){return}}if(i){i="<b>"+i+"</b>\n"}HTMLParser_DEBUG+=i+P+"\n__________\n"}});r=r.replace(/(\[\[\\\\)(.*?)\]\]/gm,function(i,Q,P){P=P.replace(/\\/g,"_SMB_");return Q+P+"]]"});r=r.replace(/%%\\%%/g,"_ESC_BKSLASH_");r=r.replace(/%*\\%*([^\w]{1})%*\\%*/g,"$1");r=r.replace(/_SMB_/g,"\\");r=r.replace(/(\s*={2,})\s*CKGE_TMP_(\w+)(.*?)\s*CKGE_TMP_c?\2/gm,function(P,i){P=P.replace(/CKGE_TMP_\w+/gm,"");var Q=jQuery("#formatdel").val();if(!Q){jQuery("#dw__editform").append('<input type="hidden" id="formatdel" name="formatdel" value="del" />')}return P});r=r.replace(/(CKGE_TMP_\w+)/gm,function(P,i){if(l[i]){return l[i]}return P});if(B=="test"){if(!HTMLParser_test_result(r)){return}}r=r.replace(/\{ \{ rss&gt;Feed:/mg,"{{rss&gt;http://");r=r.replace(/~ ~ (NOCACHE|NOTOC)~ ~/mg,"~~$1~~");if(q){var u=function(i,P){tag_1=i.replace(/oIWIKIo(.*)cIWIKIc/,"$1");if(tag_1==P){return true}P=P.replace(/\s/,"%20");return(P==tag_1)};r=r.replace(/\[\[(\w+\.?\w{0,12})>(.*?)\|(.*?)\]\]/gm,function(P,R,Q,i){if(Q=="oIWIKIocIWIKIc"){Q=i}if((Q=="oIWIKIo"+i.replace(/\s/,"%20")+"cIWIKIc")||(Q==i)||u(Q,i)){i=""}else{i="|"+i}return("[["+R+">"+Q+i+"]]")})}r=r.replace(/>.*?oIWIKIo(.*?)cIWIKIc/mg,">$1");if(H){if(h){r=r.replace(/\s*([\|\^]+)((\W\W_FORMAT_SPACE_)+)/gm,function(i,P,Q){Q=Q.replace(/_FORMAT_SPACE_/g,"");return(Q+P)})}r=r.replace(/&quot;/g,'"');var j=new RegExp(H+"([\\-]{2,})","g");r=r.replace(j," $1");var j=new RegExp("(&amp;|\\W|\\w|\\d)(\\*\\*|\\/\\/|\\'\\'|__|</del>)+"+H+"(\\w|\\d)","g");r=r.replace(j,"$1$2$3");var j=new RegExp(H+"@@_SP_@@","g");r=r.replace(j," ");r=r.replace(/([\*\/_]{2})@@_SP_@@(&\w+;)/g,"$1 $2");r=r.replace(/\n@@_SP_@@\n/g,"");r=r.replace(/@@_SP_@@\n/g,"");r=r.replace(/@@_SP_@@/g," ");var j=new RegExp(H+"([^\\)\\]\\}\\{\\-\\.,;:\\!?\"\x94\x92\u201D\u2019'])","g");r=r.replace(j," $1");j=new RegExp(H,"g");r=r.replace(j,"");if(g){r=r.replace(/(\s+[\-\*_]\s*)([\*\/_\']{2})(.*?)(\2)([^\n]*)\n+/gm,function(Q,i,S,T,P,R){return(i+S+T+P+R+"\n")})}}var p="\\\\";if(O){r=r.replace(/(L_BR_K)+/g,p);r=r.replace(/L_BR_K/gm,p);r=r.replace(/(\\\\)\s+/gm,"$1 \n")}if(s){r=r.replace(/\s+<\/(code|file)>/g,"\n</$1>");if(b){r=r.replace(/\s+;/mg,";");r=r.replace(/&lt;\s+/mg,"<");r=r.replace(/\s+&gt;/mg,">")}}if(J){r+="\n"+p+"\n";var j=new RegExp(d,"g");r=r.replace(j," "+p+" ");r=r.replace(/(\||\^)[ ]+(\||\^)\s$/g,"$1\n");r=r.replace(/(\||\^)[ ]+(\||\^)/g,"$1")}r=r.replace(/_FCKG_BLANK_TD_/g," ");if(e){r=r.replace(/\/\/&lt;\/\/\s*/g,"&lt;")}if(N){var j=/\>\s+(\*\*|__|\/\/|'')\s+_\s+\1\s+<\/font>/gm;r=r.replace(j,function(i){i=i.replace(/\s+/g,"");return i});if(M){r=r.replace(/<\/font>\s{1}/gm,"</font>")}r=r.replace(/(<font[^\>]+>)([^<]+\]\])[^\>]+\/font>/gm,function(Q,P,i){i=i.replace(/\n/gm,"");i=i.replace(/\s/gm,"");var R=prompt(LANG.plugins.ckgedit.font_err_1+"\n [["+i+"\n"+LANG.plugins.ckgedit.font_err_2);if(R==null){throw new Error(LANG.plugins.ckgedit.font_err_throw)}if(R){return R}return"[["+i});r=r.replace(/\[\[(.*?)\|(<font[^\>]+>)(.*?)(<\/font>)\s*(\]\])\s*/gm,function(R,P,i,S){R="[["+P+"|"+S+"]]";var Q=jQuery("#fontdel").val();if(!Q){jQuery("#dw__editform").append('<input type="hidden" id="fontdel" name="fontdel" value="del" />')}return R})}if(c.length){r=r.replace(/<sup>\(\(\){2,}\s*<\/sup>/g,"");r=r.replace(/\(\(+(\d+)\)\)+/,"(($1))");for(var K in x){var a=K.match(/_(\d+)/);var k=new RegExp("(<sup>)*[(]+"+a[1]+"[)]+(</sup>)*");x[K]=x[K].replace(/(\d+)_FN_PAREN_C_/,"");r=r.replace(k,"(("+x[K].replace(/_FN_PAREN_C_/g,") ")+"))")}r=r.replace(/<sup><\/sup>/g,"");r=r.replace(/((<sup>\(\(\d+\)\)\)?<\/sup>))/mg,function(i){if(!i.match(/p>\(\(\d+/)){return""}return i})}r=r.replace(/(={3,}.*?)(\{\{.*?\}\})(.*?={3,})/g,"$1$3\n\n$2");r=r.replace(/(<sup>)*\s*\[\[\s*\]\]\s*(<\/sup>)*\n*/g,"");r=r.replace(/<sup>\s*\(\(\d+\)\)\s*<\/sup>/mg,"");if(L){r=r.replace(/<\s+/g,"<");r=r.replace(/&lt;\s+/g,"<")}if(I){var w="%";var j=new RegExp("(["+w+"])","g");r=r.replace(/(&lt;nowiki&gt;)(.*?)(&lt;\/nowiki&gt;)/mg,function(P,R,i,Q){i=i.replace(/%%(.)%%/mg,"NOWIKI_$1_");return R+i.replace(j,"NOWIKI_$1_")+Q})}r=r.replace(/__SWF__(\s*)\[*/g,"{{$1");r=r.replace(/\|.*?\]*(\s*)__FWS__/g,"$1}}");r=r.replace(/(\s*)__FWS__/g,"$1}}");r=r.replace(/\n{3,}/g,"\n\n");r=r.replace(/_LIST_EOFL_/gm," "+p+" ");if(z){if(r.indexOf("~~COMPLEX_TABLES~~")==-1){r+="~~COMPLEX_TABLES~~\n"}}else{r=r.replace(/~~COMPLEX_TABLES~~/gm,"")}r=r.replace(/_CKG_ASTERISK_/gm,"*");r=r.replace(/_ESC_BKSLASH_/g,"\\");if(B=="test"){if(HTMLParser_test_result(r)){alert(r)}return}var C=GetE("dw__editform");C.elements.fck_wikitext.value=r;if(B=="bakup"){return}if(B){var f=GetE(B);f.click();return true}}jQuery(document).ready(function(){jQuery("#ebut_test").mousedown(function(){parse_wikitext("test")});jQuery("#ebtn__delete").click(function(){return confirm(JSINFO.confirm_delete)});jQuery("#ebtn__delete").mouseup(function(){draft_delete()});jQuery("#ebtn__dwedit").click(function(){setDWEditCookie(2,this);parse_wikitext("edbtn__save");this.form.submit()});jQuery("#ckgedit_draft_btn").click(function(){ckgedit_get_draft()});jQuery("#backup_button").click(function(){renewLock(true)});jQuery("#revert_to_prev_btn").click(function(){revert_to_prev()});jQuery("#no_styling_btn").click(function(){this.form.styling.value="no_styles";this.form.prefix.value="";this.form.suffix.value="";this.form.rev.value=""});jQuery("#ebut_cancel").mouseup(function(){draft_delete()});jQuery("#save_button").mousedown(function(){if(!window.dwfckTextChanged&&!JSINFO.cg_rev){ckgedit_dwedit_reject=true;parse_wikitext("ebut_cancel")}else{parse_wikitext("edbtn__save")}})});