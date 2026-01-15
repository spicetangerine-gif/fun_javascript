const jsonData1 = `[{"id":1,"first_name":"Bree","last_name":"Towers","email":"btowers0@ftc.gov","gender":"Female","salary":15199},
{"id":2,"first_name":"Kala","last_name":"Barrable","email":"kbarrable1@ted.com","gender":"Female","salary":15182},
{"id":3,"first_name":"Britte","last_name":"Lissandre","email":"blissandre2@pagesperso-orange.fr","gender":"Female","salary":10772},
{"id":4,"first_name":"Jeremy","last_name":"Laskey","email":"jlaskey3@sciencedirect.com","gender":"Male","salary":12589},
{"id":5,"first_name":"Rhianon","last_name":"Gillivrie","email":"rgillivrie4@cargocollective.com","gender":"Female","salary":18987},
{"id":6,"first_name":"Berne","last_name":"Aindriu","email":"baindriu5@stanford.edu","gender":"Male","salary":11318},
{"id":7,"first_name":"Mylo","last_name":"Matchett","email":"mmatchett6@artisteer.com","gender":"Male","salary":9968},
{"id":8,"first_name":"Eirena","last_name":"Liddicoat","email":"eliddicoat7@wordpress.org","gender":"Female","salary":5350},
{"id":9,"first_name":"Michail","last_name":"Linskey","email":"mlinskey8@technorati.com","gender":"Male","salary":9010},
{"id":10,"first_name":"Barnebas","last_name":"Martlew","email":"bmartlew9@theglobeandmail.com","gender":"Male","salary":19543},
{"id":11,"first_name":"Elton","last_name":"Sneezum","email":"esneezuma@paginegialle.it","gender":"Male","salary":11396},
{"id":12,"first_name":"Jayne","last_name":"Mussington","email":"jmussingtonb@walmart.com","gender":"Female","salary":8019},
{"id":13,"first_name":"Tull","last_name":"Tommaseo","email":"ttommaseoc@timesonline.co.uk","gender":"Male","salary":16621},
{"id":14,"first_name":"Paule","last_name":"Moro","email":"pmorod@un.org","gender":"Female","salary":19275},
{"id":15,"first_name":"Daron","last_name":"Clapson","email":"dclapsone@prlog.org","gender":"Female","salary":8717},
{"id":16,"first_name":"Kippy","last_name":"Mordey","email":"kmordeyf@toplist.cz","gender":"Male","salary":11246},
{"id":17,"first_name":"Cheston","last_name":"Banfield","email":"cbanfieldg@booking.com","gender":"Male","salary":7164},
{"id":18,"first_name":"Linoel","last_name":"L' Anglois","email":"llangloish@walmart.com","gender":"Male","salary":9980},
{"id":19,"first_name":"Serge","last_name":"Pawley","email":"spawleyi@eventbrite.com","gender":"Male","salary":3122},
{"id":20,"first_name":"Winslow","last_name":"Vergo","email":"wvergoj@webmd.com","gender":"Male","salary":10791},
{"id":21,"first_name":"Linell","last_name":"Pickthall","email":"lpickthallk@umn.edu","gender":"Female","salary":14491},
{"id":22,"first_name":"Konstanze","last_name":"Withey","email":"kwitheyl@meetup.com","gender":"Female","salary":7674},
{"id":23,"first_name":"Ravid","last_name":"Girardetti","email":"rgirardettim@nymag.com","gender":"Male","salary":12960},
{"id":24,"first_name":"Mariana","last_name":"Delwater","email":"mdelwatern@freewebs.com","gender":"Female","salary":12013},
{"id":25,"first_name":"Emmit","last_name":"Croasdale","email":"ecroasdaleo@clickbank.net","gender":"Male","salary":11277},
{"id":26,"first_name":"Staci","last_name":"Glader","email":"sgladerp@simplemachines.org","gender":"Female","salary":17575},
{"id":27,"first_name":"Hanan","last_name":"Benley","email":"hbenleyq@ifeng.com","gender":"Male","salary":9609},
{"id":28,"first_name":"Latisha","last_name":"Heddan","email":"lheddanr@umich.edu","gender":"Non-binary","salary":14013},
{"id":29,"first_name":"Cart","last_name":"Stokoe","email":"cstokoes@bbb.org","gender":"Male","salary":15697},
{"id":30,"first_name":"Cale","last_name":"Keerl","email":"ckeerlt@redcross.org","gender":"Non-binary","salary":4272},
{"id":31,"first_name":"Fletch","last_name":"Simyson","email":"fsimysonu@e-recht24.de","gender":"Male","salary":2477},
{"id":32,"first_name":"Nerty","last_name":"Reyne","email":"nreynev@t.co","gender":"Female","salary":3443},
{"id":33,"first_name":"Farley","last_name":"Meegin","email":"fmeeginw@reddit.com","gender":"Male","salary":7986},
{"id":34,"first_name":"Moyna","last_name":"Farrah","email":"mfarrahx@cafepress.com","gender":"Female","salary":9268},
{"id":35,"first_name":"Krissy","last_name":"Irwin","email":"kirwiny@bloglines.com","gender":"Female","salary":5026},
{"id":36,"first_name":"Angelika","last_name":"Muro","email":"amuroz@prweb.com","gender":"Female","salary":3199},
{"id":37,"first_name":"Candi","last_name":"Balnaves","email":"cbalnaves10@google.com","gender":"Genderqueer","salary":18936},
{"id":38,"first_name":"Tymothy","last_name":"Deveril","email":"tdeveril11@tmall.com","gender":"Male","salary":15654},
{"id":39,"first_name":"Wiley","last_name":"Bessant","email":"wbessant12@people.com.cn","gender":"Male","salary":16540},
{"id":40,"first_name":"Benton","last_name":"Pargiter","email":"bpargiter13@ibm.com","gender":"Male","salary":17779},
{"id":41,"first_name":"Parke","last_name":"Sinyard","email":"psinyard14@hc360.com","gender":"Male","salary":7861},
{"id":42,"first_name":"Francklyn","last_name":"Lawtie","email":"flawtie15@washington.edu","gender":"Male","salary":6998},
{"id":43,"first_name":"Lindsy","last_name":"Callf","email":"lcallf16@umich.edu","gender":"Female","salary":17896},
{"id":44,"first_name":"Robinet","last_name":"Abbot","email":"rabbot17@japanpost.jp","gender":"Male","salary":18447},
{"id":45,"first_name":"Maiga","last_name":"O'Lochan","email":"molochan18@altervista.org","gender":"Female","salary":15128},
{"id":46,"first_name":"Consuelo","last_name":"Szreter","email":"cszreter19@abc.net.au","gender":"Female","salary":2669},
{"id":47,"first_name":"Marci","last_name":"Aristide","email":"maristide1a@dyndns.org","gender":"Female","salary":8932},
{"id":48,"first_name":"Renata","last_name":"A'Barrow","email":"rabarrow1b@ezinearticles.com","gender":"Female","salary":8784},
{"id":49,"first_name":"Claiborne","last_name":"Blanchard","email":"cblanchard1c@marriott.com","gender":"Male","salary":9545},
{"id":50,"first_name":"Kandace","last_name":"Kharchinski","email":"kkharchinski1d@diigo.com","gender":"Female","salary":5521},
{"id":51,"first_name":"Robinette","last_name":"Flewett","email":"rflewett1e@addtoany.com","gender":"Female","salary":16854},
{"id":52,"first_name":"John","last_name":"Gyorffy","email":"jgyorffy1f@a8.net","gender":"Male","salary":2008},
{"id":53,"first_name":"Geneva","last_name":"Synke","email":"gsynke1g@who.int","gender":"Female","salary":11748},
{"id":54,"first_name":"Franciskus","last_name":"Sturm","email":"fsturm1h@reuters.com","gender":"Male","salary":11691},
{"id":55,"first_name":"Ernestus","last_name":"Outibridge","email":"eoutibridge1i@fotki.com","gender":"Male","salary":7776},
{"id":56,"first_name":"Joycelin","last_name":"Mudle","email":"jmudle1j@epa.gov","gender":"Female","salary":3855},
{"id":57,"first_name":"Angel","last_name":"Fisk","email":"afisk1k@eepurl.com","gender":"Female","salary":18888},
{"id":58,"first_name":"Damaris","last_name":"Romi","email":"dromi1l@gnu.org","gender":"Female","salary":7324},
{"id":59,"first_name":"Nevile","last_name":"Cohr","email":"ncohr1m@tinypic.com","gender":"Polygender","salary":12517},
{"id":60,"first_name":"Poppy","last_name":"Rankling","email":"prankling1n@upenn.edu","gender":"Female","salary":4930},
{"id":61,"first_name":"Kirsti","last_name":"Gabrieli","email":"kgabrieli1o@pcworld.com","gender":"Female","salary":3863},
{"id":62,"first_name":"Quinton","last_name":"Jenicke","email":"qjenicke1p@jigsy.com","gender":"Male","salary":4081},
{"id":63,"first_name":"Tanny","last_name":"Freathy","email":"tfreathy1q@ft.com","gender":"Male","salary":19934},
{"id":64,"first_name":"Bartlet","last_name":"Venour","email":"bvenour1r@sun.com","gender":"Male","salary":6509},
{"id":65,"first_name":"Eddy","last_name":"Vanns","email":"evanns1s@webs.com","gender":"Female","salary":2815},
{"id":66,"first_name":"Lucien","last_name":"Foye","email":"lfoye1t@deliciousdays.com","gender":"Male","salary":14447},
{"id":67,"first_name":"Sumner","last_name":"Westrey","email":"swestrey1u@addthis.com","gender":"Male","salary":9025},
{"id":68,"first_name":"Carroll","last_name":"Boseley","email":"cboseley1v@gmpg.org","gender":"Male","salary":15638},
{"id":69,"first_name":"Murielle","last_name":"Redler","email":"mredler1w@amazon.co.uk","gender":"Female","salary":3655},
{"id":70,"first_name":"Goldina","last_name":"Perelli","email":"gperelli1x@istockphoto.com","gender":"Female","salary":3385},
{"id":71,"first_name":"Randy","last_name":"Bartosinski","email":"rbartosinski1y@360.cn","gender":"Female","salary":10776},
{"id":72,"first_name":"Denys","last_name":"Keats","email":"dkeats1z@paypal.com","gender":"Male","salary":17164},
{"id":73,"first_name":"Madelina","last_name":"Toombes","email":"mtoombes20@addtoany.com","gender":"Female","salary":19949},
{"id":74,"first_name":"Jacquenetta","last_name":"Maplethorp","email":"jmaplethorp21@gmpg.org","gender":"Female","salary":11039},
{"id":75,"first_name":"Hubert","last_name":"Lattimore","email":"hlattimore22@hibu.com","gender":"Male","salary":11137},
{"id":76,"first_name":"Francois","last_name":"Pydcock","email":"fpydcock23@myspace.com","gender":"Male","salary":4968},
{"id":77,"first_name":"Ronny","last_name":"Burford","email":"rburford24@usda.gov","gender":"Non-binary","salary":15814},
{"id":78,"first_name":"Ruy","last_name":"Thalmann","email":"rthalmann25@github.com","gender":"Male","salary":8049},
{"id":79,"first_name":"Malchy","last_name":"Jean","email":"mjean26@jalbum.net","gender":"Male","salary":14272},
{"id":80,"first_name":"Doralynn","last_name":"Guerner","email":"dguerner27@ustream.tv","gender":"Female","salary":14685},
{"id":81,"first_name":"Jaquenette","last_name":"Allbut","email":"jallbut28@icq.com","gender":"Female","salary":2766},
{"id":82,"first_name":"Orlan","last_name":"Styche","email":"ostyche29@nih.gov","gender":"Male","salary":8134},
{"id":83,"first_name":"Calvin","last_name":"Alyonov","email":"calyonov2a@hc360.com","gender":"Male","salary":5635},
{"id":84,"first_name":"Bendite","last_name":"London","email":"blondon2b@house.gov","gender":"Female","salary":12993},
{"id":85,"first_name":"Nerissa","last_name":"Kitteringham","email":"nkitteringham2c@wufoo.com","gender":"Female","salary":7877},
{"id":86,"first_name":"Cherlyn","last_name":"Wank","email":"cwank2d@latimes.com","gender":"Female","salary":16250},
{"id":87,"first_name":"Clemence","last_name":"Bonhan","email":"cbonhan2e@army.mil","gender":"Female","salary":14262},
{"id":88,"first_name":"Hildagarde","last_name":"Dimmne","email":"hdimmne2f@lycos.com","gender":"Female","salary":3405},
{"id":89,"first_name":"Gabbi","last_name":"Battista","email":"gbattista2g@about.me","gender":"Female","salary":18938},
{"id":90,"first_name":"Anallise","last_name":"Emps","email":"aemps2h@tripod.com","gender":"Female","salary":11124},
{"id":91,"first_name":"Linn","last_name":"Moreside","email":"lmoreside2i@prlog.org","gender":"Male","salary":12448},
{"id":92,"first_name":"Marrilee","last_name":"Ferrettino","email":"mferrettino2j@yellowpages.com","gender":"Female","salary":10369},
{"id":93,"first_name":"Clementina","last_name":"Duly","email":"cduly2k@loc.gov","gender":"Bigender","salary":14726},
{"id":94,"first_name":"Cornelius","last_name":"Chatainier","email":"cchatainier2l@1und1.de","gender":"Male","salary":16137},
{"id":95,"first_name":"Ev","last_name":"Hammerstone","email":"ehammerstone2m@i2i.jp","gender":"Male","salary":16590},
{"id":96,"first_name":"Georgianna","last_name":"Caldroni","email":"gcaldroni2n@ifeng.com","gender":"Female","salary":4778},
{"id":97,"first_name":"Lowell","last_name":"Everington","email":"leverington2o@devhub.com","gender":"Male","salary":16419},
{"id":98,"first_name":"Neilla","last_name":"Quantrill","email":"nquantrill2p@sfgate.com","gender":"Female","salary":19528},
{"id":99,"first_name":"Olia","last_name":"Scamerdine","email":"oscamerdine2q@goo.gl","gender":"Female","salary":15452},
{"id":100,"first_name":"Charo","last_name":"Pepon","email":"cpepon2r@springer.com","gender":"Polygender","salary":5614}]`;

