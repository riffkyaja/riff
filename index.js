const _0x1c6dff=_0x111d;(function(_0x169040,_0x369393){const _0x52afbb=_0x111d,_0x142b4b=_0x169040();while(!![]){try{const _0x425036=parseInt(_0x52afbb(0x1c1))/0x1*(-parseInt(_0x52afbb(0x1f1))/0x2)+parseInt(_0x52afbb(0x1ca))/0x3*(parseInt(_0x52afbb(0x1c3))/0x4)+-parseInt(_0x52afbb(0x26c))/0x5*(parseInt(_0x52afbb(0x213))/0x6)+-parseInt(_0x52afbb(0x25b))/0x7*(parseInt(_0x52afbb(0x280))/0x8)+parseInt(_0x52afbb(0x1e6))/0x9*(parseInt(_0x52afbb(0x1e1))/0xa)+-parseInt(_0x52afbb(0x24b))/0xb*(-parseInt(_0x52afbb(0x1d6))/0xc)+-parseInt(_0x52afbb(0x1d9))/0xd*(-parseInt(_0x52afbb(0x25e))/0xe);if(_0x425036===_0x369393)break;else _0x142b4b['push'](_0x142b4b['shift']());}catch(_0x2d5470){_0x142b4b['push'](_0x142b4b['shift']());}}}(_0xfa54,0xedfc6),require('./config'));const {default:kurrConnect,useSingleFileAuthState,DisconnectReason,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0x1c6dff(0x223)),{state,saveState}=useSingleFileAuthState('./'+sessionName+_0x1c6dff(0x277)),pino=require(_0x1c6dff(0x1dd)),fs=require('fs'),chalk=require(_0x1c6dff(0x245)),moment=require(_0x1c6dff(0x24e)),path=require(_0x1c6dff(0x23e)),FileType=require(_0x1c6dff(0x20c)),{color}=require(_0x1c6dff(0x241)),PhoneNumber=require(_0x1c6dff(0x1f4)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid,writeExif}=require('./lib/exif'),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,sleep}=require(_0x1c6dff(0x219));global['api']=(_0x5a076f,_0x2e4730='/',_0x582e89={},_0xda41c5)=>(_0x5a076f in global[_0x1c6dff(0x209)]?global[_0x1c6dff(0x209)][_0x5a076f]:_0x5a076f)+_0x2e4730+(_0x582e89||_0xda41c5?'?'+new URLSearchParams(Object[_0x1c6dff(0x25f)]({..._0x582e89,..._0xda41c5?{[_0xda41c5]:global['APIKeys'][_0x5a076f in global[_0x1c6dff(0x209)]?global[_0x1c6dff(0x209)][_0x5a076f]:_0x5a076f]}:{}})):'');const store=makeInMemoryStore({'logger':pino()[_0x1c6dff(0x248)]({'level':'silent','stream':_0x1c6dff(0x267)})}),time=moment['tz'](_0x1c6dff(0x21e))[_0x1c6dff(0x1b5)](_0x1c6dff(0x1c0)),wita=moment['tz']('Asia/Makassar')['format'](_0x1c6dff(0x1c0)),wit=moment['tz'](_0x1c6dff(0x238))['format']('HH:mm:ss');var date=new Date(),tahun=date[_0x1c6dff(0x264)](),bulan1=date[_0x1c6dff(0x1b1)](),tanggal=date[_0x1c6dff(0x1df)](),hari=date['getDay'](),jams=date[_0x1c6dff(0x1b4)](),menit=date[_0x1c6dff(0x233)](),detik=date[_0x1c6dff(0x21c)](),waktoo=date[_0x1c6dff(0x1b4)]();function _0x111d(_0x57d82b,_0x15a6f9){const _0xfa54d0=_0xfa54();return _0x111d=function(_0x111dd0,_0x345173){_0x111dd0=_0x111dd0-0x1af;let _0x295ea6=_0xfa54d0[_0x111dd0];return _0x295ea6;},_0x111d(_0x57d82b,_0x15a6f9);}switch(hari){case 0x0:hari=_0x1c6dff(0x1e0);break;case 0x1:hari=_0x1c6dff(0x1eb);break;case 0x2:hari=_0x1c6dff(0x1e2);break;case 0x3:hari=_0x1c6dff(0x25a);break;case 0x4:hari='Kamis';break;case 0x5:hari=_0x1c6dff(0x203);break;case 0x6:hari='Sabtu';break;}switch(bulan1){case 0x0:bulan1=_0x1c6dff(0x1e7);break;case 0x1:bulan1=_0x1c6dff(0x1d8);break;case 0x2:bulan1=_0x1c6dff(0x1cc);break;case 0x3:bulan1=_0x1c6dff(0x23d);break;case 0x4:bulan1=_0x1c6dff(0x20b);break;case 0x5:bulan1=_0x1c6dff(0x26b);break;case 0x6:bulan1='Juli';break;case 0x7:bulan1=_0x1c6dff(0x228);break;case 0x8:bulan1='September';break;case 0x9:bulan1=_0x1c6dff(0x24f);break;case 0xa:bulan1='November';break;case 0xb:bulan1=_0x1c6dff(0x23f);break;}switch(jams){case 0x0:pada=_0x1c6dff(0x206);break;case 0x1:pada=_0x1c6dff(0x206);break;case 0x2:pada=_0x1c6dff(0x206);break;case 0x3:pada=_0x1c6dff(0x1d1);break;case 0x4:pada=_0x1c6dff(0x1d1);break;case 0x5:pada=_0x1c6dff(0x1d1);break;case 0x6:pada=_0x1c6dff(0x1d1);break;case 0x7:pada=_0x1c6dff(0x1d1);break;case 0x8:pada=_0x1c6dff(0x1d1);break;case 0x9:pada=_0x1c6dff(0x1d1);break;case 0xa:pada=_0x1c6dff(0x1d1);break;case 0xb:pada=_0x1c6dff(0x226);break;case 0xc:pada='Siang';break;case 0xd:pada=_0x1c6dff(0x226);break;case 0xe:pada=_0x1c6dff(0x226);break;case 0xf:pada='Sore';break;case 0x10:pada=_0x1c6dff(0x1b6);break;case 0x11:pada=_0x1c6dff(0x1b6);break;case 0x12:pada=_0x1c6dff(0x206);break;case 0x13:pada=_0x1c6dff(0x206);break;case 0x14:pada='Malem';break;case 0x15:pada='Malem';break;case 0x16:pada=_0x1c6dff(0x206);break;case 0x17:pada=_0x1c6dff(0x206);break;}var tampilHari=''+hari+',\x20'+tanggal+'\x20'+bulan1+'\x20'+tahun,tampilJam=''+'Jams\x20:\x20'+jams+':'+menit+':'+detik+_0x1c6dff(0x276);tampilTanggal=hari+'\x20'+tanggal+'\x20'+bulan1+'\x20'+tahun,tampilWaktu=jams+':'+menit+':'+detik;var ase=new Date(),waktoonyabro=ase[_0x1c6dff(0x1b4)]();switch(waktoonyabro){case 0x0:waktoonyabro=_0x1c6dff(0x227);break;case 0x1:waktoonyabro=_0x1c6dff(0x227);break;case 0x2:waktoonyabro=_0x1c6dff(0x227);break;case 0x3:waktoonyabro=_0x1c6dff(0x1db);break;case 0x4:waktoonyabro='Selamat\x20Pagi\x20Owner..✨';break;case 0x5:waktoonyabro='Selamat\x20Pagi\x20Owner..✨';break;case 0x6:waktoonyabro=_0x1c6dff(0x1db);break;case 0x7:waktoonyabro=_0x1c6dff(0x1db);break;case 0x8:waktoonyabro=_0x1c6dff(0x1db);break;case 0x9:waktoonyabro=_0x1c6dff(0x1db);break;case 0xa:waktoonyabro=_0x1c6dff(0x1db);break;case 0xb:waktoonyabro=_0x1c6dff(0x271);break;case 0xc:waktoonyabro=_0x1c6dff(0x271);break;case 0xd:waktoonyabro=_0x1c6dff(0x271);break;case 0xe:waktoonyabro=_0x1c6dff(0x271);break;case 0xf:waktoonyabro=_0x1c6dff(0x22b);break;case 0x10:waktoonyabro=_0x1c6dff(0x22b);break;case 0x11:waktoonyabro=_0x1c6dff(0x22b);break;case 0x12:waktoonyabro='Selamat\x20Malam\x20Owner..🌃';break;case 0x13:waktoonyabro=_0x1c6dff(0x227);break;case 0x14:waktoonyabro=_0x1c6dff(0x227);break;case 0x15:waktoonyabro=_0x1c6dff(0x227);break;case 0x16:waktoonyabro='Selamat\x20Malam\x20Owner..🌃';break;case 0x17:waktoonyabro=_0x1c6dff(0x227);break;}function _0xfa54(){const _0x2a12c3=['Februari','440843FNisoK','remoteJid','Selamat\x20Pagi\x20Owner..✨','./lib/exif','pino','resolve','getDate','Minggu','20MbPByy','Selasa','sendMessage','KurrXd\x20BASE\x20MD','author','3508767UdQyOA','Januari','\x0a>\x20WIBb\x20','application/octet-stream','sendMediaAsSticker','Senin','msg','>\x20HARI\x20','user','profilePictureUrl','call-creator','43426oYtXeY','clear','messages','awesome-phonenumber','readFileSync','data','subject','getFile','document','>\x20WITA\x20','withoutContact','mediumseagreen','&picurl=','watchFile','waUploadToServer','./kurr','sendFile','silver','Jum`at','getName','contextInfo','Malem','\x0aitem1.X-ABLabel:Ponsel\x0aitem2.EMAIL;type=INTERNET:kurr995@gmail.com\x0aitem2.X-ABLabel:Email\x0aitem3.URL:https://saweria.co/KurrXd\x0aitem3.X-ABLabel:Instagram\x0aitem4.ADR:;;Indonesia;;;;\x0aitem4.X-ABLabel:Region\x0aEND:VCARD','action','APIs','mimetype','Mei','file-type','sendText','length','Sistem\x20otomatis\x20block!\x0aJangan\x20menelpon\x20bot!\x0aSilahkan\x20Hubungi\x20Owner\x20Untuk\x20Dibuka\x20!','notify','keys','chat','4804806UytaDi','key','\x20DI\x20','quoted','>\x20WIT\x20','@g.us','./lib/myfunc','group-participants.update','close','getSeconds','error','Asia/Jakarta','\x0aitem1.TEL;waid=','imageMessage','redBright','sendAudio','@adiwajshing/baileys','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','Koneksi\x20Terputus...','Siang','Selamat\x20Malam\x20Owner..🌃','Agustus','image','mime','Selamat\x20Sore\x20Owner..🌇','existsSync','name','SELAMAT\x20DATANG\x20@','\x20TELAH\x20KELUAR\x20DARI\x20','downloadMediaMessage','offer','conversation','getMinutes','contacts','image/webp','viewOnceMessage','mtype','Asia/Jayapura','ignore','remove','join','Koneksi\x20Terhubung...','April','path','Desember','WebMessageInfo','./lib/color','currentVersion','categories','concat','chalk','server','participants','child','owner','matchAll','88363QwGfhK','groupMetadata','cache','moment-timezone','Oktober','promises','connection.update','split','getNumber','sendTextWithMentions','messages.upsert','from','replace','status','&gcname=','Rabu','28PaXUIF','statusCode','includes','294hGIzWg','entries','json','push','sendVideo','.bin','getFullYear','pemilik','type','store','parse','sendContact','string','Juni','10BjVApr','bind','@s.whatsapp.net','output','https://janbot-api.herokuapp.com/api/welcome?name=ojansenpai&mem=','Selamat\x20Siang\x20Owner..🔥','WhatsApp','public','../src/','writeFile','\x20Wib','.json','test','copyNForward','loggedOut','ext','log','text','add','block','2007032rlPLvZ','fromMe','&bgurl=https://i.ibb.co/w0R68Sd/wp-kurr.jpg','writeFileSync','BAE5','serializeM','international','red','getMonth','Message','@broadcast','getHours','format','Sore','message','endsWith','participant','alloc','sendImage','audio/ogg;\x20codecs=opus','sendVideoAsSticker','decodeJid','asDocument','HH:mm:ss','47tbcyOh','toString','76584eYaaGU','isBuffer','packname','sticker','updateBlockStatus','asSticker','content','258JcqgfX','send5ButImg','Maret','yellow','base64','caption','silent','Pagi','ephemeralMessage','fromBuffer','0@s.whatsapp.net','map','2184OjIKsu','startsWith'];_0xfa54=function(){return _0x2a12c3;};return _0xfa54();}var tampilUcapan=''+waktoonyabro;const getVersionWaweb=()=>{const _0xc7338=_0x1c6dff;let _0x73d4bb;try{let _0x57dbaa=fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web');_0x73d4bb=[_0x57dbaa[_0xc7338(0x242)][_0xc7338(0x257)](/[.]/g,',\x20')];}catch{_0x73d4bb=[0x2,0x89c,0xd];}return _0x73d4bb;};async function startkurr(){const _0x5b69b4=_0x1c6dff;console[_0x5b69b4(0x1f2)](),console['log'](color('\x1b[1;37m>\x20'+tampilUcapan+'\x0a',_0x5b69b4(0x1b0))),console[_0x5b69b4(0x27c)](color(_0x5b69b4(0x1e4),_0x5b69b4(0x1cd))),console[_0x5b69b4(0x27c)](color(_0x5b69b4(0x1e8),'silver'),color(''+time,_0x5b69b4(0x1fc))),console[_0x5b69b4(0x27c)](color(_0x5b69b4(0x1fa),_0x5b69b4(0x202)),color(''+wita,_0x5b69b4(0x1fc))),console[_0x5b69b4(0x27c)](color(_0x5b69b4(0x217),'silver'),color(''+wit,_0x5b69b4(0x1fc))),console[_0x5b69b4(0x27c)](color(_0x5b69b4(0x1ed),_0x5b69b4(0x202)),color(tampilHari+'\x0a',_0x5b69b4(0x1fc)));const _0x1dbd59=kurrConnect({'logger':pino({'level':_0x5b69b4(0x1d0)}),'printQRInTerminal':!![],'browser':['TRASH\x20-\x20Multi\x20Device','Safari','1.0.0'],'auth':state,'version':getVersionWaweb()||[0x2,0x89c,0xd]});return store[_0x5b69b4(0x26d)](_0x1dbd59['ev']),_0x1dbd59['ev']['on'](_0x5b69b4(0x255),async _0x1eeb5b=>{const _0x3fd7a3=_0x5b69b4;try{mek=_0x1eeb5b[_0x3fd7a3(0x1f3)][0x0];if(!mek[_0x3fd7a3(0x1b7)])return;mek[_0x3fd7a3(0x1b7)]=Object[_0x3fd7a3(0x211)](mek[_0x3fd7a3(0x1b7)])[0x0]===_0x3fd7a3(0x1d2)?mek['message'][_0x3fd7a3(0x1d2)]['message']:mek[_0x3fd7a3(0x1b7)];if(mek['key']&&mek[_0x3fd7a3(0x214)]['remoteJid']==='status@broadcast')return;if(!_0x1dbd59[_0x3fd7a3(0x273)]&&!mek[_0x3fd7a3(0x214)][_0x3fd7a3(0x281)]&&_0x1eeb5b[_0x3fd7a3(0x266)]===_0x3fd7a3(0x210))return;if(mek[_0x3fd7a3(0x214)]['id'][_0x3fd7a3(0x1d7)](_0x3fd7a3(0x284))&&mek[_0x3fd7a3(0x214)]['id'][_0x3fd7a3(0x20e)]===0x10)return;m=smsg(_0x1dbd59,mek,store),require(_0x3fd7a3(0x200))(_0x1dbd59,m,_0x1eeb5b,store);}catch(_0x34dde8){console[_0x3fd7a3(0x27c)](_0x34dde8);}}),_0x1dbd59['ev']['on'](_0x5b69b4(0x21a),async _0x4a0375=>{const _0x65b617=_0x5b69b4;console['log'](_0x4a0375);try{let _0x350130=await _0x1dbd59[_0x65b617(0x24c)](_0x4a0375['id']),_0x5b402d=_0x4a0375[_0x65b617(0x247)],_0x493f59=_0x5b402d[_0x65b617(0x20e)];for(let _0x3c0a54 of _0x5b402d){try{ppuser=await _0x1dbd59['profilePictureUrl'](_0x3c0a54,_0x65b617(0x229));}catch{ppuser=_0x65b617(0x224);}try{ppgroup=await _0x1dbd59[_0x65b617(0x1ef)](_0x4a0375['id'],_0x65b617(0x229));}catch{ppgroup=_0x65b617(0x224);}if(_0x4a0375[_0x65b617(0x208)]==_0x65b617(0x27e))kurrxdn=_0x65b617(0x270)+_0x493f59+_0x65b617(0x259)+_0x350130['subject']+_0x65b617(0x1fd)+ppuser+_0x65b617(0x282),nt='*',text_in='\x0a'+nt+_0x65b617(0x22e)+_0x3c0a54[_0x65b617(0x252)]('@')[0x0]+_0x65b617(0x215)+_0x350130['subject']+nt+'\x0a',_0x1dbd59[_0x65b617(0x1e3)](_0x4a0375['id'],{'image':{'url':ppuser},'contextInfo':{'mentionedJid':[_0x3c0a54]},'caption':''+text_in});else _0x4a0375['action']==_0x65b617(0x23a)&&(text_out='\x0a'+nt+'@'+_0x3c0a54[_0x65b617(0x252)]('@')[0x0]+_0x65b617(0x22f)+_0x350130['subject']+nt+'\x0a',_0x1dbd59[_0x65b617(0x1e3)](_0x4a0375['id'],{'image':{'url':ppuser},'contextInfo':{'mentionedJid':[_0x3c0a54]},'caption':''+text_out}));}}catch(_0xa8f4e3){console[_0x65b617(0x27c)](_0xa8f4e3);}}),_0x1dbd59[_0x5b69b4(0x1be)]=_0x53ff67=>{const _0x1b20ae=_0x5b69b4;if(!_0x53ff67)return _0x53ff67;if(/:\d+@/gi[_0x1b20ae(0x278)](_0x53ff67)){let _0x5a3826=jidDecode(_0x53ff67)||{};return _0x5a3826['user']&&_0x5a3826[_0x1b20ae(0x246)]&&_0x5a3826[_0x1b20ae(0x1ee)]+'@'+_0x5a3826[_0x1b20ae(0x246)]||_0x53ff67;}else return _0x53ff67;},_0x1dbd59['ev']['on']('contacts.update',_0x5f1438=>{const _0x3d3f18=_0x5b69b4;for(let _0x354c07 of _0x5f1438){let _0x168f04=_0x1dbd59[_0x3d3f18(0x1be)](_0x354c07['id']);if(store&&store[_0x3d3f18(0x234)])store[_0x3d3f18(0x234)][_0x168f04]={'id':_0x168f04,'name':_0x354c07[_0x3d3f18(0x210)]};}}),_0x1dbd59[_0x5b69b4(0x204)]=(_0x11cd78,_0x352e55=![])=>{const _0x45f6ad=_0x5b69b4;id=_0x1dbd59[_0x45f6ad(0x1be)](_0x11cd78),_0x352e55=_0x1dbd59[_0x45f6ad(0x1fb)]||_0x352e55;let _0x426807;if(id[_0x45f6ad(0x1b8)](_0x45f6ad(0x218)))return new Promise(async _0x2ebeaa=>{const _0x1c4a43=_0x45f6ad;_0x426807=store['contacts'][id]||{};if(!(_0x426807[_0x1c4a43(0x22d)]||_0x426807[_0x1c4a43(0x1f7)]))_0x426807=_0x1dbd59[_0x1c4a43(0x24c)](id)||{};_0x2ebeaa(_0x426807[_0x1c4a43(0x22d)]||_0x426807[_0x1c4a43(0x1f7)]||PhoneNumber('+'+id['replace'](_0x1c4a43(0x26e),''))['getNumber'](_0x1c4a43(0x1af)));});else _0x426807=id===_0x45f6ad(0x1d4)?{'id':id,'name':_0x45f6ad(0x272)}:id===_0x1dbd59[_0x45f6ad(0x1be)](_0x1dbd59[_0x45f6ad(0x1ee)]['id'])?_0x1dbd59['user']:store[_0x45f6ad(0x234)][id]||{};return(_0x352e55?'':_0x426807['name'])||_0x426807[_0x45f6ad(0x1f7)]||_0x426807['verifiedName']||PhoneNumber('+'+_0x11cd78[_0x45f6ad(0x257)]('@s.whatsapp.net',''))[_0x45f6ad(0x253)](_0x45f6ad(0x1af));},_0x1dbd59['sendContact']=async(_0x3d5d1f,_0xf06285,_0x2dbdca='',_0x4f7978={})=>{const _0x81eff0=_0x5b69b4;let _0x43650d=[];for(let _0xb24a0 of _0xf06285){_0x43650d[_0x81eff0(0x261)]({'displayName':await _0x1dbd59[_0x81eff0(0x204)](_0xb24a0+'@s.whatsapp.net'),'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:'+await _0x1dbd59[_0x81eff0(0x204)](_0xb24a0+'@s.whatsapp.net')+'\x0aFN:'+await _0x1dbd59[_0x81eff0(0x204)](_0xb24a0+'@s.whatsapp.net')+_0x81eff0(0x21f)+_0xb24a0+':'+_0xb24a0+_0x81eff0(0x207)});}_0x1dbd59[_0x81eff0(0x1e3)](_0x3d5d1f,{'contacts':{'displayName':_0x43650d[_0x81eff0(0x20e)]+'\x20Kontak','contacts':_0x43650d},..._0x4f7978},{'quoted':_0x2dbdca});},_0x1dbd59[_0x5b69b4(0x273)]=!![],_0x1dbd59[_0x5b69b4(0x285)]=_0x523b1e=>smsg(_0x1dbd59,_0x523b1e,store),_0x1dbd59['ev']['on'](_0x5b69b4(0x251),async _0x5991fc=>{const _0x4b2375=_0x5b69b4,{connection:_0x4b8ffd,lastDisconnect:_0x233158}=_0x5991fc;_0x4b8ffd===_0x4b2375(0x21b)&&(_0x233158[_0x4b2375(0x21d)]?.[_0x4b2375(0x26f)]?.[_0x4b2375(0x25c)]!==DisconnectReason[_0x4b2375(0x27a)]?startkurr():console[_0x4b2375(0x27c)](_0x4b2375(0x225))),console['log'](_0x4b2375(0x23c),_0x5991fc);}),_0x1dbd59['ws']['on']('CB:call',async _0x432bdf=>{const _0x26bb6f=_0x5b69b4,_0x345710=_0x432bdf[_0x26bb6f(0x1c9)][0x0]['attrs'][_0x26bb6f(0x1f0)];if(_0x432bdf['content'][0x0]['tag']==_0x26bb6f(0x231)){let _0x2f2cb9=await _0x1dbd59[_0x26bb6f(0x269)](_0x345710,global[_0x26bb6f(0x249)]);_0x1dbd59[_0x26bb6f(0x1e3)](_0x345710,{'text':_0x26bb6f(0x20f)},{'quoted':_0x2f2cb9}),_0x1dbd59['sendMessage'](''+global[_0x26bb6f(0x265)],{'text':'Lapor\x20Bot:\x20Ada\x20Yang\x20Menelpon\x20Bot'}),await sleep(0x1f40),await _0x1dbd59[_0x26bb6f(0x1c7)](_0x345710,_0x26bb6f(0x27f));}}),_0x1dbd59['ev']['on']('creds.update',saveState),_0x1dbd59[_0x5b69b4(0x1cb)]=async(_0x25f6bc,_0x455162='',_0x4540eb='',_0x4e1a96,_0x5cafd5=[],_0x4559db={})=>{const _0x29ffe6=_0x5b69b4;let _0x1a3d01=await prepareWAMessageMedia({'image':_0x4e1a96},{'upload':_0x1dbd59[_0x29ffe6(0x1ff)]});var _0x22348f=generateWAMessageFromContent(m[_0x29ffe6(0x212)],proto[_0x29ffe6(0x1b2)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':_0x1a3d01[_0x29ffe6(0x220)],'hydratedContentText':_0x455162,'hydratedFooterText':_0x4540eb,'hydratedButtons':_0x5cafd5}}}),_0x4559db);_0x1dbd59['relayMessage'](_0x25f6bc,_0x22348f[_0x29ffe6(0x1b7)],{'messageId':_0x22348f[_0x29ffe6(0x214)]['id']});},_0x1dbd59['sendButtonText']=(_0x30bc84,_0x262d6b=[],_0x498756,_0x4fae2f,_0x48fb8d='',_0x2179da={})=>{const _0x17162e=_0x5b69b4;let _0x101acf={'text':_0x498756,'footer':_0x4fae2f,'buttons':_0x262d6b,'headerType':0x2,..._0x2179da};_0x1dbd59[_0x17162e(0x1e3)](_0x30bc84,_0x101acf,{'quoted':_0x48fb8d,..._0x2179da});},_0x1dbd59[_0x5b69b4(0x20d)]=(_0x52adac,_0x838e6f,_0x57a369='',_0x3fd72c)=>_0x1dbd59[_0x5b69b4(0x1e3)](_0x52adac,{'text':_0x838e6f,..._0x3fd72c},{'quoted':_0x57a369}),_0x1dbd59[_0x5b69b4(0x1bb)]=async(_0x36a9f3,_0x112891,_0x392e2c='',_0x3740e6='',_0x4e3ab3)=>{const _0x41aff1=_0x5b69b4;let _0x136d5b=Buffer[_0x41aff1(0x1c4)](_0x112891)?_0x112891:/^data:.*?\/.*?;base64,/i[_0x41aff1(0x278)](_0x112891)?Buffer[_0x41aff1(0x256)](_0x112891['split']`,`[0x1],_0x41aff1(0x1ce)):/^https?:\/\//['test'](_0x112891)?await await getBuffer(_0x112891):fs[_0x41aff1(0x22c)](_0x112891)?fs[_0x41aff1(0x1f5)](_0x112891):Buffer[_0x41aff1(0x1ba)](0x0);return await _0x1dbd59[_0x41aff1(0x1e3)](_0x36a9f3,{'image':_0x136d5b,'caption':_0x392e2c,..._0x4e3ab3},{'quoted':_0x3740e6});},_0x1dbd59[_0x5b69b4(0x262)]=async(_0x32af53,_0x5a06ad,_0x95884b='',_0x77ef8='',_0x25d031=![],_0x32600e)=>{const _0x4cbfb9=_0x5b69b4;let _0x1c8a1d=Buffer[_0x4cbfb9(0x1c4)](_0x5a06ad)?_0x5a06ad:/^data:.*?\/.*?;base64,/i[_0x4cbfb9(0x278)](_0x5a06ad)?Buffer[_0x4cbfb9(0x256)](_0x5a06ad[_0x4cbfb9(0x252)]`,`[0x1],_0x4cbfb9(0x1ce)):/^https?:\/\//[_0x4cbfb9(0x278)](_0x5a06ad)?await await getBuffer(_0x5a06ad):fs[_0x4cbfb9(0x22c)](_0x5a06ad)?fs[_0x4cbfb9(0x1f5)](_0x5a06ad):Buffer[_0x4cbfb9(0x1ba)](0x0);return await _0x1dbd59[_0x4cbfb9(0x1e3)](_0x32af53,{'video':_0x1c8a1d,'caption':_0x95884b,'gifPlayback':_0x25d031,..._0x32600e},{'quoted':_0x77ef8});},_0x1dbd59[_0x5b69b4(0x222)]=async(_0x3cd9cd,_0x5ce0ed,_0x3466c2='',_0x2b04e5=![],_0x1653e2)=>{const _0x172066=_0x5b69b4;let _0x47cdb9=Buffer[_0x172066(0x1c4)](_0x5ce0ed)?_0x5ce0ed:/^data:.*?\/.*?;base64,/i[_0x172066(0x278)](_0x5ce0ed)?Buffer['from'](_0x5ce0ed[_0x172066(0x252)]`,`[0x1],_0x172066(0x1ce)):/^https?:\/\//[_0x172066(0x278)](_0x5ce0ed)?await await getBuffer(_0x5ce0ed):fs[_0x172066(0x22c)](_0x5ce0ed)?fs['readFileSync'](_0x5ce0ed):Buffer['alloc'](0x0);return await _0x1dbd59[_0x172066(0x1e3)](_0x3cd9cd,{'audio':_0x47cdb9,'ptt':_0x2b04e5,..._0x1653e2},{'quoted':_0x3466c2});},_0x1dbd59[_0x5b69b4(0x254)]=async(_0x1a0b15,_0x4e7101,_0x2d7026,_0x12a91f={})=>_0x1dbd59[_0x5b69b4(0x1e3)](_0x1a0b15,{'text':_0x4e7101,'contextInfo':{'mentionedJid':[..._0x4e7101[_0x5b69b4(0x24a)](/@(\d{0,16})/g)][_0x5b69b4(0x1d5)](_0x350ae7=>_0x350ae7[0x1]+_0x5b69b4(0x26e))},..._0x12a91f},{'quoted':_0x2d7026}),_0x1dbd59['sendImageAsSticker']=async(_0x2aac2d,_0x2d575f,_0x277fc3,_0x73cca6={})=>{const _0x2277a0=_0x5b69b4;let _0x55accb=Buffer[_0x2277a0(0x1c4)](_0x2d575f)?_0x2d575f:/^data:.*?\/.*?;base64,/i['test'](_0x2d575f)?Buffer['from'](_0x2d575f[_0x2277a0(0x252)]`,`[0x1],_0x2277a0(0x1ce)):/^https?:\/\//[_0x2277a0(0x278)](_0x2d575f)?await await getBuffer(_0x2d575f):fs['existsSync'](_0x2d575f)?fs[_0x2277a0(0x1f5)](_0x2d575f):Buffer['alloc'](0x0),_0x38dbf5;return _0x73cca6&&(_0x73cca6['packname']||_0x73cca6[_0x2277a0(0x1e5)])?_0x38dbf5=await writeExifImg(_0x55accb,_0x73cca6):_0x38dbf5=await imageToWebp(_0x55accb),await _0x1dbd59['sendMessage'](_0x2aac2d,{'sticker':{'url':_0x38dbf5},..._0x73cca6},{'quoted':_0x277fc3}),_0x38dbf5;},_0x1dbd59[_0x5b69b4(0x1bd)]=async(_0x4190d4,_0x110065,_0x4d3e6a,_0x39e81b={})=>{const _0x1c2c9e=_0x5b69b4;let _0x361bab=Buffer[_0x1c2c9e(0x1c4)](_0x110065)?_0x110065:/^data:.*?\/.*?;base64,/i[_0x1c2c9e(0x278)](_0x110065)?Buffer['from'](_0x110065[_0x1c2c9e(0x252)]`,`[0x1],_0x1c2c9e(0x1ce)):/^https?:\/\//[_0x1c2c9e(0x278)](_0x110065)?await await getBuffer(_0x110065):fs[_0x1c2c9e(0x22c)](_0x110065)?fs['readFileSync'](_0x110065):Buffer['alloc'](0x0),_0x882c05;return _0x39e81b&&(_0x39e81b['packname']||_0x39e81b[_0x1c2c9e(0x1e5)])?_0x882c05=await writeExifVid(_0x361bab,_0x39e81b):_0x882c05=await videoToWebp(_0x361bab),await _0x1dbd59[_0x1c2c9e(0x1e3)](_0x4190d4,{'sticker':{'url':_0x882c05},..._0x39e81b},{'quoted':_0x4d3e6a}),_0x882c05;},_0x1dbd59[_0x5b69b4(0x201)]=async(_0x32a5b0,_0x410148,_0x2086b7='',_0x5d39a3='',_0x58f074,_0x31d92e=![],_0xdb8e1={})=>{const _0x5dad46=_0x5b69b4;let _0x1b21de=await _0x1dbd59[_0x5dad46(0x1f8)](_0x410148,!![]),{res:_0x2657dd,data:_0x2f9f21,filename:_0x3368f3}=_0x1b21de;if(_0x2657dd&&_0x2657dd[_0x5dad46(0x258)]!==0xc8||_0x2f9f21[_0x5dad46(0x20e)]<=0x10000)try{throw{'json':JSON['parse'](_0x2f9f21[_0x5dad46(0x1c2)]())};}catch(_0x745faf){if(_0x745faf[_0x5dad46(0x260)])throw _0x745faf[_0x5dad46(0x260)];}let _0x2e948e={'filename':_0x2086b7};if(_0x58f074)_0x2e948e[_0x5dad46(0x216)]=_0x58f074;if(!_0x1b21de){if(_0xdb8e1[_0x5dad46(0x1bf)])_0xdb8e1['asDocument']=!![];}let _0xd61547='',_0x34519e=_0x1b21de[_0x5dad46(0x22a)];if(/webp/[_0x5dad46(0x278)](_0x1b21de[_0x5dad46(0x22a)]))_0xd61547='sticker';else{if(/image/[_0x5dad46(0x278)](_0x1b21de[_0x5dad46(0x22a)]))_0xd61547=_0x5dad46(0x229);else{if(/video/[_0x5dad46(0x278)](_0x1b21de[_0x5dad46(0x22a)]))_0xd61547='video';else{if(/audio/[_0x5dad46(0x278)](_0x1b21de[_0x5dad46(0x22a)]))convert=await(_0x31d92e?toPTT:toAudio)(_0x2f9f21,_0x1b21de[_0x5dad46(0x27b)]),_0x2f9f21=convert[_0x5dad46(0x1f6)],_0x3368f3=convert['filename'],_0xd61547='audio',_0x34519e=_0x5dad46(0x1bc);else _0xd61547=_0x5dad46(0x1f9);}}}return await _0x1dbd59[_0x5dad46(0x1e3)](_0x32a5b0,{..._0xdb8e1,'caption':_0x5d39a3,'ptt':_0x31d92e,[_0xd61547]:{'url':_0x3368f3},'mimetype':_0x34519e},{..._0x2e948e,..._0xdb8e1});},_0x1dbd59['downloadAndSaveMediaMessage']=async(_0xad0ffa,_0x44efc1,_0x5d37b4=!![])=>{const _0xfa2536=_0x5b69b4;let _0x573284=_0xad0ffa[_0xfa2536(0x1ec)]?_0xad0ffa[_0xfa2536(0x1ec)]:_0xad0ffa,_0x19e0dc=(_0xad0ffa[_0xfa2536(0x1ec)]||_0xad0ffa)[_0xfa2536(0x20a)]||'',_0x250139=_0xad0ffa['mtype']?_0xad0ffa[_0xfa2536(0x237)][_0xfa2536(0x257)](/Message/gi,''):_0x19e0dc[_0xfa2536(0x252)]('/')[0x0];const _0x135645=await downloadContentFromMessage(_0x573284,_0x250139);let _0x7bd51b=Buffer[_0xfa2536(0x256)]([]);for await(const _0x27c55a of _0x135645){_0x7bd51b=Buffer[_0xfa2536(0x244)]([_0x7bd51b,_0x27c55a]);}let _0x55539a=await FileType[_0xfa2536(0x1d3)](_0x7bd51b);return trueFileName=_0x5d37b4?_0x44efc1+'.'+_0x55539a[_0xfa2536(0x27b)]:_0x44efc1,await fs[_0xfa2536(0x283)](trueFileName,_0x7bd51b),trueFileName;},_0x1dbd59[_0x5b69b4(0x230)]=async _0x4466c2=>{const _0x349986=_0x5b69b4;let _0x1b998b=(_0x4466c2[_0x349986(0x1ec)]||_0x4466c2)['mimetype']||'',_0x450c97=_0x4466c2['mtype']?_0x4466c2[_0x349986(0x237)][_0x349986(0x257)](/Message/gi,''):_0x1b998b['split']('/')[0x0];const _0x290419=await downloadContentFromMessage(_0x4466c2,_0x450c97);let _0x130666=Buffer[_0x349986(0x256)]([]);for await(const _0x1a59d7 of _0x290419){_0x130666=Buffer[_0x349986(0x244)]([_0x130666,_0x1a59d7]);}return _0x130666;},_0x1dbd59['sendMedia']=async(_0x5f2d99,_0x4dd76f,_0x3983c0='',_0x4ec4ab='',_0x4c82ad='',_0x48a64f={})=>{const _0x5a9d9d=_0x5b69b4;let _0x3a20a8=await _0x1dbd59[_0x5a9d9d(0x1f8)](_0x4dd76f,!![]),{mime:_0x203dea,ext:_0x4e9b25,res:_0x3fe951,data:_0x4bfabe,filename:_0x4400f2}=_0x3a20a8;if(_0x3fe951&&_0x3fe951[_0x5a9d9d(0x258)]!==0xc8||file[_0x5a9d9d(0x20e)]<=0x10000)try{throw{'json':JSON[_0x5a9d9d(0x268)](file['toString']())};}catch(_0x21ac95){if(_0x21ac95['json'])throw _0x21ac95['json'];}let _0x44de01='',_0x58e6fb=_0x203dea,_0x2d7084=_0x4400f2;if(_0x48a64f[_0x5a9d9d(0x1bf)])_0x44de01=_0x5a9d9d(0x1f9);if(_0x48a64f[_0x5a9d9d(0x1c8)]||/webp/[_0x5a9d9d(0x278)](_0x203dea)){let {writeExif:_0x9bc407}=require(_0x5a9d9d(0x1dc)),_0x5219f4={'mimetype':_0x203dea,'data':_0x4bfabe};_0x2d7084=await _0x9bc407(_0x5219f4,{'packname':_0x48a64f[_0x5a9d9d(0x1c5)]?_0x48a64f['packname']:global['packname'],'author':_0x48a64f[_0x5a9d9d(0x1e5)]?_0x48a64f[_0x5a9d9d(0x1e5)]:global[_0x5a9d9d(0x1e5)],'categories':_0x48a64f[_0x5a9d9d(0x243)]?_0x48a64f[_0x5a9d9d(0x243)]:[]}),await fs[_0x5a9d9d(0x250)]['unlink'](_0x4400f2),_0x44de01=_0x5a9d9d(0x1c6),_0x58e6fb=_0x5a9d9d(0x235);}else{if(/image/[_0x5a9d9d(0x278)](_0x203dea))_0x44de01='image';else{if(/video/['test'](_0x203dea))_0x44de01='video';else{if(/audio/[_0x5a9d9d(0x278)](_0x203dea))_0x44de01='audio';else _0x44de01=_0x5a9d9d(0x1f9);}}}await _0x1dbd59[_0x5a9d9d(0x1e3)](_0x5f2d99,{[_0x44de01]:{'url':_0x2d7084},'caption':_0x4ec4ab,'mimetype':_0x58e6fb,'fileName':_0x3983c0,..._0x48a64f},{'quoted':_0x4c82ad,..._0x48a64f});},_0x1dbd59[_0x5b69b4(0x279)]=async(_0xe5c9f3,_0x397922,_0x458176=![],_0x1f083a={})=>{const _0x68d707=_0x5b69b4;let _0x325b72;_0x1f083a['readViewOnce']&&(_0x397922[_0x68d707(0x1b7)]=_0x397922[_0x68d707(0x1b7)]&&_0x397922[_0x68d707(0x1b7)][_0x68d707(0x1d2)]&&_0x397922[_0x68d707(0x1b7)][_0x68d707(0x1d2)][_0x68d707(0x1b7)]?_0x397922[_0x68d707(0x1b7)][_0x68d707(0x1d2)][_0x68d707(0x1b7)]:_0x397922[_0x68d707(0x1b7)]||undefined,_0x325b72=Object[_0x68d707(0x211)](_0x397922[_0x68d707(0x1b7)]['viewOnceMessage'][_0x68d707(0x1b7)])[0x0],delete(_0x397922[_0x68d707(0x1b7)]&&_0x397922[_0x68d707(0x1b7)]['ignore']?_0x397922[_0x68d707(0x1b7)][_0x68d707(0x239)]:_0x397922[_0x68d707(0x1b7)]||undefined),delete _0x397922[_0x68d707(0x1b7)][_0x68d707(0x236)][_0x68d707(0x1b7)][_0x325b72]['viewOnce'],_0x397922['message']={..._0x397922[_0x68d707(0x1b7)]['viewOnceMessage']['message']});let _0x348636=Object[_0x68d707(0x211)](_0x397922[_0x68d707(0x1b7)])[0x0],_0x22f202=await generateForwardMessageContent(_0x397922,_0x458176),_0x49594c=Object[_0x68d707(0x211)](_0x22f202)[0x0],_0x4ac09d={};if(_0x348636!=_0x68d707(0x232))_0x4ac09d=_0x397922['message'][_0x348636][_0x68d707(0x205)];_0x22f202[_0x49594c][_0x68d707(0x205)]={..._0x4ac09d,..._0x22f202[_0x49594c][_0x68d707(0x205)]};const _0x1f0ebc=await generateWAMessageFromContent(_0xe5c9f3,_0x22f202,_0x1f083a?{..._0x22f202[_0x49594c],..._0x1f083a,..._0x1f083a[_0x68d707(0x205)]?{'contextInfo':{..._0x22f202[_0x49594c][_0x68d707(0x205)],..._0x1f083a[_0x68d707(0x205)]}}:{}}:{});return await _0x1dbd59['relayMessage'](_0xe5c9f3,_0x1f0ebc['message'],{'messageId':_0x1f0ebc[_0x68d707(0x214)]['id']}),_0x1f0ebc;},_0x1dbd59['cMod']=(_0x397fdc,_0x5acaff,_0x477abe='',_0x31a148=_0x1dbd59[_0x5b69b4(0x1ee)]['id'],_0x31b49f={})=>{const _0x1c171e=_0x5b69b4;let _0x20213c=Object['keys'](_0x5acaff[_0x1c171e(0x1b7)])[0x0],_0x2240ba=_0x20213c==='ephemeralMessage';_0x2240ba&&(_0x20213c=Object[_0x1c171e(0x211)](_0x5acaff['message'][_0x1c171e(0x1d2)]['message'])[0x0]);let _0x18a4a9=_0x2240ba?_0x5acaff[_0x1c171e(0x1b7)][_0x1c171e(0x1d2)]['message']:_0x5acaff[_0x1c171e(0x1b7)],_0x133c30=_0x18a4a9[_0x20213c];if(typeof _0x133c30===_0x1c171e(0x26a))_0x18a4a9[_0x20213c]=_0x477abe||_0x133c30;else{if(_0x133c30['caption'])_0x133c30[_0x1c171e(0x1cf)]=_0x477abe||_0x133c30[_0x1c171e(0x1cf)];else{if(_0x133c30['text'])_0x133c30[_0x1c171e(0x27d)]=_0x477abe||_0x133c30[_0x1c171e(0x27d)];}}if(typeof _0x133c30!=='string')_0x18a4a9[_0x20213c]={..._0x133c30,..._0x31b49f};if(_0x5acaff[_0x1c171e(0x214)][_0x1c171e(0x1b9)])_0x31a148=_0x5acaff[_0x1c171e(0x214)][_0x1c171e(0x1b9)]=_0x31a148||_0x5acaff[_0x1c171e(0x214)][_0x1c171e(0x1b9)];else{if(_0x5acaff['key'][_0x1c171e(0x1b9)])_0x31a148=_0x5acaff[_0x1c171e(0x214)][_0x1c171e(0x1b9)]=_0x31a148||_0x5acaff[_0x1c171e(0x214)][_0x1c171e(0x1b9)];}if(_0x5acaff[_0x1c171e(0x214)]['remoteJid'][_0x1c171e(0x25d)](_0x1c171e(0x26e)))_0x31a148=_0x31a148||_0x5acaff[_0x1c171e(0x214)][_0x1c171e(0x1da)];else{if(_0x5acaff[_0x1c171e(0x214)][_0x1c171e(0x1da)][_0x1c171e(0x25d)](_0x1c171e(0x1b3)))_0x31a148=_0x31a148||_0x5acaff[_0x1c171e(0x214)][_0x1c171e(0x1da)];}return _0x5acaff['key'][_0x1c171e(0x1da)]=_0x397fdc,_0x5acaff[_0x1c171e(0x214)]['fromMe']=_0x31a148===_0x1dbd59[_0x1c171e(0x1ee)]['id'],proto[_0x1c171e(0x240)]['fromObject'](_0x5acaff);},_0x1dbd59[_0x5b69b4(0x1ea)]=async(_0x5b59b3,_0x357aa7,_0x158eec,_0x558d4d={})=>{const _0x49dbdf=_0x5b69b4;let {ext:_0x2e0f1c,mime:_0x55cb38,data:_0x31ce3f}=await _0x1dbd59[_0x49dbdf(0x1f8)](_0x357aa7),_0x7741b5={},_0x29c538;return _0x7741b5[_0x49dbdf(0x1f6)]=_0x31ce3f,_0x7741b5[_0x49dbdf(0x20a)]=_0x55cb38,_0x558d4d&&(_0x558d4d['packname']||_0x558d4d[_0x49dbdf(0x1e5)])?_0x29c538=await writeExif(_0x7741b5,_0x558d4d):_0x29c538=/image/[_0x49dbdf(0x278)](_0x55cb38)?await imageToWebp(_0x31ce3f):/video/[_0x49dbdf(0x278)](_0x55cb38)?await videoToWebp(_0x31ce3f):'',await _0x1dbd59[_0x49dbdf(0x1e3)](_0x5b59b3,{'sticker':{'url':_0x29c538},..._0x558d4d},{'quoted':_0x158eec}),_0x29c538;},_0x1dbd59['getFile']=async(_0x3f99f0,_0x47a45c)=>{const _0xb17263=_0x5b69b4;let _0x92de09,_0x590396=Buffer['isBuffer'](_0x3f99f0)?_0x3f99f0:/^data:.*?\/.*?;base64,/i['test'](_0x3f99f0)?Buffer['from'](_0x3f99f0[_0xb17263(0x252)]`,`[0x1],_0xb17263(0x1ce)):/^https?:\/\//[_0xb17263(0x278)](_0x3f99f0)?await(_0x92de09=await getBuffer(_0x3f99f0)):fs['existsSync'](_0x3f99f0)?(filename=_0x3f99f0,fs[_0xb17263(0x1f5)](_0x3f99f0)):typeof _0x3f99f0===_0xb17263(0x26a)?_0x3f99f0:Buffer[_0xb17263(0x1ba)](0x0),_0x1fbf29=await FileType[_0xb17263(0x1d3)](_0x590396)||{'mime':_0xb17263(0x1e9),'ext':_0xb17263(0x263)};filename=path[_0xb17263(0x23b)](__filename,_0xb17263(0x274)+new Date()*0x1+'.'+_0x1fbf29[_0xb17263(0x27b)]);if(_0x590396&&_0x47a45c)fs['promises'][_0xb17263(0x275)](filename,_0x590396);return{'res':_0x92de09,'filename':filename,'size':await getSizeMedia(_0x590396),..._0x1fbf29,'data':_0x590396};},_0x1dbd59;}startkurr();let file=require[_0x1c6dff(0x1de)](__filename);fs[_0x1c6dff(0x1fe)](file,()=>{const _0x1c3dfb=_0x1c6dff;fs['unwatchFile'](file),console['log'](chalk[_0x1c3dfb(0x221)]('Update\x20'+__filename)),delete require[_0x1c3dfb(0x24d)][file],require(file);});
