const http = require('http');
const fs = require('fs');

let f1 = ["DOGMEAT.MSG","JUNKDOG.MSG","IAN.MSG","KATJA.MSG","TANDI.MSG","TYCHO.MSG","CINDY.MSG","LYLE.MSG","OVER.MSG","THERESA.MSG","AGATHA.MSG","ARADESH.MSG","CURTIS.MSG","IAN.MSG","JARVIS.MSG","SSGUIDE.MSG","RAZLO.MSG","SETH.MSG","TANDI.MSG","ALYA.MSG","DIANA.MSG","GARL.MSG","GWEN.MSG","PETROX.MSG","TOLYA.MSG","ANDREW.MSG","GIZMO.MSG","GUSTOFER.MSG","ISMARC.MSG","GAMBLER.MSG","IZO.MSG","ASSBLOW.MSG","KENJI.MSG","KILLIAN.MSG","LARS.MSG","MARCELLE.MSG","NEAL.MSG","PHIL.MSG","SAUL.MSG","SINTHIA.MSG","TRISH.MSG","TYCHO.MSG","COUGAR.MSG","MORBID.MSG","FLASH.MSG","GRETCH.MSG","SHARK.MSG","SHERRY.MSG","VICTOR.MSG","VINNIE.MSG","BILLY.MSG","HBILLIE.MSG","DAN.MSG","GUNTHER.MSG","HGENCVAN.MSG","HGENGRD.MSG","HGENCVAN.MSG","HGENCVAN.MSG","BITSBOB.MSG","BOB.MSG","IRWIN.MSG","LEMMY.MSG","ALLNONE.MSG","STAPLE.MSG","JUSTIN.MSG","HJUSTIN.MSG","KENNY.MSG","FRY.MSG","FRYSTUB.MSG","DEPFRY.MSG","DEMETRE.MSG","KERI.MSG","HBETH.MSG","BUTCH.MSG","RUTGER.MSG","SID.MSG","GUIDO.MSG","LEON.MSG","LORENZO.MSG","DECKER.MSG","KANE.MSG","HAROLD.MSG","HUBJAKE.MSG","SLAPPY.MSG","VANCE.MSG","CLEO.MSG","JASMINE.MSG","LOXLEY.MSG","SMITTY.MSG","HIGHTOWR.MSG","HTWRGRGE.MSG","HTWRLEON.MSG","HTWRRICK.MSG","MSTMERCH.MSG","JAIN.MSG","HCHDGRD.MSG","THORNDYK.MSG","CHUCK.MSG","JASON.MSG","LORRIAN.MSG","LORRI.MSG","MILES.MSG","SAMMAEL.MSG","SMITTY.MSG","TAYLOR.MSG","ALEX.MSG","CALEB.MSG","JON.MSG","BYCHRIS.MSG","DUGAN.MSG","BYGREG.MSG","MACRAE.MSG","BYMIKE.MSG","RAZOR.MSG","GABRIEL.MSG","ZACK.MSG","ALAN.MSG","AMBER.MSG","HEATHER.MSG","FOLGUARD.MSG","FOLGUARD.MSG","JAKE.MSG","FOLGUARD.MSG","FOLGUARD.MSG","KATJA.MSG","FOLGUARD.MSG","FOLGUARD.MSG","FOLGUARD.MSG","NICOLE.MSG","FOLGUARD.MSG","FOLGUARD.MSG","FOLGUARD.MSG","TALIUS.MSG","GARRET.MSG","SET.MSG","LEADER.MSG","BARRY.MSG","GARY.MSG","HARRY.MSG","LARRY.MSG","SALLY.MSG","TERRY.MSG","PRISONR.MSG","CHILDMEM.MSG","JCHIDMEM.MSG","CABBOT.MSG","DARREL.MSG","DARL.MSG","THOMAS.MSG","BRENDEN.MSG","JENNIFER.MSG","MICHAEL.MSG","RHOMBUS.MSG","TALUS.MSG","THOMAS.MSG","RD1INIT.MSG","BOSLORI.MSG","KYLE.MSG","PAUL.MSG","SOPHIA.MSG","VREE.MSG","MATHIA.MSG","MAXSON.MSG","ABEL.MSG","FLIP.MSG","KRUPPER.MSG","LT.MSG","MRHANDYC.MSG","SARAH.MSG","VANHAG.MSG","CALDER.MSG","SLUMMER.MSG","ZARK.MSG","DANE.MSG","DOCWU.MSG","FRANCIS.MSG","LASHER.MSG","LAURA.MSG","MORPH.MSG","ORFEO.MSG","BARRACUS.MSG","CATHSHOP.MSG","VIOLA.MSG","PSYCHIC.MSG","GIDEON.MSG","JEREM.MSG","JER.MSG","AIRGRD.MSG","VICTOR.MSG","MASTER.MSG","PSYCHIC.MSG","MADSCI.MSG","PSYCHIC.MSG","BAKA.MSG","RAYZE.MSG","ROCK.MSG","SKIZZER.MSG","LEX.MSG","LENNY.MSG","DEMOPHIL.MSG","DEMODOG.MSG","GENMERCA.MSG","PATRICK.MSG","ZAX.MSG"];
let f2 = ["McBess.msg","VCCasidy.msg","VCMACRAE.MSG","McDavin.msg","Ecdogmet.msg","Ecpdog.msg","McLaddie.msg","Ocgoris.msg","Scrobo.msg","Cck9.msg","GCLENNY.MSG","HcMARCUS.msg","McMiria.msg","NcExSpou.msg","NhMyron.msg","WCBRNBOT.MSG","WSTERM3A.MSG","WSTERM3B.MSG","KCSULIK.MSG","DcVic.msg","AHELDER.MSG","ACTEMVIL.MSG","ACERIC.MSG","AHHAKUN.MSG","ACJORDAN.MSG","ACKLINT.MSG","ACFIST.MSG","ACMORLIS.MSG","ACMynoc.msg","ACNAGOR.MSG","KCALDO.MSG","KCARDIN.MSG","KCDUNTON.MSG","KCDUNTON.MSG","ACFIST.MSG","Hcsulvan.msg","KCRATGOD.MSG","KCMAIDA.MSG","KCSAJAG.MSG","KCSALLY.MSG","KCSLIM.MSG","KCSMILEY.MSG","KCSULIK.MSG","KCTORR.MSG","KCBOB.MSG","DcAnna.msg","DcJoey.msg","FCDJOSH.MSG","McKarl.msg","DcLara.msg","DcRebecc.msg","DcMaggie.msg","DcSmitty.msg","DcTubby.msg","DcAnan.msg","DcBilly.msg","DcFranki.msg","DcMetzge.msg","DcCaesar.msg","DcMom.msg","DcTyler.msg","DcVic.msg","McBaltha.msg","McBalWif.msg","McBess.msg","McCornel.msg","McDavin.msg","McFarrel.msg","McGrisha.msg","McJo.msg","McJohnny.msg","McJonny.msg","McLaddie.msg","McMiria.msg","NcExSpou.msg","McRose.msg","McJohnny.msg","McJonny.msg","McVegeir.msg","Vcamanda.msg","Vccurtis.msg","VCCasidy.msg","VCMACRAE.MSG","VCJOSHUA.MSG","VCMELIND.MSG","VCSTEVE.MSG","Vcbarkus.msg","VCDARROW.MSG","VCFARREL.MSG","VCJOSHUA.MSG","VCKOHL.MSG","Vcdwnbar.msg","Vcrandal.msg","Vcrandal.msg","VCSTARK.MSG","VCMOORE.MSG","Vcmainwk.msg","Vcwalace.msg","VCGreg.msg","Vclynett.msg","VCSUPGRD.MSG","Vcmclure.msg","DcAnan.msg","VCDRTROY.MSG","GCBRAIN.MSG","GCFESTUS.MSG","GCGORDON.MSG","Gcharold.msg","GCLUMPY.MSG","VCFARREL.MSG","GCSKEETR.MSG","GCWOOZ.MSG","GCZOMAK.MSG","HcAILEEN.msg","HcOUTFIT.msg","Hcbrian.msg","HcCHAD.msg","HcDOC.msg","HCELMO.MSG","HcFRANK.msg","HcFRANCI.msg","HCHUSWIF.MSG","Hcjacob.msg","HcLIZ.msg","HCLUMPY.MSG","HcMANSON.msg","HCMICKY.MSG","HcMARCUS.msg","HcPHIL.msg","HcSTEVE.msg","Hcsuper.msg","HcRSUPER.msg","HcProf.msg","Hcseymor.msg","Hctyphon.msg","Hczaius.msg","Hcdan.msg","HIDEAD.MSG","HTCORPSE.MSG","Hceric.msg","RCASCORT.MSG","RCDICK.MSG","RCMARION.MSG","RCLOU.MSG","RCMODJES.MSG","RCDRJOHN.MSG","RCRATRAY.MSG","RCROONEY.MSG","RCWADE.MSG","RCMCGREW.MSG","RCSAVINE.MSG","ECRAIDER.MSG","RCJANE.MSG","RCHOFFY.MSG","RCJOSH.MSG","RCMARGE.MSG","RCNORD.MSG","RCHAKES.MSG","RCSTANWL.MSG","RCVELANI.MSG","NcBigJes.msg","NcLilJes.msg","NCANGBIS.MSG","NcCorBro.msg","NcBand.msg","NcBishop.msg","NCLABISH.MSG","NcSalvat.msg","NcMason.msg","NcBand.msg","NcBand.msg","NCALGERN.MSG","NcEldrid.msg","NCFTULLY.MSG","NcRenesc.msg","NcChrWri.msg","NcChiWri.msg","NCETHWRI.MSG","NcKeiWri.msg","NcOrvill.msg","NcTRay.msg","NcResear.msg","NcMorMen.msg","NhMyron.msg","WCDOBBS.MSG","WCBRNBOT.MSG","WSTERM3A.MSG","WSTERM3B.MSG","Scbuster.msg","Scskeete.msg","Sclenny.msg","Scmerk.msg","Scmikey.msg","Scmira.msg","Scratch.msg","Scvortis.msg","Scdusty.msg","Schenry.msg","Scdocjub.msg","Sckarl.msg","FCNLUKE.MSG","Scoswald.msg","Scrobo.msg","Scfelix.msg","Scwestin.msg","Scsalbob.msg","Scfergus.msg","Scgunthr.msg","Shtandi.msg","Scjohn.msg","Bcbill.msg","Bccrissy.msg","Bcrebecc.msg","Bcjohn.msg","Bcrobert.msg","Bcrebecc.msg","Bczeke.msg","Bcdarion.msg","Bcjones.msg","Bckarla.msg","Bcphil.msg","Ocdar.msg","Ocgoris.msg","Ocgrutha.msg","Ocjul.msg","Ockerith.msg","Octhearn.msg","Ocvaldis.msg","Ocariel.msg","Bcdalia.msg","Ocdalia.msg","Ocdave.msg","Ocgordon.msg","Ocjimmy.msg","Ocjoseph.msg","Ocmatt.msg","ECMELCHR.MSG","EcGrunde.msg","Fsface.msg","Fcdragon.msg","Fcdrfung.msg","Fcchemst.msg","Fckenlee.msg","Fclaocho.msg","Fclopan.msg","Fcgunmer.msg","FCFMATT.MSG","Fsempter.msg","Fcdrwong.msg","Fcronmey.msg","Fcbadger.msg","Fctnkgmr.msg","Fcchip.msg","Fctnkmer.msg","Fcmarc.msg","RCDICK.MSG","Fcoz7.msg","Fcoz9.msg","Fccrocke.msg","Fcdaveh.msg","Fcrocman.msg","Fcjuavki.msg","Fcjuavki.msg","Ccdrill.msg","CCCHRIS.MSG","Ccdrgrd.msg","Cck9.msg","CCMANDR.MSG","Ccqmstr.msg","CCMASTER.MSG","Ccdoctor.msg","Ccmedgrd.msg","Ccxarn.msg","AHELDER.MSG","QCCURLNG.MSG","QCBIRD.MSG","Qhprzrch.msg","QCFRANK.MSG","QCGRANIT.MSG","QCPRSSEC.MSG","QCMURRAY.MSG","Ectrader.msg","Ecarthur.msg","Ecbedemi.msg","Ecconcor.msg","Eceric.msg","Ecgalaha.msg","Ecjoshua.msg","Ecsirlau.msg","Ecrobin.msg"];

let allData = [...f1, ...f2]

function getMSG(item) {
    let text = "";
    const request = http.request({ host: 'fallout.fandom.com', path:`wiki/${item}` }, (res) => {

        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            text += chunk
        }).on('end', () => {
            let res = text.match(/{\d+}{(\w+)?}{.+}/g)
            if(res) res = res.join("\n").replace(/<[^>]+>/g, "");
            if(!res) console.log(item)

            fs.writeFile(`${f1.includes(item)? 'f1' : 'f2'}/${item.slice(0,-4)}.txt`, res? res : text, err => {
                        if (err) {
                          console.error(err);
                        }
                      });
        })
    });
    
    
    request.end();
    
    request.on('error', (err) => {
        
        console.log("Error occured\n", item);
        console.error(err);
    });
}

if (!fs.existsSync("f1")) fs.mkdirSync("f1");
if (!fs.existsSync("f2")) fs.mkdirSync("f2");

for(let i in allData) {
    getMSG(allData[i])
}
