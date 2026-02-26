/* Photography Page — Quiet Modernism
   Five categories: Niger, Babies, South America, Asia, Nature
   Accordion expand with photo grid + lightbox */

import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PHOTO_HERO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/GlqbAuMFTzrDRght.jpg";

const nigerPhotos = [
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/DiokmQRyDRVjgvwb.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/vmCarRgqNLJBEzPI.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/RyBFJCDdTSLOukkz.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/IxAkWvWEgDZvQbKc.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/kfUNmbFFISAIcHSA.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/tDgXQPSRVLxOaOes.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/LhKDjEKmwnCploqj.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/dlXzjnDamvMIIKIU.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/FwraglrUINMpXphQ.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/urrGttTBrgqJViZl.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/dTrmHxfPQNVECBoj.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/PEWVdNKDsgmXvNQT.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/gfKuSxVCOhZZTLnH.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/ggimDNoilVUtEsFU.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/bMGWBelnkrWzeWDs.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/RZQNeJTZwZNdvxPK.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/mhwvcvNnogfYfIXb.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/VEctAscdQsqUWHUI.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/BZuUUXwiBeyjenXb.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/jebLZABOSAusUoeR.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/biXhvFgiUBbWrsvd.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/eqTAiMVyArUgnIES.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/eZDAhyMsBxHhziSo.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/IEUyofxNHywmlukI.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/zNDikxdrcSZaGuxT.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/NVoyAkszsXXWUwiw.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/UUPyGLKBRAVNrOxf.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/ZRFWyItIxEDmCKYm.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/sczmBSDatpzZRelC.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/yHyyCWFWVhPNZZEJ.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/VQrrFChQvtptKQWq.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/JsJMBqZyKmhJFCsm.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/lFAzwNtcgXyueknm.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/pGZozSARDSHABJFZ.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/AbxMuGCapuDXRlUW.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/BtncCAQjdbdMnWbO.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/oUHQBYFryQXVXjji.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/OrmYKdvqbiUfOkpa.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/VYvfHyiKFDyapRZi.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/lhCsPuPZoytvtIaI.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/GgSvLwEOrAVMHDSJ.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/afTsxkJGEmszsjqM.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/vvcJBxQlJcfTulNf.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/NHrxkEOxUmZYTkUV.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/nHcvYVQZRPGwxwiG.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/fLivrkMGccwhXjcg.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/KdeZQJBOPlzTJywh.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/MvUzryuOOInMRnti.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/EQEjSzwtDwKTEsLV.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/GTLUuDmUpWgwqPyM.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/yNEeFKOlwtjgcIeZ.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/LvqiCSykjbprKBfu.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/BVizRsALcNINJtvV.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/xstCcckJROhlowoe.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/bmBPCGbqMetfQslg.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/KASNCarNFtQPVSvE.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/NeXLrwdpUpCwyfwZ.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/VfXNOYSuWtdGZAVv.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/sezYfZcBFMViAePF.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/SgyUwAhonndrRNZs.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/KagbHmaUJZuCLhcV.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/iNanfXNAmfOFgvqr.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/wMBHaLgMQeoePeLW.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/JJgzcLnMfUeFdCpu.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/njoTKMzYZNNKtJUM.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/QXCNyPfBSjOhYasx.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/wcNUmzUgYHlwvkVZ.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/kAivUgLBYfIpNmGZ.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/KBNsJNICYEFouwHl.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/JPcnXWvxCUlZsYGT.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/tCriRRDfTWMPDPNW.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/vpQSSvEeyUWfBWHx.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/uteNIwdpxYLpJYwm.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/XGOBlNhkfwKOuDzh.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/KeCKWliayDzsWfee.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/BMBgebjnReHvZzZl.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/iKzuBfUAyKDtQcay.jpg", caption: "" },
];

const babiesPhotos = [
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/sdvRkXHXRttTSERq.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/npaiclFwiflNzrZP.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/lBVaywwLKHQhqHPs.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/FbBEYyvHoYgqVYwx.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/CcHovSUoZXQzoehT.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/mmmfixxxpJOgzdEf.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/xYnjjjQakydDFcvS.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/mSWiaaqhGIcCPtJI.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/RcZhbpuvBLjGpLLj.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/rGWIBrvgymClXtVa.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/nWixpvmpIeihsYvi.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/iJSbrajkYLptQvyj.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/gkwCodhoDgiAtPmc.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/jWkzgcGVLPBdPlye.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/TkGNShMtPzAVUVlT.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/iveqQxaIWCQLnWFD.jpg", caption: "Sleeping" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/EhAKMLdbChjECliY.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/vDGiUOtLoAhkylnh.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/mpFKSqMKhVanDDgk.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/uAhrrhpmSDFQUJuN.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/RELzHdCrigzYNPCK.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/zigbOkcpTurBQmWI.jpg", caption: "" },
];