// 합계, 평군......구하는 함수.
function getMemberInfo(memberAry) {
  let sum = 0; // memberAry급여 합.
  let sumOfMale = 0; // Gender가 'Male'인 합계.
  let avg = 0; // 전체평균.
  let avgOfMale = 0; // 남자평균
  let cntOfMale = 0; // 남자인원.

  for (let elem of memberAry) {
    sum += elem.salary; // 전체합계.
    sum = sum + elem.salary;
    if (elem.gender == "Male") {
      sumOfMale += elem.salary;
      cntOfMale++; // 남자 몇명인지 카운트.
    }
  }

  avg = sum / memberAry.length; // 전체평균.
  avgOfMale = sumOfMale / cntOfMale; // 남자평균.

  // 객체.
  return {
    sum,
    sumOfMale,
    avg,
    avgOfMale,
  };
}
// end of getMemberInfo()

const ary1 = JSON.parse(jsonData1);
let result = getMemberInfo(ary1);

console.log(
  `전체 급여합계는 ${result.sum}
  , 전체 급여평균은 ${result.avg}
  , 남자 합계급여는 ${result.sumOfMale}
  , 남자 평균급여는 ${result.avgOfMale}`
);

let jsonStr = `{"name": "Hong"}`;
let obj = JSON.parse(jsonStr); // 문자열 => 객체.
let jsonStr2 = JSON.stringify(obj); // 객체 => 문자열.
console.log(jsonStr);
console.log(obj);
console.log(jsonStr2);
