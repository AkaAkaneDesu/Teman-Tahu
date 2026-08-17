const CHARACTERS = [
  {
    id: 'andriana',
    name: 'Andriana',
    age: '12 Tahun',
    sifat: 'Mandiri, berani bertanya, berpikir logis.',
    latarBelakang: 'Sahabat masa kecil Andre yang menghadapi menstruasi pertama (menarche) dan masa pubertas. Ia belajar memahami perubahan fisik, menjaga privasi tubuh, serta memilah mitos dari fakta.',
    gejala: 'Mengalami menstruasi pertama (menarche), perubahan emosional, dan berani berkomunikasi dengan orang tua.',
    image: 'assets/Title_Screen/Andriana_Selection.png',
    bg: 'assets/Title_Screen/bg_andriana.png',
    color: '#06b6d4',
    shadow: 'rgba(6, 182, 212, 0.45)'
  },
  {
    id: 'andre',
    name: 'Andre',
    age: '12 Tahun',
    sifat: 'Pemalu, gengsi tinggi, penuh rasa ingin tahu.',
    latarBelakang: 'Menghadapi masa pubertas dengan bingung. Takut bertanya kepada orang tua karena dianggap tabu, ia mencari jawaban dari temannya yang menyebarkan mitos.',
    gejala: 'Jantung berdebar, merasa tegang, dan cemas saat berinteraksi.',
    image: 'assets/Title_Screen/Andre_Selection.png',
    bg: 'assets/Title_Screen/bg_andre.png',
    color: '#f97316',
    shadow: 'rgba(249, 115, 22, 0.45)'
  }
];

const PROLOGUE_DIALOGUES = [
  {
    speaker: null,
    text: "Dulu semuanya terasa biasa saja.",
    isFlashback: false,
    isBlackscreen: false
  },
  {
    speaker: null,
    text: "Aku agak lupa sejak kapan pastinya kenal dengan Andriana, yang pasti itu sudah terjadi lama sekali... Mungkin dari TK? Atau bahkan sebelum itu? Entahlah, yang pasti aku dan Andriana tetanggaan dan rumah kami berseberangan..",
    isFlashback: false,
    isBlackscreen: false
  },
  {
    speaker: "Emaknya Andre",
    text: "...eh iya. Ngomong-ngomong anaknya umur berapa mbak?",
    badgeBg: "#0f172a",
    isFlashback: true,
    isBlackscreen: false
  },
  {
    speaker: "Emaknya Andriana",
    text: "Ohh tahun ini 5 tahun, mbak.",
    badgeBg: "#06b6d4",
    isFlashback: true,
    isBlackscreen: false
  },
  {
    speaker: "Emaknya Andre",
    text: "Lhoo ternyata seumuran ya sama anakku... (manggil Andre) Eh Andre sini dulu dong, salim sama tante. Tante ini baru pindah lho kesini.",
    badgeBg: "#0f172a",
    isFlashback: true,
    isBlackscreen: false
  },
  {
    speaker: "Emaknya Andriana",
    text: "Oalahh ini toh anaknya, ganteng yah, nama kamu siapa?",
    badgeBg: "#06b6d4",
    isFlashback: true,
    isBlackscreen: false
  },
  {
    speaker: "Andre",
    text: "Eh eum.. nama aku Andre te…",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Concern.png",
    isFlashback: true,
    isBlackscreen: false
  },
  {
    speaker: "Emaknya Andriana",
    text: "Halo Andre, kamu mau nggak jadi temennya anaknya tante? Namanya Andriana, dia seumuran sama kamu kok.",
    badgeBg: "#06b6d4",
    isFlashback: true,
    isBlackscreen: false
  },
  {
    speaker: null,
    text: "(Tiba-tiba keliatan Andriana lagi ngintip di balik jendela rumahnya, ternyata si bro udah ngintipin emaknya dari tadi)",
    sprite: "assets/Andriana/Andriana_Smile.png",
    isFlashback: true,
    isBlackscreen: false
  },
  {
    speaker: "Andre",
    text: "Eh, oh- bboleh te.",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Confuse.png",
    isFlashback: true,
    isBlackscreen: false
  },
  {
    speaker: "Emaknya Andriana",
    text: "Asyikkk, Andre jangan malu-malu gitu dong sama tante. Besok Andre ketemuan ya sama Andriana.",
    badgeBg: "#06b6d4",
    isFlashback: true,
    isBlackscreen: false
  },
  {
    speaker: null,
    text: "Sejak kecil, kami sering bermain bareng dan melakukan semua hal bersama. Kadang Andriana ke rumahku, kadang aku yang ke rumah Andriana. Mungkin itu yang membuatku dekat dengan Andriana, seakan tidak ada jarak lagi diantara kami berdua…",
    sprite: "assets/Andre/Andre_Talking_Smile.png",
    isFlashback: false,
    isBlackscreen: false
  },
  {
    speaker: null,
    text: "Sampai suatu hari... kami mulai berubah.",
    sprite: "assets/Andre/Andre_Concern.png",
    isFlashback: false,
    isBlackscreen: true
  }
];