const southAmericaPhotos = [
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/sLBVSZtkpYlnFoKU.jpg", caption: "Taganga" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/nCuaDWdzbTXnZblc.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/iNQVYKvkbSMfanXU.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/DMomkEBnfYlaHYPK.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/xAICruSBwfaTRcBK.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/HTRKdriPIavKhDdP.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/xcwsoaQQmCfVogEm.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/pPtFyVYOjXegnsxo.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/mlKbAYXWvbURVPvF.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/mYhWIJAMOdUKJLku.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/RfYVPmWYOtHLIqlI.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/vWgMbjDJMCrihkJu.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/HottcrLgnWZkTeZg.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/JGZgKmExPEONFtJm.jpg", caption: "Cacao" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/JqmATayFfvHTwNNy.jpg", caption: "Guard" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/dziuUVuwqCoianGM.jpg", caption: "Kogi boy" },
];

const asiaPhotos = [
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/sgXUUlgjxmBvZhgD.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/DHSrdBaolJOLVFRx.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/svdtxnjmbohGFiaE.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/NGYFhSSIUFpBKGbi.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/JxRMpqTuBGKhrfrD.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/mfzpADLiOvITYQME.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/HFuotsPWHEOsNRNH.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/zmVXzYodMCqQqGCz.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/jOSlpBmSKqKyEtWt.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/VeMhdjVAXEkhEecZ.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/VxtwteWvehAtQudI.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/YQXngguNAMQBsKDi.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/PEEWvsBOUhYKlXwp.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/xTKLYlICHPOMvRou.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/uKkVBoBELkwIrFbv.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/ynlxMYeIqTbYoHVU.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/eqYkEVYSWIRNbvGx.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/yjRASmgRfdQRyoOw.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/HCLXlHBLejlGiQnW.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/IijOptEUGDCOQgze.jpg", caption: "" },
];

const naturePhotos = [
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/CXFVVyruutNvgxEj.jpg", caption: "Bird" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/wShqeFOscmFQOpHe.jpg", caption: "Macaw" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/CQZWTfjPKcNyWUiO.jpg", caption: "Shakira" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/cSWiMMKYSmzNGJfW.jpg", caption: "Toucan" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/AmIWSGEpebvRluqJ.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/WDFIDAJtutQDVKlr.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/QQtnOlNJONzNMDAN.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/LdDksjXgmtutrRpM.jpg", caption: "Civet, Indonesia" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/PgFnLJDACmxspSmY.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/xatvelOrFmbgMjtB.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/oaMAxMbxyJTbTdWO.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/dvpmhlKriUEIzSrn.jpg", caption: "" },
  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/lMMzmkxtOoPdTUpS.jpg", caption: "" },
];

const categories = [
  {
    id: "niger",
    title: "Niger",
    desc: "Portraits, daily life, and fieldwork across the Sahel — documenting women navigating health systems, community, and resilience over a decade of research.",
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/OWTfoXbIAqAGFOLX.jpg",
    photos: nigerPhotos,
  },
  {
    id: "babies",
    title: "Babies",
    desc: "The tender, exhausting, luminous beginnings.",
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/iveqQxaIWCQLnWFD.jpg",
    photos: babiesPhotos,
  },
  {
    id: "south-america",
    title: "South America",
    desc: "Colombia, Peru, and beyond — markets, coastlines, Indigenous communities, and the textures of everyday life.",
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/iNQVYKvkbSMfanXU.jpg",
    photos: southAmericaPhotos,
  },
  {
    id: "asia",
    title: "Asia",
    desc: "India, Southeast Asia, China, and the landscapes in between — color, devotion, and the quiet moments of daily life.",
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/sgXUUlgjxmBvZhgD.jpg",
    photos: asiaPhotos,
  },
  {
    id: "nature",
    title: "Nature",
    desc: "Wildlife encountered across three continents — toucans in Colombia, civets in Indonesia, birds of every kind.",
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332970584/cSWiMMKYSmzNGJfW.jpg",
    photos: naturePhotos,
  },
];

function FadeSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.unobserve(el); } },
      { threshold: 0.06 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`fade-in-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function Lightbox({ photos, initialIndex, onClose }: {
  photos: { src: string; caption: string }[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(initialIndex);
  const prev = () => setIdx(i => (i - 1 + photos.length) % photos.length);
  const next = () => setIdx(i => (i + 1) % photos.length);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95" onClick={onClose}>
      <button
        className="absolute top-6 right-8 text-white/60 hover:text-white text-4xl z-10 transition-colors leading-none"
        onClick={onClose}
      >
        ×
      </button>
      <button
        className="absolute left-4 md:left-8 text-white/60 hover:text-white text-5xl z-10 transition-colors px-2 py-4 leading-none"
        onClick={e => { e.stopPropagation(); prev(); }}
      >
        ‹
      </button>
      <div className="max-w-5xl max-h-screen w-full px-16 flex flex-col items-center" onClick={e => e.stopPropagation()}>
        <img
          src={photos[idx].src}
          alt={photos[idx].caption}
          className="max-h-[80vh] max-w-full object-contain"
        />
        {photos[idx].caption && (
          <p className="text-white/50 text-sm mt-4" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            {photos[idx].caption}
          </p>
        )}
        <p className="text-white/30 text-xs mt-2 tracking-widest" style={{ fontFamily: "'Jost', system-ui, sans-serif" }}>
          {idx + 1} / {photos.length}
        </p>
      </div>
      <button
        className="absolute right-4 md:right-8 text-white/60 hover:text-white text-5xl z-10 transition-colors px-2 py-4 leading-none"
        onClick={e => { e.stopPropagation(); next(); }}
      >
        ›
      </button>
    </div>
  );
}

function CategorySection({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <FadeSection delay={index * 80}>
      <div className="border-t border-[#E5DED6]">
        {/* Header — click to expand */}
        <button
          className="w-full text-left py-8 flex items-center gap-6 group"
          onClick={() => setExpanded(e => !e)}
        >
          {/* Cover thumbnail */}
          <div className="w-20 h-14 flex-shrink-0 overflow-hidden">
            <img
              src={cat.cover}
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {/* Title + count */}
          <div className="flex-1 min-w-0">
            <h2
              className="text-[#1A1714] text-2xl md:text-3xl leading-none mb-1"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
            >
              {cat.title}
            </h2>
            <p
              className="text-[#8A8480] text-xs tracking-widest uppercase"
              style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
            >
              {cat.photos.length} photos
            </p>
          </div>
          {/* Arrow */}
          <span
            className="text-[#8A8480] text-2xl transition-transform duration-300 flex-shrink-0 leading-none"
            style={{ transform: expanded ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            ›
          </span>
        </button>

        {/* Expanded grid */}
        {expanded && (
          <div className="pb-12">
            <p
              className="text-[#6A6460] text-sm leading-relaxed mb-8 max-w-2xl"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              {cat.desc}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {cat.photos.map((photo, i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden cursor-pointer group relative"
                  onClick={() => setLightboxIdx(i)}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          photos={cat.photos}
          initialIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </FadeSection>
  );
}

export default function Photography() {
  return (
    <div className="min-h-screen bg-[#F8F4EF]">
      <Navigation />

      {/* Dark header band */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#1A1714]">
        <div className="container">
          <p
            className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
          >
            Photography
          </p>
          <h1
            className="text-white text-5xl md:text-7xl leading-none"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
          >
            Visual Work
          </h1>
        </div>
      </div>
      {/* Intro with B&W photo */}
      <section className="py-16 md:py-20 bg-[#F8F4EF]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeSection>
              <p
                className="text-[#4A4440] text-lg leading-relaxed"
                style={{ fontFamily: "'Lora', Georgia, serif" }}
              >
                Across fifteen years of fieldwork in West Africa, South America, and Southeast Asia, photography has been a constant companion — a way of seeing, remembering, and bearing witness to the lives of the people I have been privileged to know.
              </p>
            </FadeSection>
            <FadeSection delay={100}>
              <div className="flex justify-center">
                <div
                  className="overflow-hidden"
                  style={{ maxWidth: '420px', width: '100%' }}
                >
                  <img
                    src={PHOTO_HERO}
                    alt="Ali photographing two women in Niger"
                    className="w-full object-cover block"
                    style={{ maxHeight: '380px', objectPosition: 'center center' }}
                  />
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Category accordion */}
      <section className="pb-24 bg-[#F8F4EF]">
        <div className="container">
          {categories.map((cat, i) => (
            <CategorySection key={cat.id} cat={cat} index={i} />
          ))}
          <div className="border-t border-[#E5DED6]" />
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 border-t border-[#E5DED6] bg-[#F0EBE4]">
        <div className="container text-center">
          <FadeSection>
            <p
              className="text-[#8A8480] text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
            >
              Follow Along
            </p>
            <h2
              className="text-[#1A1714] text-3xl md:text-4xl mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
            >
              More on Instagram
            </h2>
            <a
              href="https://www.instagram.com/ali.heller/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs tracking-[0.12em] uppercase py-3 px-8 border border-[#1A1714]/40 text-[#1A1714]/80 hover:bg-[#1A1714]/10 transition-all duration-250"
              style={{ fontFamily: "'Jost', system-ui, sans-serif" }}
            >
              @ali.heller
            </a>
          </FadeSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
