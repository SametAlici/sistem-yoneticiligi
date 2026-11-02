// Klasik (yazılı) denemeler. Her soru: w hafta, p puan, q soru, items: {name, def} cevap maddeleri.
// Hoca 30 puanlık klasik soruyu sınavdan önceki hafta söylüyor; bunlar slaytlardan sorulabilecek adaylardır.
const CLASSIC_SETS = [
{
  kind: "vize", title: "Vize Klasik Deneme 1",
  questions: [
    { w: 2, p: 30, q: "RAID nedir? RAID oluşturmanın amaçlarını yazınız ve RAID 0, RAID 1, RAID 5'i açıklayınız.",
      items: [
        { name: "RAID", def: "Redundant Array of Independent Disks (Yedekli Bağımsız Disk Dizisi). Bozulan disklerdeki kritik veri kayıplarını önlemek veya en aza indirmek için diskleri performans ya da güvenlik amaçlı yapılandırma yapısı." },
        { name: "Amaçları", def: "1) Hata toleransı sağlamak 2) Dizideki diskleri birleştirip yüksek depolama kapasitesi elde etmek 3) Performansı yükseltmek." },
        { name: "RAID 0 — Disk şeritleme", def: "Performansı geliştirmek için kullanılır, en az 2 disk gerekir. Hata toleransı yoktur: bir disk arızalanırsa veri bütünlüğü bozulur, veriler kaybolur." },
        { name: "RAID 1 — Disk yansıtma (mirroring)", def: "En az 2 disk; veriler eş zamanlı olarak disklere yazılır. Hata toleransı sağlar, bir disk bozulsa da sistem çalışır. Kapasiteyi ikiye böler (2 × 1 TB → 1 TB)." },
        { name: "RAID 5 — Eşlikli disk şeridi", def: "En çok kullanılan türdür; en az 3 disk gerekir. Veriye ek olarak parite (eş veri) bilgisi tüm disklere dağıtılarak yazılır; bir disk arızalanırsa veri pariteden otomatik yeniden yaratılır. Çalışırken disk değiştirmeye izin verir." },
        { name: "Yazılımsal / donanımsal (ek puan)", def: "Yazılımsal RAID kontrolör gerektirmez ama sistem çökünce veri genelde kurtarılamaz. Donanımsal RAID, RAID Controller kartıyla yapılır, daha performanslıdır ve daha çok tercih edilir." }
      ] },
    { w: 4, p: 20, q: "DNS'te kullanılan A, AAAA, CNAME, NS, MX, PTR ve TXT kayıtlarını açıklayınız.",
      items: [
        { name: "A", def: "Host adına karşılık IPv4 adresinin tanımlandığı, en çok kullanılan kayıt. Örn: sabis.sakarya.edu.tr. IN A 193.140.253.173" },
        { name: "AAAA", def: "A kaydıyla aynı işi IPv6 adresleri için yapar." },
        { name: "CNAME", def: "Bir A (host) kaydına takma ad tanımlar; A kaydı tek yerden değiştirilince bağlı tüm takma adlar güncellenir. Önce A kaydı olmalıdır." },
        { name: "NS", def: "Bölge için yetkili alan adı sunucularını (birincil/ikincil DNS) tanımlar." },
        { name: "MX", def: "Alan adına gelen e-postaların işlendiği sunucuyu gösterir; birden fazla olabilir, priority değeri küçük olan önceliklidir." },
        { name: "PTR", def: "Ters DNS kaydıdır; reverse zone'da IP adresinden host adına çözümleme yapar." },
        { name: "TXT", def: "Metin tabanlı bilgi tutar; genelde e-posta doğrulaması için SPF kayıtlarında kullanılır." }
      ] }
  ]
},
{
  kind: "vize", title: "Vize Klasik Deneme 2",
  questions: [
    { w: 5, p: 30, q: "DHCP nedir? DHCP ile hangi bilgiler atanır? DHCP bileşenlerini (Scope, SuperScope, Exclusion Range, Lease, Reservation, Scope Options, Relay Agent) açıklayınız.",
      items: [
        { name: "DHCP", def: "Dynamic Host Configuration Protocol: IP adreslerini ve TCP/IP ayarlarını istemcilere otomatik dağıtan servis. Avantajları: merkezi dağıtım, IP çakışmalarının önlenmesi, yöneticinin iş yükünün azalması." },
        { name: "Atanan bilgiler", def: "IP adresi, default gateway, subnet mask, DNS adresleri." },
        { name: "Scope (kapsam)", def: "İstemcilere verilecek IP adresi aralığı ve kiralama süresi gibi bilgileri içerir." },
        { name: "SuperScope (üst kapsam)", def: "Aynı fiziksel ağdaki birden çok mantıksal IP ağını desteklemek için kapsamların yönetimsel gruplandırması." },
        { name: "Exclusion Range (dışlama aralığı)", def: "Kapsam içinden dışlanan aralık; bu IP'ler hiçbir bilgisayara atanmaz." },
        { name: "Lease (kiralama)", def: "İstemcinin atanan IP'yi kullanabileceği süre; varsayılan 8 gün." },
        { name: "Reservation (rezervasyon)", def: "Bir cihazın (MAC adresine göre) her zaman aynı IP'yi almasını sağlar." },
        { name: "Scope Options", def: "IP ve subnet mask dışındaki TCP/IP yapılandırma bilgisi (router, DNS sunucusu)." },
        { name: "DHCP Relay Agent", def: "Kendi segmentinde DHCP sunucusu olmayan istemcilerin IP almasını sağlar." }
      ] },
    { w: 6, p: 20, q: "VPN'in yerine getirdiği 4 kritik fonksiyonu ve VPN ile sağlanan 3 güvenlik tekniğini yazınız.",
      items: [
        { name: "Authentication", def: "Veriyi gönderen, alanın doğru kişi olduğunu bilir." },
        { name: "Access control", def: "Yetkisiz kişiler VPN'i kullanamaz." },
        { name: "Confidentiality", def: "Veri gizliliği garanti edilir." },
        { name: "Data integrity", def: "Veri bütünlüğü garanti edilir." },
        { name: "Kapsülleme (tünelleme)", def: "Public ağ üzerinden, kiralık hat gibi iki nokta arasında sağlam bir bağlantı; paketler başka paketlerin içine kapsüllenir." },
        { name: "Kimlik sorgulaması", def: "Yalnızca yetkili kullanıcıların VPN hizmetini almasını sağlar." },
        { name: "Kriptolama", def: "Haberleşme şifrelenerek dinlenmesi engellenir; veri bütünlüğüyle de paket içeriğinin değiştirilmesi engellenir." }
      ] }
  ]
},
{
  kind: "vize", title: "Vize Klasik Deneme 3",
  questions: [
    { w: 1, p: 30, q: "Sunucu nedir? Sunucu türlerini açıklayınız. Windows Server Core Edition ve NAP nedir?",
      items: [
        { name: "Sunucu", def: "Bilgisayar ağlarında istemcilerin erişebileceği, paylaşıma açık kaynakları veya servisleri (FTP, e-posta, web sitesi) çalıştıran bilgisayar birimi. Yüzlerce isteğe yanıt verdiği için masaüstünden hızlı ve geniş depolamalıdır." },
        { name: "File Server", def: "Kullanıcıların ortak kullandığı dosyaların bulunduğu sunucu." },
        { name: "Database Server", def: "Veritabanı hizmeti verir (SQL Server, MySQL, Oracle)." },
        { name: "Web Server", def: "Web sayfalarını depolar ve istekte bulunan kullanıcılara gönderir." },
        { name: "Proxy Server", def: "İnternet erişiminde kullanılan ara sunucu; bilgisayar internete proxy üzerinden çıkar." },
        { name: "DNS Server", def: "Alan adı kayıtlarını ve domain yönlendirmelerini saklar." },
        { name: "SMTP Server", def: "E-posta geliş–gidiş trafiğini ve sunucular arası posta iletişimini yürütür." },
        { name: "Server Core", def: "Grafik arayüzü olmayan, her şeyin komut satırından yapıldığı, sınırlı fonksiyonlu ve daha performanslı sürüm; GUI ve .NET Framework devre dışıdır." },
        { name: "NAP", def: "Network Access Protection: Windows Server 2008 ile gelen; ağa bağlanan bilgisayarın durumuna (güncel anti-virüs, etkin güvenlik duvarı, güncellemeler) göre erişim izni veren ağ güvenliği uygulaması." }
      ] },
    { w: 6, p: 20, q: "VPN tünel protokolleri PPTP, L2TP ve SSTP'yi açıklayınız.",
      items: [
        { name: "Ortak temel", def: "Bunlara tünel protokolleri denir; temellerinde çevirmeli ve noktadan noktaya aktarım için geliştirilmiş PPP vardır." },
        { name: "PPTP", def: "Tünel yönetimi için TCP 1723, tünel verisi için GRE (47) kullanır; PPP yükü şifrelenip sıkıştırılabilir." },
        { name: "L2TP", def: "Cisco'nun L2F'i ile PPTP'nin birleşimidir; IPSec desteği vardır (istemci ve sunucu IPSec desteklemeli)." },
        { name: "SSTP", def: "TCP 443 üzerinden HTTPS kullanır; bazı güvenlik duvarları PPTP ve L2TP'yi engellediği için geliştirilmiştir." }
      ] }
  ]
},
{
  kind: "vize", title: "Vize Klasik Deneme 4",
  questions: [
    { w: 2, p: 30, q: "Sanallaştırma nedir? Avantajlarını ve türlerini yazınız. Hyper-V'yi açıklayınız.",
      items: [
        { name: "Sanallaştırma", def: "Fiziksel kaynağı ihtiyaca göre mantıksal parçalara bölerek sunucu verimliliğini optimize etme; tek fiziksel makineden birden çok sanal makine (VM) yaratma. VM'ler fiziksel makinenin CPU, bellek ve depolamasını kullanır." },
        { name: "Avantajları", def: "Kapasiteyi verimli kullanma · hızlı yeni sunucu · donanım, kurulum ve bakım maliyetinde tasarruf · sorun anında hızlı yeniden çalıştırma · merkezden yönetim ve raporlama · yedekle kayıpsız taşıma · farklı işletim sistemleri aynı çatı altında." },
        { name: "Türleri", def: "Sunucu, depolama, ağ, masaüstü/dizüstü ve uygulama sanallaştırma." },
        { name: "Hyper-V", def: "Microsoft'un sunucu sanallaştırma çözümü: aynı fiziksel sunucuda birden fazla işletim sistemi, kaynakların (CPU, RAM, depolama, ağ) paylaştırılması, yük dengeleme ve felaket kurtarma (Disaster Recovery). Windows Server'da rol olarak gelir." }
      ] },
    { w: 7, p: 20, q: "Güvenlik tarama uygulamaları Nessus, Nmap ve Ethereal'ı açıklayınız. Sunucu güvenliği için alınacak genel tedbirleri yazınız.",
      items: [
        { name: "Nessus", def: "Uzaktan tarama aracı; Windows ve UNIX'te çalışır; 1200'den fazla açığı raporlar; bilinen kurallara bağlı olmadan tarar." },
        { name: "Nmap", def: "Açık kaynak; güvenlik denetimi ve ağ araştırması; IP paketleriyle canlı bilgisayarları, sunulan uygulamaları, işletim sistemini ve güvenlik duvarını tespit eder." },
        { name: "Ethereal", def: "Ücretsiz ağ analizcisi (Windows/UNIX); canlı ya da kayıtlı ağ verisiyle çalışır; zengin süzme dili ve TCP oturumu birleştirme." },
        { name: "Genel tedbirler", def: "Güvenlik duvarı · güvenli iletişim protokolleri · saldırı tespiti · zararlı koda karşı yazılım · güncel işletim sistemi · RDP (3389) ve önemli portların değiştirilmesi · yalnızca IPv4 aktif." },
        { name: "Kontrol listesinden örnekler (ek puan)", def: "Parola 3–6 ayda bir, en az 12–14 karakter; 3 hatalı denemede kilit; misafir hesabı kapalı; Telnet/FTP yerine SFTP; NTLMv2; BitLocker; düzenli yedek ve log takibi." }
      ] }
  ]
},
{
  kind: "vize", title: "Vize Klasik Deneme 5",
  questions: [
    { w: 6, p: 30, q: "Remote Access VPN ile Site-to-site VPN'i karşılaştırınız. Gönüllü ve zorunlu tünel nedir? Kullanım alanına göre VPN türlerini yazınız.",
      items: [
        { name: "Remote Access VPN", def: "Evden ya da seyahatte çalışan kullanıcının internet üzerinden özel ağdaki sunucuya erişmesi; en önemli özelliği uzak ve gezgin kullanıcıların kimlik doğrulamasıdır." },
        { name: "Gönüllü (voluntary) tünel", def: "Remote Access'te VPN istemcisi istemci makinededir; tünelin kurulması ve yönetimi istemcidedir." },
        { name: "Site-to-site VPN", def: "WAN bağlantısı gibi çalışır; ağlar internet üzerinden veriyi bir yönlendiriciden diğerine iletir." },
        { name: "Zorunlu (compulsory) tünel", def: "NAS, istemci adına kurumsal VPN sunucusuna tünel açar; tünel istemcinin kontrolünde değildir." },
        { name: "Access VPN", def: "Gerçek kişilerin bireysel kullanımı; mobil kullanıcılar ve SOHO ofisler merkeze güvenli bağlanır." },
        { name: "Intranet VPN", def: "Tüzel kişiler; özel ağın iki bölümünü siteden siteye bağlar; karşılıklı doğrulama." },
        { name: "Extranet VPN", def: "İş ortakları ve iştiraklerle güvenli bağlantı; kontrollü erişim; düşük maliyet, kolay yönetim." }
      ] },
    { w: 4, p: 20, q: "DNS neden ortaya çıktı? Registry, Registrar ve Registrant kavramlarını açıklayınız.",
      items: [
        { name: "Ortaya çıkışı", def: "ARPAnet'te isim–adres eşleşmesi tek bir HOSTS.TXT dosyasındaydı ve haftada 1–2 kez FTP'den güncelleniyordu. Ağ büyüyünce dosya aşırı büyüdü; global, dağıtık ve hiyerarşik bir sisteme ihtiyaç duyuldu." },
        { name: "DNS tanımı", def: "Bilgisayar, servis veya ağa bağlı her kaynak için hiyerarşik, dağıtılmış bir adlandırma sistemi; dağıtık bir veritabanıdır." },
        { name: "Registry", def: "Alan adları veritabanı; bu veritabanını düzenleme yetkisi olan ve authoritative isim sunucularını çalıştıran organizasyon." },
        { name: "Registrar", def: "Registrant adına registry'ye değişiklik isteğini ileten elçi." },
        { name: "Registrant", def: "Alan adını kullanan varlık." }
      ] }
  ]
},
{
  kind: "final", title: "Final Klasik Deneme 1",
  questions: [
    { w: 9, p: 30, q: "Bulut bilişim hizmet modelleri IaaS, PaaS ve SaaS'ı açıklayıp kontrol ve sorumluluk açısından karşılaştırınız. Birer örnek veriniz.",
      items: [
        { name: "IaaS", def: "Infrastructure as a Service: sanal sunucu, depolama ve ağ kaynakları sunulur. Kullanıcı işletim sistemi, uygulama ve veriden sorumludur. Örnek: AWS." },
        { name: "PaaS", def: "Platform as a Service: geliştiricilerin altyapı kurmadan uygulama geliştirip çalıştırdığı platform; yalnızca uygulama ve veriyle ilgilenirler. Örnek: Google App Engine." },
        { name: "SaaS", def: "Software as a Service: yazılım internetten kullanılır; altyapı, platform ve yazılımı sağlayıcı yönetir. Örnek: Google Docs, Microsoft 365." },
        { name: "Karşılaştırma", def: "IaaS kullanıcıya en fazla kontrolü verir, SaaS en az kontrol ve yönetim gerektirir, PaaS ikisinin ortasındadır." }
      ] },
    { w: 8, p: 20, q: "Sanal makine (VM) ile Docker konteynerini karşılaştırınız.",
      items: [
        { name: "İşletim sistemi", def: "VM tam işletim sistemi içerir; Docker küçültülmüş işletim sistemi imajı kullanır." },
        { name: "İzolasyon", def: "VM'de yüksek, Docker'da daha düşük." },
        { name: "Çalışır hâle gelme", def: "VM dakikalar, Docker saniyeler." },
        { name: "Versiyonlama", def: "VM'de yok, Docker'da yüksek." },
        { name: "Paylaşılabilirlik", def: "VM'de düşük, Docker'da yüksek." }
      ] }
  ]
},
{
  kind: "final", title: "Final Klasik Deneme 2",
  questions: [
    { w: 9, p: 30, q: "Bulut bilişimin avantajlarını ve dezavantajlarını açıklayınız.",
      items: [
        { name: "Maliyet tasarrufu", def: "Donanım, yazılım ve bakım maliyetleri ortadan kalkar; ödemeler kullanım bazlıdır." },
        { name: "Esneklik ve ölçeklenebilirlik", def: "Kaynaklar ihtiyaç oldukça artırılıp azaltılır; kapasite sınırı ortadan kalkar." },
        { name: "Her yerden erişim", def: "İnternet olan her yerden veriye erişim; mobilite artar." },
        { name: "İş sürekliliği ve felaket kurtarma", def: "Veriler bulutta yedeklendiği için felakette kayıp riski azalır, sistemler hızla devreye alınır." },
        { name: "Dezavantaj: veri güvenliği ve gizlilik", def: "Verilerin üçüncü taraflarca barındırılması gizlilik ihlali ve yetkisiz erişim riskini artırır." },
        { name: "Dezavantaj: uygunluk ve regülasyon", def: "Farklı ülkelerin veri koruma yasaları global çözümleri zorlaştırır." },
        { name: "Dezavantaj: bağlantı bağımlılığı", def: "Erişim tamamen internete bağlıdır; kesinti hizmeti aksatır." },
        { name: "Dezavantaj: kontrol eksikliği", def: "Kullanıcı altyapı üzerinde tam kontrole sahip değildir; arızada müdahale sınırlıdır." }
      ] },
    { w: 9, p: 20, q: "Bulut bilişimde güvenlik katmanlarını açıklayınız.",
      items: [
        { name: "Veri şifreleme", def: "Veriler aktarımda ve depolamada şifrelenir; AES-256 gibi güçlü algoritmalar kullanılır." },
        { name: "Erişim denetimi ve yetkilendirme", def: "Kimin, ne zaman, hangi veriye erişeceği politikalarla kontrol edilir; rol tabanlı erişim (RBAC)." },
        { name: "Çok faktörlü kimlik doğrulama (MFA)", def: "Girişte şifreye ek olarak SMS, biyometrik ya da uygulama doğrulaması istenir." },
        { name: "Güvenlik duvarı ve izleme", def: "Firewall, IDS/IPS tehditleri tespit edip engeller; anormallikler sürekli izlenir." }
      ] }
  ]
},
{
  kind: "final", title: "Final Klasik Deneme 3",
  questions: [
    { w: 9, p: 30, q: "Bulutta yedekleme ve geri yükleme stratejilerini açıklayınız. 3-2-1 kuralı nedir?",
      items: [
        { name: "Yedekleme türleri", def: "Tam yedekleme, artımlı yedekleme ve fark (differential) yedekleme veri koruma stratejilerinin temelidir." },
        { name: "Otomatik yedekleme", def: "Zamanlanmış ve düzenli çalışan otomatik sistemler insan hatasını en aza indirir." },
        { name: "3-2-1 kuralı", def: "3 kopya veri, 2 farklı ortam, 1 tanesi farklı fiziksel lokasyonda." },
        { name: "Geri yükleme planları ve testleri", def: "Veri kaybında geri dönüş süreçleri önceden planlanmalı ve belirli aralıklarla test edilmelidir." }
      ] },
    { w: 9, p: 20, q: "Hizmet Seviyesi Anlaşması (SLA) nedir? Neleri kapsar?",
      items: [
        { name: "Tanım", def: "Bulut sağlayıcıları ile müşteriler arasındaki güvence mekanizması." },
        { name: "Uptime garantisi", def: "Genellikle %99,9 veya üzeri hizmet sürekliliği taahhüdü; sınırlar net belirlenir." },
        { name: "Performans ve yanıt süresi", def: "Yanıt süresi, bant genişliği, işlem hızı gibi metrikler takip edilir." },
        { name: "Veri güvenliği ve yedeklilik", def: "Veri bütünlüğü, yedekleme sıklığı ve güvenlik protokollerine dair standartlar." },
        { name: "İhlal yaptırımları", def: "Hizmet kredisi, para iadesi veya sözleşme feshi." }
      ] }
  ]
},
{
  kind: "final", title: "Final Klasik Deneme 4",
  questions: [
    { w: 8, p: 30, q: "Container nedir, faydaları nelerdir? Docker'ı tanımlayıp bir Docker imajının ve konteynerinin nasıl çalıştığını açıklayınız.",
      items: [
        { name: "Container", def: "Ana işletim sistemi kaynaklarını izole ederek uygulamalara tahsis eden yapılar; farklı uygulamalara farklı ortam sağlar, imaj olarak tekrar kullanılabilir." },
        { name: "Faydaları", def: "Verimli kaynak kullanımı · uygulama dağıtım kolaylığı · hızlı başlama ve bitiş · imaj sayesinde standartlaşma." },
        { name: "Docker", def: "DotCloud, 2013; LXC + iyileştirmeler. Linux tabanlı, açık kaynak uygulama sanallaştırma teknolojisi; tek konteyner tek proses önerir; konteyner her sistemde beklendiği gibi çalışır." },
        { name: "İmaj nasıl çalışır?", def: "Her imaj katmanlardan oluşur; Docker katmanları union filesystem ile birleştirir. Değişiklik yeni katman olarak eklenir, yeni imaj dağıtmaya gerek kalmaz." },
        { name: "Konteyner nasıl çalışır?", def: "Konteyner işletim sistemi, kullanıcının eklediği dosyalar ve metadatadan oluşur; her konteyner bir imajdan meydana gelir. Ağ için docker0 bridge'i, otomatik başlatma için --restart bayrağı." }
      ] },
    { w: 9, p: 20, q: "Bulut bilişimle ilgili mevzuat ve yasal düzenlemeleri açıklayınız.",
      items: [
        { name: "KVKK (Türkiye)", def: "Kişisel verilerin işlenmesini ve saklanmasını düzenler; bulut sistemlerine özel yükümlülükler getirir." },
        { name: "GDPR (AB)", def: "Kullanıcı rızası, unutulma hakkı ve veri taşınabilirliğini zorunlu kılar." },
        { name: "Veri lokalizasyonu", def: "Bazı ülkeler verinin yerel sunucularda saklanmasını şart koşar." },
        { name: "Uyumluluk denetimleri", def: "ISO 27001, SOC 2 gibi standartlara uyum; denetim raporları düzenli hazırlanır." }
      ] }
  ]
},
{
  kind: "final", title: "Final Klasik Deneme 5",
  questions: [
    { w: 9, p: 30, q: "Bulut bilişimde siber tehditleri ve savunma yöntemlerini açıklayınız.",
      items: [
        { name: "DDoS", def: "Dağıtık hizmet reddi saldırıları sistemi aşırı yükleyerek erişilemez yapar; trafik filtreleme yapılmalıdır." },
        { name: "Veri ihlali ve yetkisiz erişim", def: "Kötü yapılandırılmış güvenlik politikaları hassas bilgilerin sızmasına yol açar; erişim kontrolü kritiktir." },
        { name: "Ransomware", def: "Verileri şifreleyip fidye isteyen kötü amaçlı yazılım; bulut sistemlerini de hedef alabilir." },
        { name: "Savunma stratejileri", def: "WAF, IDS/IPS, güvenlik duvarları ve çok faktörlü kimlik doğrulama; ayrıca izleme (Prometheus, Grafana), log analizi ve olay müdahale otomasyonu." }
      ] },
    { w: 8, p: 20, q: "Temel Docker komutlarını ve görevlerini yazınız.",
      items: [
        { name: "docker -v / docker version", def: "Sürümü gösterir." },
        { name: "sudo docker info", def: "Docker sistem bilgisini gösterir." },
        { name: "docker search <imaj>", def: "Registry'de imaj arar." },
        { name: "docker pull <imaj>", def: "Resmî registry'den imaj indirir (ör. docker pull wordpress)." },
        { name: "docker images", def: "İndirilen imajları listeler." },
        { name: "docker rmi <imaj>", def: "İmajı siler (docker image rmi)." },
        { name: "docker run <imaj>", def: "İmajı çalıştırır (ör. docker run ubuntu)." }
      ] }
  ]
}
];