const CHAPTER_1_ANDRE_GRAPH = {
  start: {
    speaker: "Emaknya Andre",
    badgeBg: "#0f172a",
    sprite: "assets/Andre/Andre_Flat.png",
    bgType: "room",
    text: "Andree, bangun yuk. Hari ini hari pertama masuk sekolah di kelas 8 lho. Masa baru hari pertama udah telat aja sih.",
    next: "pagi_2"
  },
  pagi_2: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Flat.png",
    bgType: "room",
    text: "Haeh? 5 menit lagi ma.. zzzzz",
    next: "pagi_3"
  },
  pagi_3: {
    speaker: "Emaknya Andre",
    badgeBg: "#0f172a",
    sprite: "assets/Andre/Andre_Flat.png",
    bgType: "room",
    text: "Aduhai Andreee, ini udah 5 menitmu yang ketiga kali. Pokoknya kalo sampe jamnya dan kamu enggak bangun, mama enggak mau bangunin kamu!",
    next: "pagi_4"
  },
  pagi_4: {
    speaker: null,
    sprite: "assets/Andre/Andre_Flat.png",
    bgType: "room",
    text: "(Si Andre ketiduran 10 menit...)",
    next: "pagi_5"
  },
  pagi_5: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Confuse2.png",
    bgType: "room",
    text: "Hoaamm… LHO KOK UDAH JAM SEGINI?? Aku harus segera siap-siap kalo gitu!",
    next: "pagi_6"
  },
  pagi_6: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Talking.png",
    bgType: "room",
    text: "Ma, Andre berangkat dulu ya!",
    next: "pagi_7"
  },
  pagi_7: {
    speaker: "Emaknya Andre",
    badgeBg: "#0f172a",
    sprite: "assets/Andre/Andre_Idle.png",
    bgType: "room",
    text: "Iya nak, hati-hati ya!",
    next: "otw_school"
  },
  otw_school: {
    speaker: null,
    sprite: "assets/Andre/Andre_Idle.png",
    bgType: "street_1",
    text: "(Andre berjalan kaki terburu-buru menuju sekolah...)",
    next: "class_1"
  },
  class_1: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Smile.png",
    bgType: "school",
    text: "Pagii Andree, lho kamu kok kayak capek banget? Abis ngapain?",
    next: "class_2"
  },
  class_2: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Concern.png",
    bgType: "school",
    text: "Oh, eh- pagi? Andriana, eh anu- aku tadi abis buru-buru buat ke sekolah soalnya aku bangun kesiangan  jadinya pas berangkat tadi aku langsung cepetan lari.",
    next: "class_3"
  },
  class_3: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Smile.png",
    bgType: "school",
    text: "Walahh, untung kamu ga telat jadinya Ndree. Oh iya kita sekelas lagi ya ternyata di kelas 8 hehe.",
    next: "class_4"
  },
  class_4: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Confuse.png",
    bgType: "school",
    text: "Hehehe iya nihh- (Andre yang liat Andriana senyum langsung reflek memalingkan mukanya)",
    next: "class_5"
  },
  class_5: {
    speaker: null,
    sprite: "assets/Andre/Andre_Confuse.png",
    bgType: "school",
    text: "(Bentar, kenapa aku tiba-tiba malingin muka ya tadi? Kok aku jadi malu-malu ya sama Andriana? Dipikir-pikir dia kayak makin cantik sih?)",
    next: "break_1"
  },
  break_1: {
    speaker: "Budi",
    badgeBg: "#34d399",
    sprite: "assets/Budi/Budi_Goodmood.png",
    bgType: "class_back",
    text: "Woi Ndre, sini yuk join kami nonton film. Lagi asik nihh!",
    next: "break_2"
  },
  break_2: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Idle.png",
    bgType: "class_back",
    text: "Eh film apa itu Bud?",
    next: "break_3"
  },
  break_3: {
    speaker: "Budi",
    badgeBg: "#34d399",
    sprite: "assets/Budi/Budi_Talking.png",
    bgType: "class_back",
    text: "Udah sini dulu aja Ndre, pasti kamu suka!",
    next: "break_4"
  },
  break_4: {
    speaker: null,
    sprite: "assets/Budi/Budi_Senyum.png",
    bgType: "class_back",
    text: "(Ternyata Budi dan kawan-kawan sedang menonton film romansa/dewasa...)",
    next: "break_5"
  },
  break_5: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Concern.png",
    bgType: "class_back",
    text: "Eh- astagfirullah, emang kita boleh ya nonton ginian?",
    next: "break_6"
  },
  break_6: {
    speaker: "Budi",
    badgeBg: "#34d399",
    sprite: "assets/Budi/Budi_Talking2.png",
    bgType: "class_back",
    text: "Boleh dong, kita kan udah bukan 'anak kecil' lagi Ndre!",
    next: "break_7"
  },
  break_7: {
    speaker: null,
    sprite: "assets/Andre/Andre_Concern.png",
    bgType: "class_back",
    text: "(Andre yang awalnya tidak tertarik, lama-kelamaan menjadi penasaran dan ikut menonton hingga bel istirahat berbunyi)",
    next: "after_break_1"
  },
  after_break_1: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Confuse.png",
    bgType: "school",
    text: "Andree, itu tadi cowok-cowok lagi pada ngapain ya di belakang? Kelihatannya asik deh.",
    next: "after_break_2"
  },
  after_break_2: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Confuse.png",
    bgType: "school",
    text: "Eee anu- lagi nonton film.",
    next: "after_break_3"
  },
  after_break_3: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Confuse2.png",
    bgType: "school",
    text: "Film apa tuh emangnya-",
    next: "after_break_4"
  },
  after_break_4: {
    speaker: "Wali Kelas",
    badgeBg: "#0f172a",
    bgType: "school",
    text: "Siang anak-anak, berhubung hari ini adalah hari pertama masuk sekolah dan guru-guru rapat, kalian bisa langsung pulang setelah ini.",
    next: "after_break_5"
  },
  after_break_5: {
    speaker: "Sekelas",
    badgeBg: "#34d399",
    bgType: "school",
    text: "HOREEEEEEEEEEEEEEEEE!",
    next: "walk_home_1"
  },
  walk_home_1: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Chill.png",
    bgType: "street_2",
    text: "Haahh.. seandainya tiap hari kita bisa pulang cepet kayak sekarang…",
    next: "walk_home_2"
  },
  walk_home_2: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Talking_Smile.png",
    bgType: "street_2",
    text: "Hahaha iyaa, kalau kayak gitu terus kita bisa mabar PS di rumahku abis pulang sekolah.",
    next: "walk_home_3"
  },
  walk_home_3: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Smile.png",
    bgType: "street_2",
    text: "Bener bangett, BTW udah lama aku enggak main PS di rumahmu Ndre, masih ada kah PS-nya?",
    next: "walk_home_4"
  },
  walk_home_4: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Talking.png",
    bgType: "street_2",
    text: "Masih adaa, belum ku jual kokk santai aja.",
    next: "walk_home_5"
  },
  walk_home_5: {
    speaker: "Budi",
    badgeBg: "#34d399",
    sprite: "assets/Budi/Budi_Goodmood.png",
    bgType: "street_2",
    text: "(Naik sepeda listrik) Oi Ndree, mau ikut gua enggak ke rumah si Roni?",
    next: "walk_home_6"
  },
  walk_home_6: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Idle.png",
    bgType: "street_2",
    text: "Mau ngapain tuh emangnya?",
    next: "walk_home_7"
  },
  walk_home_7: {
    speaker: "Budi",
    badgeBg: "#34d399",
    sprite: "assets/Budi/Budi_Senyum.png",
    bgType: "street_2",
    text: "Ngelanjutin nonton yang tadi lahh, lu mau ikut enggak? Nanti gua tebengin!",
    next: "choice_branch_1"
  },

  choice_branch_1: {
    isChoice: true,
    question: "Apakah Andre akan ikut Budi ke rumah Roni?",
    options: [
      { text: "Iya, ikut Budi nonton film di rumah Roni", target: "branch_a_start" },
      { text: "Enggak, memilih pulang bareng Andriana", target: "branch_b_start" }
    ]
  },

  branch_a_start: {
    speaker: null,
    sprite: "assets/Andre/Andre_Concern.png",
    bgType: "street",
    text: "(Mending ku iyain ajakan Budi atau enggak ya? Aku merasa bersalah kalau nonton itu, tapi penasaran sih sama lanjutannya... Rasa penasaranku jauh lebih besar!)",
    next: "branch_a_2"
  },
  branch_a_2: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Talking.png",
    bgType: "street",
    text: "Boleh deh Bud!",
    next: "branch_a_3"
  },
  branch_a_3: {
    speaker: "Budi",
    badgeBg: "#34d399",
    sprite: "assets/Budi/Budi_Goodmood.png",
    bgType: "street",
    text: "Oke gas, sini naik!",
    next: "branch_a_4"
  },
  branch_a_4: {
    speaker: null,
    sprite: "assets/Andre/Andre_Idle.png",
    bgType: "roni_house",
    text: "(Di rumah Roni, Andre dan kawan-kawan menonton video bersama...)",
    next: "branch_a_5"
  },
  branch_a_5: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Concern.png",
    bgType: "roni_house",
    text: "(Gulp...) Aku jadi penasaran deh rasanya gimana.",
    next: "branch_a_6"
  },
  branch_a_6: {
    speaker: "Budi",
    badgeBg: "#34d399",
    sprite: "assets/Budi/Budi_Talking.png",
    bgType: "roni_house",
    text: "Banh, mau ikut aku gak kapan-kapan ke party? Kamu katanya mau nyari kenalan baru Ndre.",
    next: "branch_a_7"
  },
  branch_a_7: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Talking.png",
    bgType: "roni_house",
    text: "Emm,,,, itu-",
    next: "choice_branch_2"
  },

  choice_branch_2: {
    isChoice: true,
    question: "Apakah Andre mau ikut Budi ke party sabtu besok?",
    options: [
      { text: "Ikut Budi ke Party", target: "branch_a1_start" },
      { text: "Enggak, memilih cari di sosmed & chat Andriana", target: "branch_a2_start" }
    ]
  },

  branch_a1_start: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Talking_Smile.png",
    bgType: "roni_house",
    text: "Gas Bud!",
    next: "branch_a1_2"
  },
  branch_a1_2: {
    speaker: "Budi",
    badgeBg: "#34d399",
    sprite: "assets/Budi/Budi_Goodmood.png",
    bgType: "roni_house",
    text: "Anjay, yaudah. Sabtu besok ya Ndre, nanti ku jemput sama yang lain.",
    next: "branch_a1_3"
  },
  branch_a1_3: {
    speaker: "Budi",
    badgeBg: "#34d399",
    sprite: "assets/Budi/Budi_Talking.png",
    bgType: "roni_house",
    text: "Yo Ndre buruan udah ditunggu anak-anak nih woi!",
    next: "branch_a1_4"
  },
  branch_a1_4: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Talking.png",
    bgType: "roni_house",
    text: "Oke Bud, bentar!",
    next: "branch_a1_5"
  },
  branch_a1_5: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Talking2.png",
    bgType: "park",
    text: "Eh Bud, video yang kemarin itu asik anjir. Kira-kira nonton gituan dimana dah?",
    next: "branch_a1_6"
  },
  branch_a1_6: {
    speaker: "Budi",
    badgeBg: "#34d399",
    sprite: "assets/Budi/Budi_Talking2.png",
    bgType: "park",
    text: "Biasanya aku sih nemu di sosmed kaya Twitter.",
    next: "branch_a1_7"
  },
  branch_a1_7: {
    speaker: "Budi",
    badgeBg: "#34d399",
    sprite: "assets/Budi/Budi_Senyum.png",
    bgType: "park",
    text: "Lah kamu bukannya deket sama Andriana? Coba ngomong ke dia kali aja mau wkwk.",
    next: "branch_a1_8"
  },
  branch_a1_8: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Confuse.png",
    bgType: "park",
    text: "Eh Ndre? Tumben sendiri aja di taman?",
    next: "branch_a1_9"
  },
  branch_a1_9: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Talking.png",
    bgType: "park",
    text: "Oh, halo Andriana.. iya nih lagi sendirian. Oh iya tau ga kemarin aku habis lihat film tau.",
    next: "branch_a1_10"
  },
  branch_a1_10: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Confuse2.png",
    bgType: "park",
    text: "Huh? Nonton apa emangnya? Coba lihat dong Ndre.",
    next: "branch_a1_11"
  },
  branch_a1_11: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Talking3.png",
    bgType: "park",
    text: "Nih lihat! (Menunjukkan video tidak senonoh)",
    next: "branch_a1_12"
  },
  branch_a1_12: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Mad.png",
    bgType: "park",
    text: "YAAMPUNNNN ANDREE!!!!! Kamu aneh deh! Aku mau pergi!",
    next: "choice_branch_3"
  },

  choice_branch_3: {
    isChoice: true,
    question: "Sikap Andre setelah Andriana marah di taman:",
    options: [
      { text: "Cuek & Dendam (Terjerumus Pergaulan Bebas)", target: "trigger_ending_bad" },
      { text: "Menjauh & Bertanya pada Mama di rumah", target: "branch_a_good_talk" }
    ]
  },

  branch_a2_start: {
    speaker: null,
    sprite: "assets/Andre/Andre_Flat.png",
    bgType: "room",
    text: "(Andre mulai mencari video di internet dan mengirimkannya ke Andriana selama beberapa hari berturut-turut. Andriana yang resah melaporkan ke ibunya, lalu Ibu Andriana menelpon Ibu Andre)",
    next: "branch_a2_2"
  },
  branch_a2_2: {
    speaker: "Emaknya Andre",
    badgeBg: "#0f172a",
    sprite: "assets/Andre/Andre_Confuse2.png",
    bgType: "room",
    text: "ANDREEEEE!!! (Banting pintu kamar)",
    next: "branch_a2_3"
  },
  branch_a2_3: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Concern.png",
    bgType: "room",
    text: "Kenapa ma?",
    next: "branch_a2_4"
  },
  branch_a2_4: {
    speaker: "Emaknya Andre",
    badgeBg: "#0f172a",
    sprite: "assets/Andre/Andre_Concern.png",
    bgType: "room",
    text: "Apa ini yang mama lihat?!!! (Menunjukkan bukti pesan dari Mamanya Andriana)",
    next: "branch_a2_5"
  },
  branch_a2_5: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Talking2.png",
    bgType: "room",
    text: "Kan cuman guyon ma...",
    next: "branch_a_good_talk"
  },

  branch_a_good_talk: {
    speaker: "Emaknya Andre",
    badgeBg: "#0f172a",
    sprite: "assets/Andre/Andre_Concern.png",
    bgType: "room",
    text: "Andre... ini bukan guyon nak, ini gak baik. Pantes aja Andriana marah. Besok ikut mama ke rumahnya Andriana untuk minta maaf!",
    next: "good_2"
  },
  good_2: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Idle.png",
    bgType: "room",
    text: "Iya ma… maaf ya ma, Andre udah bikin mama marah.",
    next: "good_3"
  },
  good_3: {
    speaker: null,
    sprite: "assets/Andre/Andre_Idle.png",
    bgType: "street_3",
    text: "(Keesokan harinya, Andre dan Mamanya pergi mengunjungi rumah Andriana...)",
    next: "good_4"
  },
  good_4: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Talking2.png",
    bgType: "andriana_house",
    text: "(Mengetuk pintu kamar Andriana) Andrianaa, ini aku Andre. Bisa bukain pintu ngga? Aku mau ngomong nih...",
    next: "good_5"
  },
  good_5: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Confuse.png",
    bgType: "andriana_house",
    text: "Iya, ada apa Andre?",
    next: "good_6"
  },
  good_6: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Sad.png",
    bgType: "andriana_house",
    text: "Aku minta maaf ya kemarin sudah berlebihan...",
    next: "good_7"
  },
  good_7: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Sad.png",
    bgType: "andriana_house",
    text: "Tapi aku tersinggung sama apa yang kamu lakukan kemarin.",
    next: "good_8"
  },
  good_8: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Smile.png",
    bgType: "andriana_house",
    text: "Janji yah gak gitu lagi? Kalo kamu gitu lagi aku gamau temenan sama kamu! (Mengeluarkan jari kelingking)",
    next: "good_9"
  },
  good_9: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Talking_Smile.png",
    bgType: "andriana_house",
    text: "Iya janji! (Menjabat kelingking Andriana)",
    next: "good_10"
  },
  good_10: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Smile.png",
    bgType: "andriana_house",
    text: "Yaudah yuk kita mabar Bublox!",
    next: "good_11"
  },
  good_11: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Talking_Smile.png",
    bgType: "andriana_house",
    text: "Gass!",
    next: "trigger_ending_good"
  },

  branch_b_start: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Talking2.png",
    bgType: "street_3",
    text: "Eum.. kayaknya gak dulu deh Bud, aku dah ada janji nih sama Andriana.",
    next: "branch_b_2"
  },
  branch_b_2: {
    speaker: "Budi",
    badgeBg: "#34d399",
    sprite: "assets/Budi/Budi_uhhhhhhh.png",
    bgType: "street_3",
    text: "Ciee ciee, ada apa nih?",
    next: "branch_b_3"
  },
  branch_b_3: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Talking3.png",
    bgType: "street_3",
    text: "Ah apaan sih Bud, gak jelas!",
    next: "branch_b_4"
  },
  branch_b_4: {
    speaker: "Budi",
    badgeBg: "#34d399",
    sprite: "assets/Budi/Budi_Kaget.png",
    bgType: "street_3",
    text: "Yaudah lah, aku duluan yak!",
    next: "branch_b_5"
  },
  branch_b_5: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Idle.png",
    bgType: "street_3",
    text: "Eh Andriana kamu tau gak sih, tadi kan aku nonton film ya sama Budi. Ceweknya itu pake pakaian yang terbuka gitu, kayaknya kamu cocok pake pakaian yang kek begitu.",
    next: "branch_b_6"
  },
  branch_b_6: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Confuse.png",
    bgType: "street_3",
    text: "Ah gamau, aku malu...",
    next: "branch_b_7"
  },
  branch_b_7: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Talking_Smile.png",
    bgType: "street_3",
    text: "Udah gak apa, pake aja. Kamu pasti bakal cantik deh!",
    next: "branch_b_8"
  },
  branch_b_8: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Mad.png",
    bgType: "street_3",
    text: "Kalo aku bilang gamau ya gamau Ndre! Kamu kenapa sih kok jadi gini?! Tinggalin aku sendiri!",
    next: "branch_b_9"
  },
  branch_b_9: {
    speaker: "Emaknya Andre",
    badgeBg: "#0f172a",
    sprite: "assets/Andre/Andre_Concern.png",
    bgType: "street_3",
    text: "(Menguping) Hei Andre, berani-beraninya ngomong kayak gitu sama cewek! Minta maaf ke Andriana sekarang!",
    next: "branch_b_10"
  },
  branch_b_10: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Talking3.png",
    bgType: "room",
    text: "TAK NAK! (Banting pintu kamar)",
    next: "branch_b_11"
  },
  branch_b_11: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Sad.png",
    bgType: "room",
    text: "(Sambil menangis di kamar) Huu... huu... aku kan ga ngapa-ngapain. Aku kan cuma ngasih saran aja...",
    next: "branch_b_12"
  },
  branch_b_12: {
    speaker: "Emaknya Andre",
    badgeBg: "#0f172a",
    sprite: "assets/Andre/Andre_Concern.png",
    bgType: "room",
    text: "Andre, kamu sekarang kan sudah mulai masuk masa pubertas ya.",
    next: "branch_b_13"
  },
  branch_b_13: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Confuse.png",
    bgType: "room",
    text: "Pubertas itu apa ma?",
    next: "branch_b_14"
  },
  branch_b_14: {
    speaker: "Emaknya Andre",
    badgeBg: "#0f172a",
    sprite: "assets/Andre/Andre_Idle.png",
    bgType: "room",
    text: "Pubertas itu masa ketika tubuh kamu mulai berubah dari tubuh anak-anak menuju tubuh orang dewasa. Suara berubah, badan bertambah tinggi, dan ada perubahan hormon.",
    next: "branch_b_15"
  },
  branch_b_15: {
    speaker: "Emaknya Andre",
    badgeBg: "#0f172a",
    sprite: "assets/Andre/Andre_Idle.png",
    bgType: "room",
    text: "Rasa penasaran itu wajar, tapi tubuh setiap orang harus dihargai. Kalau Andriana bilang tidak mau, kamu harus menghargai pilihannya. Jangan dipaksa!",
    next: "branch_b_16"
  },
  branch_b_16: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Sad.png",
    bgType: "room",
    text: "Ohh gitu ya ma, sekarang Andre merasa bersalah ke Andriana. Andre harus minta maaf ke dia.",
    next: "good_3"
  }
};

