define(["require","exports","../java_object","../logging"],function(require,exports,java_object,logging){var classes_doppio_Debug=function(){function a(){}return a["SetLogLevel(Lclasses/doppio/Debug$LogLevel;)V"]=function(a,b){logging.log_level=b.get_field(a,"Lclasses/doppio/Debug$LogLevel;level")},a["GetLogLevel()Lclasses/doppio/Debug$LogLevel;"]=function(a){var b=a.getBsCl().getInitializedClass(a,"Lclasses/doppio/Debug$LogLevel;");switch(logging.log_level){case 10:return b.staticGet(a,"VTRACE");case 9:return b.staticGet(a,"TRACE");case 5:return b.staticGet(a,"DEBUG");default:return b.staticGet(a,"ERROR")}},a}(),classes_doppio_JavaScript=function(){function classes_doppio_JavaScript(){}return classes_doppio_JavaScript["eval(Ljava/lang/String;)Ljava/lang/String;"]=function(thread,to_eval){var rv=eval(to_eval.jvm2js_str());return null!=rv?java_object.initString(thread.getBsCl(),""+rv):null},classes_doppio_JavaScript}();registerNatives({"classes/doppio/Debug":classes_doppio_Debug,"classes/doppio/JavaScript":classes_doppio_JavaScript})});