const CHAPTER_1_ANDRIANA_GRAPH = {
  start: {
    speaker: "Emaknya Andriana",
    badgeBg: "#06b6d4",
    bgType: "andriana_house",
    text: "Andriana udah bangun?",
    next: "andriana_1"
  },
  andriana_1: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Smile.png",
    bgType: "andriana_house",
    text: "Udah bund.",
    next: "andriana_2"
  },
  andriana_2: {
    speaker: "Emaknya Andriana",
    badgeBg: "#06b6d4",
    bgType: "andriana_house",
    text: "Ayo buruan berangkat sekolah ya nak, bunda takut kamu telat nak.",
    next: "andriana_3"
  },
  andriana_3: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Chill.png",
    bgType: "andriana_house",
    text: "Iya bund, Andriana pamit dulu ya.",
    next: "andriana_4"
  },
  andriana_4: {
    speaker: "Emaknya Andriana",
    badgeBg: "#06b6d4",
    bgType: "andriana_house",
    text: "Hati-hati ya nak!",
    next: "andriana_school_1"
  },
  andriana_school_1: {
    speaker: null,
    sprite: "assets/Andriana/Andriana_Confuse.png",
    bgType: "school",
    text: "(Di dalam kelas, Andriana melihat Andre yang baru sampai) Kenapa aku tiap ada Andre ngeliatin dia mulu ya? Apaan sih aku aneh...",
    next: "andriana_school_2"
  },
  andriana_school_2: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Smile.png",
    bgType: "school",
    text: "Pagii Andree, lho kamu kok kayak capek banget? Abis ngapain?",
    next: "andriana_school_3"
  },
  andriana_school_3: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Talking.png",
    bgType: "school",
    text: "Oh, eh- pagi? Andriana, eh anu- aku tadi abis buru-buru buat ke sekolah soalnya aku bangun kesiangan  jadinya pas berangkat tadi aku langsung cepetan lari.",
    next: "andriana_school_4"
  },
  andriana_school_4: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Smile.png",
    bgType: "school",
    text: "Walahh, untung kamu ga telat jadinya Ndree. Oh iya kita sekelas lagi ya ternyata di kelas 8 hehe.",
    next: "andriana_school_5"
  },
  andriana_school_5: {
    speaker: "Andre",
    badgeBg: "#f97316",
    sprite: "assets/Andre/Andre_Confuse.png",
    bgType: "school",
    text: "Hehehe iya nihh- (Andre reflek memalingkan mukanya)",
    next: "andriana_school_6"
  },
  andriana_school_6: {
    speaker: null,
    sprite: "assets/Andriana/Andriana_Confuse2.png",
    bgType: "school",
    text: "(Dalam hati Andriana: Eh kenapa dia malingin mukanya? Aku salah apa?)",
    next: "andriana_break_1"
  },
  andriana_break_1: {
    speaker: "Teman A",
    badgeBg: "#fbbf24",
    bgType: "class_back",
    text: "Gurrrrlll wasssup gimanah ni kabar persilatan dunia?",
    next: "andriana_break_2"
  },
  andriana_break_2: {
    speaker: "Teman B",
    badgeBg: "#f472b6",
    bgType: "class_back",
    text: "Eh Andriana kok bengong ajah?",
    next: "andriana_break_3"
  },
  andriana_break_3: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Confuse.png",
    bgType: "class_back",
    text: "Eh- e-enggak kok gak kenapa-kenapa...",
    next: "andriana_break_4"
  },
  andriana_break_4: {
    speaker: "Teman A",
    badgeBg: "#fbbf24",
    bgType: "class_back",
    text: "Pasti dia mikirin si Andre ya.. cieeee ada apa nih!",
    next: "andriana_break_5"
  },
  andriana_break_5: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Mad.png",
    bgType: "class_back",
    text: "Enggak! A-aku lagi ga mikirin dia!",
    next: "andriana_break_6"
  },
  andriana_break_6: {
    speaker: "Teman C",
    badgeBg: "#34d399",
    bgType: "class_back",
    text: "Afh iyhhh?",
    next: "andriana_break_7"
  },
  andriana_break_7: {
    speaker: "Teman B",
    badgeBg: "#f472b6",
    bgType: "class_back",
    text: "Eh Na emangnya kamu sama Andre tuh udah berteman dari kapan? Kayaknya udah deket banget kamu sama dia.",
    next: "andriana_break_8"
  },
  andriana_break_8: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Chill.png",
    bgType: "class_back",
    text: "Ermm.. Andre tuh sebenernya tetangga aku guys.... Kami udah kenal kayaknya dari pas kami masih TK.",
    next: "andriana_break_9"
  },
  andriana_break_9: {
    speaker: "Teman B",
    badgeBg: "#f472b6",
    bgType: "class_back",
    text: "Hoalahh pantesan kalian kok deket banget.. bukan karena saling suka kan yah eh-",
    next: "andriana_break_10"
  },
  andriana_break_10: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Confuse.png",
    bgType: "class_back",
    text: "(Ngeblush dikit) Aku ngerasa aneh deh, akhir-akhir ini aku kayak merasa enggak nyaman sama diriku sendiri...",
    next: "andriana_break_11"
  },
  andriana_break_11: {
    speaker: "Teman A",
    badgeBg: "#fbbf24",
    bgType: "class_back",
    text: "Kenapa tuh kira-kira?",
    next: "andriana_break_12"
  },
  andriana_break_12: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Confuse2.png",
    bgType: "class_back",
    text: "Entahlah kek, deg-degan terus tiap bareng sama Andre...",
    next: "andriana_break_13"
  },
  andriana_break_13: {
    speaker: "Teman B",
    badgeBg: "#f472b6",
    bgType: "class_back",
    text: "Cieeeeeeee!",
    next: "andriana_break_14"
  },
  andriana_break_14: {
    speaker: "Teman C",
    badgeBg: "#34d399",
    bgType: "class_back",
    text: "Ya itu artinya kamu suka sama dia Na!",
    next: "andriana_break_15"
  },
  andriana_break_15: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Sad.png",
    bgType: "class_back",
    text: "Emangnya iya? Padahal dari tadi pagi si Andre memalingkan mukanya dari aku tahu, keknya dia gasuka aku deh…",
    next: "andriana_break_16"
  },
  andriana_break_16: {
    speaker: "Teman B",
    badgeBg: "#f472b6",
    bgType: "class_back",
    text: "Lho ya siapa bilang, bisa aja dia juga malu-malu!",
    next: "andriana_break_17"
  },
  andriana_break_17: {
    speaker: "Teman A",
    badgeBg: "#fbbf24",
    bgType: "class_back",
    text: "Udahh gausah dipikirin terus, kalo kamu masih belum yakin sama perasaanmu gausah buru-buru nyimpulin. Btw udah ada guru tuh, balik yuk!",
    next: "andriana_class_cramp"
  },
  andriana_class_cramp: {
    speaker: null,
    sprite: "assets/Andriana/Andriana_Sad.png",
    bgType: "school",
    text: "(Saat pelajaran berlangsung, perut Andriana mendadak terasa kram dan tidak nyaman...)",
    next: "andriana_home_shock"
  },
  andriana_home_shock: {
    speaker: null,
    sprite: "assets/Andriana/Andriana_Cry.png",
    bgType: "andriana_house",
    text: "(Pulang sekolah, Andriana mengganti baju di toilet rumah dan kaget melihat bercak darah di celananya!) HAH?? Ini apa?! Kok ada darah?! Aku kenapa?! Jangan-jangan aku sakit... duh aku harus bilang ke siapa ya?",
    next: "andriana_choice_branch"
  },

  andriana_choice_branch: {
    isChoice: true,
    question: "Apa yang harus dilakukan Andriana saat menemukan bercak darah menstruasi pertama?",
    options: [
      { text: "Tanya ke Teman-Teman via Chat", target: "andriana_chat_friends_start" },
      { text: "Tanya Langsung ke Mama", target: "andriana_talk_mother_start" }
    ]
  },

  andriana_chat_friends_start: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Confuse.png",
    bgType: "andriana_house",
    text: "(Mengirim pesan di grup chat teman-teman) Guys, aku mau nanya sesuatu… tapi jangan diketawain ya ... Tadi aku ke toilet terus ada darah di celana dalamku…",
    next: "andriana_chat_1"
  },
  andriana_chat_1: {
    speaker: "Teman B",
    badgeBg: "#f472b6",
    bgType: "andriana_house",
    text: "What?! Kamu mens kali Na!",
    next: "andriana_chat_2"
  },
  andriana_chat_2: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Confuse.png",
    bgType: "andriana_house",
    text: "Mens? Menstruasi? Tapi aku belum pernah…",
    next: "andriana_chat_3"
  },
  andriana_chat_3: {
    speaker: "Teman C",
    badgeBg: "#34d399",
    bgType: "andriana_house",
    text: "Wah berarti itu menstruasi pertama kamu dong! Congrats ya Naa!",
    next: "andriana_chat_4"
  },
  andriana_chat_4: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Confuse2.png",
    bgType: "andriana_house",
    text: "Weh terus aku harus gimana?",
    next: "andriana_chat_5"
  },
  andriana_chat_5: {
    speaker: "Teman A",
    badgeBg: "#fbbf24",
    bgType: "andriana_house",
    text: "Katanya kalau lagi menstruasi enggak boleh minum es, nanti darahnya beku dan lebih banyak!",
    next: "andriana_chat_6"
  },
  andriana_chat_6: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Cry.png",
    bgType: "andriana_house",
    text: "HAHH?? Kenapa?!",
    next: "andriana_chat_7"
  },
  andriana_chat_7: {
    speaker: "Teman B",
    badgeBg: "#f472b6",
    bgType: "andriana_house",
    text: "Terus jangan keramas juga katanya, nanti bisa bikin sakit kepala!",
    next: "andriana_chat_8"
  },
  andriana_chat_8: {
    speaker: "Teman C",
    badgeBg: "#34d399",
    bgType: "andriana_house",
    text: "Eh, bukannya enggak boleh olahraga juga?",
    next: "andriana_chat_9"
  },
  andriana_chat_9: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Confuse2.png",
    bgType: "andriana_house",
    text: "Loh… terus aku boleh ngapain?",
    next: "andriana_chat_10"
  },
  andriana_chat_10: {
    speaker: "Teman A",
    badgeBg: "#fbbf24",
    bgType: "andriana_house",
    text: "Ya udah, mending jangan banyak gerak dulu.",
    next: "andriana_chat_11"
  },
  andriana_chat_11: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Sad.png",
    bgType: "andriana_house",
    text: "Tapi… aku sebenarnya sakit enggak sih?",
    next: "andriana_chat_12"
  },
  andriana_chat_12: {
    speaker: "Teman B",
    badgeBg: "#f472b6",
    bgType: "andriana_house",
    text: "Nggak tahu juga sih…",
    next: "andriana_chat_13"
  },
  andriana_chat_13: {
    speaker: null,
    sprite: "assets/Andriana/Andriana_Confuse2.png",
    bgType: "andriana_house",
    text: "(Andriana menatap layar HP-nya dengan bingung: Kok malah makin bingung ya… jadi aku sakit atau enggak? Terus yang mereka bilang itu bener semua enggak?)",
    next: "andriana_chat_14"
  },
  andriana_chat_14: {
    speaker: null,
    sprite: "assets/Andriana/Andriana_Chill.png",
    bgType: "andriana_house",
    text: "(Andriana keluar dari toilet dan melihat ke arah kamar Ibunya: Apa aku tanya mama aja ya...?)",
    next: "andriana_talk_mother_start"
  },

  andriana_talk_mother_start: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Sad.png",
    bgType: "andriana_house",
    text: "Emm, ma… celanaku kok ada darahnya ya? Aku takut ma…",
    next: "andriana_mom_1"
  },
  andriana_mom_1: {
    speaker: null,
    sprite: "assets/Andriana/Andriana_Smile.png",
    bgType: "andriana_house",
    text: "(Emaknya Andriana langsung tersenyum hangat dan memeluk Andriana)",
    next: "andriana_mom_2"
  },
  andriana_mom_2: {
    speaker: "Emaknya Andriana",
    badgeBg: "#06b6d4",
    bgType: "andriana_house",
    text: "Wah anak mama udah gede ya sekarang! Kemungkinan besar Andriana sekarang lagi mengalami yang namanya menstruasi pertamanya.",
    next: "andriana_mom_3"
  },
  andriana_mom_3: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Confuse.png",
    bgType: "andriana_house",
    text: "Menstruasi? Kayaknya aku pernah denger itu deh...",
    next: "andriana_mom_4"
  },
  andriana_mom_4: {
    speaker: "Emaknya Andriana",
    badgeBg: "#06b6d4",
    bgType: "andriana_house",
    text: "Iya nak, menstruasi pertama juga disebut dengan Menarche. Itu merupakan salah satu tanda bahwa tubuh kamu sedang berkembang dan mengalami pubertas.",
    next: "andriana_mom_5"
  },
  andriana_mom_5: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Smile.png",
    bgType: "andriana_house",
    text: "Jadi… Andriana enggak sakit?",
    next: "andriana_mom_6"
  },
  andriana_mom_6: {
    speaker: "Emaknya Andriana",
    badgeBg: "#06b6d4",
    bgType: "andriana_house",
    text: "Bukan Nak. Menstruasi adalah bagian dari perubahan tubuh yang normal ketika perempuan mengalami pubertas.",
    next: "andriana_mom_7"
  },
  andriana_mom_7: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Confuse.png",
    bgType: "andriana_house",
    text: "Tapi kok bisa keluar darah, ma?",
    next: "andriana_mom_8"
  },
  andriana_mom_8: {
    speaker: "Emaknya Andriana",
    badgeBg: "#06b6d4",
    bgType: "andriana_house",
    text: "Karena tubuh kamu sedang mengalami perubahan yang diatur oleh hormon. Saat pubertas, hormon-hormon di dalam tubuh meningkat dan membantu organ reproduksi berkembang.",
    next: "andriana_mom_9"
  },
  andriana_mom_9: {
    speaker: "Emaknya Andriana",
    badgeBg: "#06b6d4",
    bgType: "andriana_house",
    text: "Jadi kamu enggak perlu takut atau malu. Setiap perempuan akan mengalami perubahan tubuh yang berbeda-beda, termasuk waktunya. Ada yang mengalami pubertas lebih cepat, ada juga yang lebih lambat.",
    next: "andriana_mom_10"
  },
  andriana_mom_10: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Smile.png",
    bgType: "andriana_house",
    text: "Berarti ini normal ya, ma?",
    next: "andriana_mom_11"
  },
  andriana_mom_11: {
    speaker: "Emaknya Andriana",
    badgeBg: "#06b6d4",
    bgType: "andriana_house",
    text: "Iya, Nak. Ini bagian dari proses kamu tumbuh menjadi lebih dewasa.",
    next: "andriana_mom_12"
  },
  andriana_mom_12: {
    speaker: "Emaknya Andriana",
    badgeBg: "#06b6d4",
    bgType: "andriana_house",
    text: "Oh iya satu hal lagi. Kamu enggak perlu merasa malu dengan perubahan tubuhmu. Tapi kamu juga perlu belajar menjaga kebersihan, menjaga privasi tubuhmu, dan berani bilang kalau ada sesuatu yang membuatmu tidak nyaman.",
    next: "andriana_mom_13"
  },
  andriana_mom_13: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Confuse.png",
    bgType: "andriana_house",
    text: "Maksudnya gimana, ma?",
    next: "andriana_mom_14"
  },
  andriana_mom_14: {
    speaker: "Emaknya Andriana",
    badgeBg: "#06b6d4",
    bgType: "andriana_house",
    text: "Kamu perlu paham bahwa mitos seperti tidak boleh keramas atau minum es itu tidak benar. Yang penting adalah menjaga kebersihan pembalut, minum cukup air, dan bercerita terbuka kepada mama jika bingung.",
    next: "andriana_mom_15"
  },
  andriana_mom_15: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Smile.png",
    bgType: "andriana_house",
    text: "Ohh… jadi sekarang Andriana harus lebih ngerti sama tubuh Andriana sendiri?",
    next: "andriana_mom_16"
  },
  andriana_mom_16: {
    speaker: "Emaknya Andriana",
    badgeBg: "#06b6d4",
    bgType: "andriana_house",
    text: "Betul, Nak. Boleh banget bertanya sama mama daripada menyimpannya sendirian.",
    next: "andriana_mom_17"
  },
  andriana_mom_17: {
    speaker: "Andriana",
    badgeBg: "#06b6d4",
    sprite: "assets/Andriana/Andriana_Smile.png",
    bgType: "andriana_house",
    text: "Makasih ya ma!",
    next: "trigger_ending_good"
  }
};
