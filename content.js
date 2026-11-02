// Haftalık özetler. exam: "vize" (1–7. hafta) ya da "final" (8. hafta ve sonrası).
const WEEKS = [
{
  id: 1, exam: "vize",
  title: "Sunucu Sistemlerine Giriş",
  short: "Sunucu, sunucu türleri, sunucu işletim sistemleri, Server Core, Hyper-V, NAP, Windows Server sürümleri.",
  principle: "Sunucu, aynı anda yüzlerce istemcinin isteğine yanıt veren ve kaynakları paylaşıma açan bilgisayardır.",
  body: `
<h2>1. Dersin çerçevesi</h2>
<p>Öğrenme çıktılarından öne çıkanlar: sistem yöneticiliğinin etik değerleri ve sorumlulukları · küme sistemlerinin yönetim araçları · kurumsal veri ve sistem güvenliği · donanım/yazılım eklemelerini sistemi aksatmadan yapmak · <b>ağ sunucularını (DHCP, DNS)</b> ve <b>web, dosya, veritabanı sunucularını</b> yapılandırmak.</p>
<div class="table-wrap"><table>
<tr><th>Değerlendirme</th><th>Oran</th></tr>
<tr><td>1. Performans görevi</td><td>%20 (yıl içinin)</td></tr>
<tr><td>2. Performans görevi</td><td>%20 (yıl içinin)</td></tr>
<tr><td>Ara sınav</td><td>%60 (yıl içinin)</td></tr>
<tr><td>Yıl içi / Final</td><td>%50 / %50</td></tr>
</table></div>

<h2>2. Sunucu (server)</h2>
<div class="box key"><span class="label">Tanım</span>Bilgisayar ağlarında istemcilerin erişebileceği, kullanımına ve paylaşımına açık kaynakları veya servisleri (FTP, e-posta, web sitesi) çalıştıran bilgisayar birimlerine verilen genel ad.</div>
<p>Aynı anda yüzlerce kullanıcıya yanıt verdiği için masaüstünden daha hızlı ve daha geniş depolamalıdır (ör. 2 × Intel Xeon, 128 GB RAM, 4 TB HDD). Çalışma biçimi: <b>sunucu–istemci modeli</b>.</p>

<h2>3. Sunucu türleri</h2>
<div class="table-wrap"><table>
<tr><th>Tür</th><th>Görevi</th></tr>
<tr><td>File Server (Dosya)</td><td>Kullanıcıların ortak kullandığı dosyaları tutar</td></tr>
<tr><td>Database Server (Veritabanı)</td><td>Veritabanı hizmeti verir (SQL Server, MySQL, Oracle)</td></tr>
<tr><td>Web Server</td><td>Web sayfalarını depolar ve istekte bulunan kullanıcılara gönderir</td></tr>
<tr><td>Proxy Server (Vekil)</td><td>İnternet erişiminde ara sunucu; istemci internete proxy üzerinden çıkar</td></tr>
<tr><td>DNS Server</td><td>Alan adı kayıtlarını ve domain yönlendirmelerini saklar</td></tr>
<tr><td>SMTP Server</td><td>E-posta geliş–gidiş trafiğini ve sunucular arası posta iletişimini yürütür</td></tr>
</table></div>

<h2>4. Sunucu işletim sistemleri</h2>
<p>Ağdaki istemcilerin ve donanımların birbirleriyle veri alışverişini sağlayan ve <b>kaynak paylaşımını yöneten</b> işletim sistemleri. Araçları sayesinde birçok görevi otomatik yapar, işletme maliyetini düşürür.</p>
<div class="table-wrap"><table>
<tr><th>Windows tabanlı</th><th>Linux tabanlı</th><th>Mac tabanlı</th></tr>
<tr><td>Server 2008, 2008 R2, 2012, 2016, 2019, 2022</td><td>SUSE, Debian, Fedora, Red Hat…</td><td>macOS Server</td></tr>
</table></div>

<h3>Windows Server 2008</h3>
<ul>
<li>Diğer Windows Server sürümlerinin <b>tamamen donanımdan bağımsız ilk sürümü</b>.</li>
<li>Yükleme dosyasından ön yükleme yapılmaz; <b>Windows Boot Manager</b> kullanılır.</li>
<li>14 Ocak 2020'de 2008 ve 2008 R2 <b>desteği sona erdi</b> → güvenlik güncellemesi yok, güncel sürüme geçilmeli.</li>
</ul>
<h3>Server Core Edition</h3>
<p>Grafik arayüzü olmayan, her şeyin <b>komut satırından</b> yapıldığı, sınırlı fonksiyonlu sürüm → daha performanslı. GUI ve .NET Framework gibi bileşenler devre dışı. DNS, DHCP, File Server gibi roller çalıştırılır.</p>
<h3>Hyper-V</h3>
<p>Aynı fiziksel sunucuda birden fazla işletim sistemi çalıştırma, CPU/RAM/depolamayı sanal sistemler arasında paylaştırma, yük dengeleme ve <b>Disaster Recovery</b> (felaket kurtarma) senaryoları.</p>
<h3>Network Access Protection (NAP — Ağ Erişim Koruması)</h3>
<p>Windows Server 2008 ile gelen ağ güvenliği uygulaması. Ağa bağlanan bilgisayarın <b>durumuna göre</b> erişim izni verir: güncel ve aktif anti-virüs, etkin güvenlik duvarı, belirli güncellemelerin yapılmış olması.</p>

<h2>5. Windows Server 2016 / 2019 sürümleri</h2>
<div class="table-wrap"><table>
<tr><th>Sürüm</th><th>Kime / ne için</th></tr>
<tr><td><b>Datacenter</b></td><td>Tüm özellikler; <b>sanallaştırma yoğunluğu yüksek</b> veri merkezleri ve bulut (2019: $6.155)</td></tr>
<tr><td><b>Standard</b></td><td>Temel yenilikler; sanallaştırma yoğunluğu düşük / fiziksel ortamlar (2019: $972)</td></tr>
<tr><td><b>Essentials</b></td><td>Küçük şirketler: <b>25 kullanıcı, 50 cihaz</b>; 2 CPU, 64 GB RAM (2019: $501)</td></tr>
<tr><td>Hyper-V Server 2016</td><td>Sanal makineler için tek başına sanallaştırma sunucusu</td></tr>
<tr><td>Storage Server 2016</td><td>Tüm roller yok; disk depolama ünitesi yöneticisi olarak</td></tr>
</table></div>
<h3>Windows Server 2019 minimum gereksinimler</h3>
<div class="table-wrap"><table>
<tr><th>Bileşen</th><th>Minimum</th></tr>
<tr><td>İşlemci</td><td>1,4 GHz, 64-bit</td></tr>
<tr><td>RAM</td><td><b>512 MB</b> (GUI'siz / Core) · <b>2 GB</b> (GUI'li)</td></tr>
<tr><td>Disk</td><td>32 GB</td></tr>
<tr><td>Ağ</td><td>Gigabit adaptör</td></tr>
</table></div>
`
},
{
  id: 2, exam: "vize",
  title: "Sanallaştırma ve Disk Yapıları (RAID)",
  short: "Sanallaştırma, avantajları ve türleri, Hyper-V, RAID amaçları, yazılımsal/donanımsal RAID, RAID 0/1/5.",
  principle: "RAID 0 hız verir ama hata toleransı vermez; RAID 1 yansıtır; RAID 5 pariteyle hem hız hem güvenlik verir.",
  body: `
<h2>1. Sanallaştırma (virtualization)</h2>
<div class="box key"><span class="label">Tanım</span>Fiziksel kaynağı ihtiyaca göre mantıksal parçalara bölerek toplam sunucu verimliliğini optimize etme; tek fiziksel makineden birden çok <b>sanal makine (VM)</b> yaratma. VM'ler fiziksel makinenin CPU, bellek ve depolamasını kullanır.</div>
<h3>Avantajları</h3>
<ul>
<li>Sunucu kapasitesini yüksek verimle kullanma</li>
<li>İhtiyaç anında çok hızlı yeni sunucu oluşturma</li>
<li>Donanım yatırımında, kurulum ve bakım maliyetlerinde ciddi tasarruf</li>
<li>Sorun anında sanal sunucuları hızla yeniden çalıştırma</li>
<li>Merkezden yönetim, kontrol ve raporlama</li>
<li>Yedekle başka bir PC'ye kayıpsız taşıma, kaldığı yerden devam</li>
<li>Windows, Linux, UNIX gibi farklı işletim sistemleri aynı çatı altında</li>
</ul>
<h3>Türleri</h3>
<p>Sunucu · Depolama · Ağ · Masaüstü ve dizüstü · Uygulama sanallaştırma.</p>
<p><b>Yazılımlar:</b> Microsoft Hyper-V (Windows Server 2019'da sunucu rolü olarak gelir), VMware, VirtualBox.</p>

<h2>2. RAID</h2>
<div class="box key"><span class="label">RAID</span><b>R</b>edundant <b>A</b>rray of <b>I</b>ndependent <b>D</b>isks — Yedekli Bağımsız Disk Dizisi. Bozulan disklerdeki kritik veri kaybını önlemek veya azaltmak için diskleri performans ya da güvenlik odaklı yapılandırma.</div>
<p><b>Amaçları:</b> 1) hata toleransı 2) diskleri birleştirip yüksek kapasite 3) performansı yükseltmek.</p>
<div class="table-wrap"><table>
<tr><th></th><th>Yazılımsal RAID</th><th>Donanımsal RAID</th></tr>
<tr><td>Nasıl</td><td>Özel RAID kontrolörü gerekmez</td><td>RAID denetçi kartı (RAID Controller) ile</td></tr>
<tr><td>Dayanıklılık</td><td>Bozulmaya müsait; sistem çökünce veri genelde kurtarılamaz</td><td>Kart arızalanırsa değiştirilir; yeni kart diskteki RAID yapısını okuyup onay ister</td></tr>
<tr><td>Kullanım</td><td>Az yaygın</td><td>Daha performanslı, daha çok tercih edilir</td></tr>
</table></div>

<h2>3. RAID seviyeleri</h2>
<div class="table-wrap"><table>
<tr><th>Seviye</th><th>Ad</th><th>Min. disk</th><th>Hata toleransı</th><th>Kapasite (n × 1 TB)</th><th>Not</th></tr>
<tr><td><b>RAID 0</b></td><td>Disk şeritleme (striping)</td><td>2</td><td>❌ Yok — bir disk giderse tüm veri gider</td><td>n TB (2×1 TB → 2 TB)</td><td>Performans için</td></tr>
<tr><td><b>RAID 1</b></td><td>Disk yansıtma (mirroring)</td><td>2</td><td>✓ Bir disk bozulsa da çalışır</td><td>Yarısı (2×1 TB → 1 TB)</td><td>En kolay ve düşük maliyetli hata toleransı</td></tr>
<tr><td><b>RAID 5</b></td><td>Eşlikli (parite) disk şeridi</td><td><b>3</b></td><td>✓ Bir disk, pariteden yeniden üretilir</td><td>(n − 1) TB</td><td><b>En çok kullanılan</b>; çalışırken disk değiştirme</td></tr>
</table></div>
<p><b>Parite (eş veri):</b> veri disklere dağıtılarak yazılırken, verinin yazılmadığı diğer diske kurtarma için bir veri bloğu daha yazılır. Bir disk arızalanınca veri, dağıtılmış veri ve parite bloğundan otomatik yeniden yaratılır.</p>
<p>RAID 5 önerilen yerler: dosya ve uygulama sunucuları, <b>okuma ağırlıklı</b> veritabanı sunucuları, web ve mail sunucuları.</p>
<p>Sunumda adı geçen diğer seviyeler: RAID 6, RAID 10, RAID 50.</p>
<div class="box warn"><span class="label">Sık karışan</span>"Şeritleme" = RAID 0 (hız, güvenlik yok). "Yansıtma" = RAID 1 (kapasite yarıya iner). "Parite" = RAID 5 (en az 3 disk).</div>
`
},
{
  id: 3, exam: "vize",
  title: "Web Sunucusu",
  short: "IIS ve sürümleri, Apache, NGINX ve c10k, Windows'ta Apache + PHP + MySQL + phpMyAdmin kurulumu, XAMPP.",
  principle: "Doğru web sunucusu trafiğe göre seçilir: Windows/.NET için IIS, genel amaçlı Apache, yüksek trafik için NGINX.",
  body: `
<h2>1. Web sunucu yazılımları</h2>
<div class="table-wrap"><table>
<tr><th>Yazılım</th><th>Özellik</th></tr>
<tr><td><b>IIS</b> (Internet Information Services)</td><td>Microsoft; Windows sunucularla çalışır. Web sayfası yayınlama, web uygulaması çalıştırma. .NET geliştiricileri IIS kurulu Windows'a ihtiyaç duyar</td></tr>
<tr><td><b>Apache</b></td><td>Apache Yazılım Vakfı; açık kaynak, ücretsiz, en çok tercih edilenlerden; sık güncellenir; Windows + Linux. <b>Zayıflık:</b> yüksek trafikte performans sorunları</td></tr>
<tr><td><b>NGINX</b></td><td>Ücretsiz, açık kaynak, yüksek performanslı. <b>c10k problemine</b> çözüm olarak oluşturuldu. Yüksek trafikli siteler için ideal</td></tr>
</table></div>
<div class="box key"><span class="label">c10k problemi</span>Bir web sunucusunun eş zamanlı <b>10.000'in üzerinde bağlantının</b> altından kalkamaması.</div>

<h2>2. IIS sürümleri</h2>
<div class="table-wrap"><table>
<tr><th>IIS</th><th>İşletim sistemi</th></tr>
<tr><td>5.0</td><td>Windows 2000</td></tr>
<tr><td>5.1</td><td>Windows XP Professional</td></tr>
<tr><td>6.0</td><td>Windows Server 2003</td></tr>
<tr><td>7.0</td><td>Windows Vista / Server 2008</td></tr>
<tr><td>7.5</td><td>Windows 7 / Server 2008 R2</td></tr>
<tr><td>8.0</td><td>Windows 8 / Server 2012</td></tr>
<tr><td>8.5</td><td>Windows 8.1 / Server 2012 R2</td></tr>
<tr><td><b>10.0</b></td><td>Windows Server 2016 – 2019</td></tr>
</table></div>
<p>Kurulum: Server Manager → rol olarak Web Server (IIS); uygulama geliştirme öğeleri seçilir. Test: tarayıcıda <code>localhost</code>.</p>

<h2>3. Varsayılan web dizinleri</h2>
<div class="table-wrap"><table>
<tr><th>Sunucu</th><th>Dizin</th></tr>
<tr><td>IIS</td><td><code>C:\\inetpub\\wwwroot</code></td></tr>
<tr><td>Apache</td><td><code>C:\\Apache24\\htdocs</code></td></tr>
<tr><td>XAMPP</td><td><code>C:/xampp/htdocs</code></td></tr>
</table></div>

<h2>4. Windows Server'a Apache + PHP + MySQL</h2>
<details class="example" open><summary>Apache kurulumu</summary><div class="inner">
<ol>
<li>Önce <b>Visual C++ Redistributable for Visual Studio 2015</b> kurulur.</li>
<li>apachelounge.com'dan Apache indirilir.</li>
<li><code>C:\\Apache24\\bin\\</code> içinde: <code>httpd.exe -k install</code></li>
<li><code>services.msc</code> ile servis başlatılır, <code>http://localhost</code> ile test edilir.</li>
</ol></div></details>
<details class="example"><summary>PHP kurulumu</summary><div class="inner">
<ol>
<li>windows.php.net'ten PHP 7.3 VC15 x64 <b>Thread Safe</b> indirilir.</li>
<li><code>php.ini-development</code> → <code>php.ini</code> olarak adlandırılır; <code>extension_dir="C:\\php\\ext"</code></li>
<li><code>C:\\Apache24\\conf\\httpd.conf</code> dosyasına eklenir:</li>
</ol>
<div class="formula">LoadModule php7_module "c:\\php\\php7apache2_4.dll"
&lt;IfModule php7_module&gt;
  AddHandler application/x-httpd-php .php
  AddType application/x-httpd-php .php .html
  PHPIniDir "c:\\php"
&lt;/IfModule&gt;</div>
<p>Test dosyası: <code>&lt;?php phpinfo(); ?&gt;</code></p></div></details>
<details class="example"><summary>MySQL + phpMyAdmin</summary><div class="inner">
<ul>
<li>MySQL Installer (web community) ile MySQL kurulur.</li>
<li>phpMyAdmin indirilir; <code>php.ini</code> içinde <code>extension=mysqli</code> etkinleştirilir (baştaki ; kaldırılır).</li>
<li><code>httpd.conf</code>: <code>DirectoryIndex index.php index.html</code></li>
</ul></div></details>

<h2>5. XAMPP</h2>
<p><b>X</b> (çapraz platform) + <b>A</b>pache + <b>M</b>ariaDB/MySQL + <b>P</b>HP + <b>P</b>erl. En popüler, ücretsiz, kolay kurulan PHP geliştirme ortamı (apachefriends.org).</p>
<div class="table-wrap"><table>
<tr><th>Ne</th><th>Adres</th></tr>
<tr><td>Web klasörü</td><td><code>C:/xampp/htdocs</code></td></tr>
<tr><td>Ana dizin</td><td><code>http://localhost/</code></td></tr>
<tr><td>Bir dosya</td><td><code>http://localhost/dosya.php</code></td></tr>
<tr><td>phpMyAdmin</td><td><code>http://localhost/phpmyadmin/</code></td></tr>
</table></div>
`
},
{
  id: 4, exam: "vize",
  title: "DNS (Alan Adı Sistemi)",
  short: "ARPAnet ve HOSTS.TXT, DNS hiyerarşisi, TLD, BIND, kök sunucular, registry/registrar/registrant, kayıt türleri.",
  principle: "DNS, merkezi HOSTS.TXT dosyasının yerini alan hiyerarşik ve dağıtık bir isim veritabanıdır.",
  body: `
<h2>1. Tarihçe</h2>
<ul>
<li>1960'lar: ABD Savunma Bakanlığı (DARPA) <b>ARPAnet</b>'i geliştirmeye başladı.</li>
<li>1980'ler: TCP/IP geliştirildi ve ARPAnet'te standart oldu.</li>
<li>1988: ARPAnet projesi sonlandı, adı <b>internet</b> oldu.</li>
<li>1970'lere kadar isim–adres eşleşmesi tek bir <b>HOSTS.TXT</b> dosyasındaydı; haftada 1–2 kez bir FTP adresinde güncellenirdi. Ağ büyüyünce dosya aşırı büyüdü → <b>dağıtık ve hiyerarşik</b> bir sisteme ihtiyaç doğdu.</li>
</ul>

<h2>2. DNS nedir?</h2>
<div class="box key">İnternet uzayını bölümlemeye, bölümleri adlandırmaya ve aralarındaki iletişimi organize etmeye yarayan, bağlı her kaynak için <b>hiyerarşik, dağıtılmış</b> bir adlandırma sistemi. Dağıtık bir veritabanıdır; her bölüm yerel olarak yönetilebilir.</div>
<details class="example"><summary>Çözümleme adımları</summary><div class="inner">
<ol><li>Kullanıcı adresi tarayıcıya yazar.</li><li>Tarayıcı/İS DNS sunucusuna "bu adın IP'si nedir?" diye sorar.</li><li>DNS sunucusu IP adresini döndürür.</li><li>Tarayıcı o IP'ye HTTP isteği gönderir.</li><li>Web sunucusu sayfayı yanıt olarak gönderir.</li></ol>
<p>Ek notlar: <b>rekürsif</b> çözümleme performans, önbellek (cache) uyumu ve iletişim maliyeti açısından iteratiften daha iyidir.</p>
</div></details>

<h2>3. Hiyerarşi ve TLD</h2>
<div class="table-wrap"><table>
<tr><th>TLD</th><th>Kimin için</th></tr>
<tr><td>.com</td><td>Ticari işletmeler</td></tr>
<tr><td>.gov</td><td>ABD devlet kurumları</td></tr>
<tr><td>.edu</td><td>Eğitim kurumları</td></tr>
<tr><td>.org</td><td>Organizasyonlar (çoğunlukla kâr amacı gütmeyen)</td></tr>
<tr><td>.mil</td><td>Askeri</td></tr>
<tr><td>.net</td><td>Ağ organizasyonları</td></tr>
</table></div>
<details class="example" open><summary>sabis.sakarya.edu.tr nasıl yönetilir?</summary><div class="inner">
<div class="table-wrap"><table>
<tr><th>Seviye</th><th>Kim tahsis etti / kim yönetir</th></tr>
<tr><td>.tr</td><td><b>ICANN</b> Türkiye'ye tahsis etti; yönetimi <b>nic.tr (ODTÜ)</b></td></tr>
<tr><td>.edu.tr</td><td>ODTÜ üniversiteler için ayırdı</td></tr>
<tr><td>sakarya.edu.tr</td><td>ODTÜ Sakarya Üniversitesi'ne tahsis etti; yönetimi SAÜ'de</td></tr>
<tr><td>sabis.sakarya.edu.tr</td><td>SAÜ Bilgi İşlem, BAUM'a tahsis etti; yönetimi BAUM'da</td></tr>
</table></div>
<p>Bir bölgenin yönetiminin alt kuruma devredilmesine <b>zone delegation</b> denir.</p>
</div></details>

<h2>4. DNS sunucu yazılımları</h2>
<p><b>BIND</b> (Berkeley Internet Name Domain): internette <b>en yaygın</b> DNS sunucu yazılımı; 1980'lerde Berkeley'de 4 öğrencinin projesi. <b>Windows DNS Server</b>: Windows'ta rol/özellik olarak etkinleştirilir.</p>
<p><b>Kök (root) sunucular:</b> A'dan M'ye <b>13</b> kök isim sunucusu (Verisign, NASA, RIPE-NCC, ICANN, WIDE…).</p>
<p><b>Sunucu tipleri (ek notlar):</b> <i>Authoritative</i> veriyi yönetir — <b>Master</b> verinin düzenlendiği, <b>Slave</b> kopyasının tutulduğu; <i>Caching</i> yetkili sunuculardan alınan veriyi saklar.</p>

<h2>5. Registry · Registrar · Registrant</h2>
<div class="table-wrap"><table>
<tr><th>Kavram</th><th>Anlamı</th></tr>
<tr><td><b>Registry</b></td><td>Alan adları veritabanı ve onu düzenlemeye yetkili, authoritative sunucuları çalıştıran kuruluş</td></tr>
<tr><td><b>Registrar</b></td><td>Registrant adına registry'ye değişiklik isteğini ileten aracı ("elçi")</td></tr>
<tr><td><b>Registrant</b></td><td>Alan adını kullanan varlık</td></tr>
</table></div>
<p>Akış: Registrant istek yapar → Registrar registry'ye iletir → Registry zone'u günceller → Master, sonra Slave'ler güncellenir.</p>

<h2>6. Kayıt türleri</h2>
<div class="table-wrap"><table>
<tr><th>Kayıt</th><th>İşi</th><th>Örnek</th></tr>
<tr><td><b>A</b></td><td>Host adı → <b>IPv4</b>; en çok kullanılan kayıt</td><td><code>sabis.sakarya.edu.tr. IN A 193.140.253.173</code></td></tr>
<tr><td><b>AAAA</b></td><td>Host adı → <b>IPv6</b></td><td><code>www IN AAAA 2001:db8::3</code></td></tr>
<tr><td><b>CNAME</b></td><td>Bir A kaydına <b>takma ad</b>; A kaydı tek yerden değişince tüm takma adlar güncellenir. Önce A kaydı olmalı</td><td><code>rehber… IN CNAME lbsakarya.sabis…</code></td></tr>
<tr><td><b>NS</b></td><td>Bölge için <b>yetkili alan adı sunucuları</b> (birincil/ikincil)</td><td><code>IN NS ns1.sabis.sakarya.edu.tr.</code></td></tr>
<tr><td><b>MX</b></td><td>Alan adına gelen <b>e-postanın</b> işlendiği sunucu; birden fazla olabilir, <b>priority küçük olan önce</b></td><td><code>sakarya.edu.tr. 3600 IN MX 1 ASPMX.L.GOOGLE.COM.</code></td></tr>
<tr><td><b>PTR</b></td><td><b>Ters DNS</b>: IP → host adı (reverse zone)</td><td><code>173.253.140.193.in-addr.arpa IN PTR lbsakarya…</code></td></tr>
<tr><td><b>TXT</b></td><td>Metin bilgi; genelde e-posta doğrulaması için <b>SPF</b></td><td>—</td></tr>
</table></div>
<div class="box warn"><span class="label">Sınav ipucu</span>MX'te öncelik: <b>küçük sayı = yüksek öncelik</b>. PTR adresi ters yazılır ve <code>in-addr.arpa</code> ile biter. 3600 = TTL (saniye).</div>
`
},
{
  id: 5, exam: "vize",
  title: "DHCP",
  short: "DHCP'nin amacı, atanan ayarlar, scope/superscope/exclusion/lease/reservation, DORA, APIPA, kurulum, ipconfig.",
  principle: "DHCP, IP ayarlarını merkezden ve otomatik dağıtarak çakışmaları ve elle yapılandırma yükünü ortadan kaldırır.",
  body: `
<h2>1. DHCP nedir?</h2>
<div class="box key"><b>D</b>ynamic <b>H</b>ost <b>C</b>onfiguration <b>P</b>rotocol: istemcilere IP adresi ve TCP/IP yapılandırmasını otomatik dağıtan servis. 30–40+ bilgisayarlık ağda elle IP vermek hem eziyet hem hata kaynağıdır.</div>
<p>İstemci "otomatik IP" ayarlıysa açılışta ağda DHCP sunucusu arar; sunucu kendi <b>IP havuzundan</b> bir adres verir. Bu işleme <b>kiralama (lease)</b> denir.</p>
<p><b>Otomatik atanabilenler:</b> 1) IP adresi 2) Default gateway 3) Subnet mask 4) DNS adresleri (ayrıca WINS vb., 60'tan fazla seçenek).</p>
<p><b>Avantajlar:</b> merkezi dağıtım · IP çakışmalarının önlenmesi · yöneticinin iş yükünün azalması.</p>
<p>IP başka nasıl değişir? Ethernet kartı değişince, MAC adresi düzenlenince, sunucuda ayrılan IP silinince.</p>

<h2>2. Bileşenler</h2>
<div class="table-wrap"><table>
<tr><th>Terim</th><th>Anlamı</th></tr>
<tr><td><b>Scope</b> (kapsam)</td><td>İstemcilere verilecek IP aralığı, kiralama süresi vb.</td></tr>
<tr><td><b>SuperScope</b> (üst kapsam)</td><td>Aynı fiziksel ağdaki birden çok mantıksal IP ağını desteklemek için kapsamların yönetimsel gruplandırması</td></tr>
<tr><td><b>Exclusion Range</b> (dışlama)</td><td>Kapsam içinden hiçbir bilgisayara verilmeyecek aralık (sunucu, yazıcı gibi statik cihazlar)</td></tr>
<tr><td><b>Address Range / Pool</b></td><td>Otomatik dağıtılabilecek IP havuzu</td></tr>
<tr><td><b>Lease</b> (kiralama)</td><td>İstemcinin IP'yi kullanabileceği süre; <b>varsayılan 8 gün</b></td></tr>
<tr><td><b>Reservation</b> (rezervasyon)</td><td>Bir cihaza (MAC adresine) hep <b>aynı IP</b></td></tr>
<tr><td><b>Scope Options</b></td><td>IP ve subnet mask dışındaki ayarlar (router, DNS); <b>yalnızca o scope'u</b> etkiler</td></tr>
<tr><td><b>Server Options</b></td><td>Sunucudaki <b>tüm scope'ları</b> etkiler</td></tr>
<tr><td><b>DHCP Relay Agent</b></td><td>Kendi segmentinde DHCP sunucusu olmayan istemcilerin IP almasını sağlar</td></tr>
</table></div>

<h2>3. DORA — dört adım</h2>
<div class="table-wrap"><table>
<tr><th>Adım</th><th>Kim → kime</th><th>Ne olur</th></tr>
<tr><td><b>D</b>iscover</td><td>İstemci → broadcast</td><td>"Ağda DHCP sunucusu var mı?" Kendi MAC'ini ekler</td></tr>
<tr><td><b>O</b>ffer</td><td>Sunucu → broadcast</td><td>Veritabanındaki ilk uygun IP'yi teklif eder; istemcinin MAC'i mesajda olduğu için karışıklık olmaz</td></tr>
<tr><td><b>R</b>equest</td><td>İstemci → broadcast</td><td>Teklifi kabul eder; mesaja sunucunun MAC'ini ekler</td></tr>
<tr><td><b>A</b>CK</td><td>Sunucu → broadcast</td><td>Onay; istemci IP'yi edinmiş olur</td></tr>
</table></div>
<details class="example" open><summary>Discover ve Offer paketlerinin adresleri</summary><div class="inner">
<div class="table-wrap"><table>
<tr><th>Alan</th><th>Discover</th><th>Offer</th></tr>
<tr><td>Hedef IP</td><td>255.255.255.255 (broadcast)</td><td>0.0.0.0 (henüz onaylanmadı)</td></tr>
<tr><td>Hedef MAC</td><td>FF-FF-FF-FF-FF-FF (broadcast)</td><td>İstemcinin MAC'i</td></tr>
<tr><td>Kaynak IP</td><td>0.0.0.0 (bilinmiyor)</td><td>Sunucunun IP'si (ör. 10.0.0.1)</td></tr>
<tr><td>Kaynak MAC</td><td>İstemcinin kendi MAC'i</td><td>Sunucunun MAC'i</td></tr>
</table></div></div></details>
<div class="box warn"><span class="label">169.254.x.y</span>Windows istemci DHCP sunucusuna ulaşamazsa işletim sistemi kendine <b>169.254.X.Y</b> (APIPA) adresi atar → kablo / sunucu bağlantısı kontrol edilmeli.</div>

<h2>4. Windows Server'da kurulum</h2>
<ol>
<li>DHCP kurulacak sunucunun IP'si <b>sabit</b> olmalıdır.</li>
<li>Server Manager → Add Roles → <b>DHCP Server</b> → Install. <b>Active Directory gerekmez.</b></li>
<li>Tools → DHCP → IPv4 → <b>New Scope</b>: ad, dağıtılacak aralık (ör. 192.168.1.200–250), dışlamalar, kiralama süresi (8 gün), router (gateway), DNS, (varsa) WINS.</li>
<li>Scope <b>Activate</b> edilir — etkinleştirilmezse istemciler IP alamaz; en az 1 etkin scope gerekir.</li>
</ol>
<p><b>WINS:</b> tek parça isim çözümleyen eski Microsoft çözümü, artık kullanılmıyor.</p>
<div class="table-wrap"><table>
<tr><th>Bölüm</th><th>Ne görülür</th></tr>
<tr><td>Address Pool</td><td>Dağıtılan aralıklar</td></tr>
<tr><td>Address Leases</td><td>IP alan PC'ler; statik kullanılan IP'ler <b>BAD_ADDRESS</b> görünür (çakışma) — zaman zaman temizlenmeli</td></tr>
<tr><td>Reservations</td><td>MAC → sabit IP (ör. 192.168.1.222 yalnızca o MAC'e)</td></tr>
</table></div>

<h2>5. ipconfig</h2>
<div class="formula">ipconfig            → IP adresini gösterir
ipconfig /all       → tüm yapılandırma (MAC, DNS, DHCP…)
ipconfig /release   → mevcut IP'yi bırakır (sıfırlar)
ipconfig /renew     → DHCP'den yeni IP ister</div>
`
},
{
  id: 6, exam: "vize",
  title: "VPN (Sanal Özel Ağlar)",
  short: "VPN tanımı, tünel protokolleri (PPTP, L2TP, SSTP) ve portları, VPN türleri, gönüllü/zorunlu tünel, 4 fonksiyon, tünelleme.",
  principle: "VPN, herkese açık ağ üzerinde kapsülleme, kimlik doğrulama ve şifrelemeyle özel bir tünel kurar.",
  body: `
<h2>1. VPN nedir?</h2>
<div class="box key"><span class="label">Gartner tanımı</span>Herkese açık bir iletişim altyapısı üzerinden, iki veya daha fazla doğrulanmış taraf arasında güvenli veri iletişimi sağlayan sanal ağ.</div>
<ul>
<li>İnternet üzerinden <b>şifreli ve güvenli</b> iletişim; kiralık hat (leased line) yerine tercih sebebi <b>maliyet ve kolay yapılandırma</b>.</li>
<li>Tüm VPN çözümlerinde güvenli <b>tüneller</b> vardır; güvenlik kriptolama ile sağlanır.</li>
<li>VPN ile bağlanan istemci <b>o ağdan bir IP alır</b> ve o ağın üyesi gibi çalışır. Havuzda boş IP yoksa bağlantı başarısız olur (IP'ler DHCP ya da elle).</li>
</ul>
<p><b>Sanaldır:</b> kullanıcı ağı sahiplenmez, ağ birçok kullanıcıyla paylaşılır. <b>Özeldir:</b> trafik özel; internetten geçerken şifreleme, doğrulama, yetkilendirme, spoofing önleme gerekir. <b>Ağdır:</b> fiziksel varlığı olmasa da iki uç arasında güvenilir tünel kuran bir ağdır.</p>

<h2>2. Tünel protokolleri</h2>
<p>Hepsinin temelinde <b>PPP</b> (Point-to-Point Protocol — çevirmeli ve noktadan noktaya aktarım) vardır.</p>
<div class="table-wrap"><table>
<tr><th>Protokol</th><th>Özellik</th></tr>
<tr><td><b>PPTP</b></td><td>Tünel yönetimi <b>TCP 1723</b>; tünel verisi <b>GRE</b> (protokol 47). PPP yükü şifrelenip sıkıştırılabilir</td></tr>
<tr><td><b>L2TP</b></td><td>Cisco'nun <b>L2F</b> ile <b>PPTP</b>'nin birleşimi; <b>IPSec</b> desteği (kullanılacaksa istemci ve sunucu desteklemeli)</td></tr>
<tr><td><b>SSTP</b></td><td><b>TCP 443</b> üzerinden <b>HTTPS</b>; bazı güvenlik duvarları PPTP/L2TP'yi engellediği için geliştirildi</td></tr>
</table></div>

<h2>3. VPN türleri</h2>
<h3>Kullanım alanına göre</h3>
<div class="table-wrap"><table>
<tr><th>Tür</th><th>Kim kullanır</th><th>Özellik</th></tr>
<tr><td><b>Access VPN</b></td><td>Gerçek kişiler (bireysel)</td><td>Mobil kullanıcılar, SOHO ofisler merkeze güvenli bağlanır; RAS kimlik doğrulama ve yetkilendirme yapar</td></tr>
<tr><td><b>Intranet VPN</b></td><td>Tüzel kişiler</td><td>Siteden siteye; özel ağın iki bölümünü bağlar; <b>karşılıklı doğrulama</b></td></tr>
<tr><td><b>Extranet VPN</b></td><td>Tüzel kişiler</td><td>İş ortakları, iştiraklerle; dış dünyadan tamamen yalıtılmış değil, <b>kontrollü erişim</b>. Maliyeti düşük, yönetimi kolay, çok ISP seçeneği</td></tr>
</table></div>
<h3>Teknolojiye göre</h3>
<div class="table-wrap"><table>
<tr><th></th><th>Remote Access (uzaktan erişim)</th><th>Site-to-site (siteden siteye)</th></tr>
<tr><td>Kim için</td><td>Evden / seyahatte çalışan kullanıcı</td><td>Ağlar arası; WAN gibi çalışır, router'dan router'a</td></tr>
<tr><td>En önemli özellik</td><td>Gezgin kullanıcının <b>kimlik doğrulaması</b></td><td>Yönlendiriciler arası veri bağlantısı</td></tr>
<tr><td>Tünel</td><td>Tünel istemcide kurulur ve yönetilir → <b>gönüllü (voluntary) tünel</b></td><td>NAS istemci adına tünel açar, istemcinin kontrolünde değil → <b>zorunlu (compulsory) tünel</b></td></tr>
</table></div>
<p><b>Kullanım alanları:</b> evden ofise bağlanma · şubeler arası güvenli iletişim · kısıtlamasız içerik erişimi.</p>

<h2>4. VPN'in dört kritik fonksiyonu</h2>
<div class="table-wrap"><table>
<tr><th>Fonksiyon</th><th>Anlamı</th></tr>
<tr><td>Authentication</td><td>Gönderen ve alan doğru kişi</td></tr>
<tr><td>Access control</td><td>Yetkisiz kişi VPN'i kullanamaz</td></tr>
<tr><td>Confidentiality</td><td>Veri gizliliği</td></tr>
<tr><td>Data integrity</td><td>Veri bütünlüğü (içerik değiştirilemez)</td></tr>
</table></div>
<p><b>Üç güvenlik tekniği:</b> <b>Kapsülleme</b> (tünelleme) · <b>Kimlik sorgulama</b> (LoginID/şifre, PKI) · <b>Kriptolama</b> (dinlemeyi engeller; bütünlük ile değiştirmeyi engeller).</p>

<h2>5. Tünelleme (enkapsülasyon)</h2>
<p>VPN'in en önemli kısmı. Orijinal pakete (payload) <b>tünel protokolünün başlığı</b> eklenir; başlık yönlendirme bilgisi içerir ve paket internette taşınabilir hâle gelir.</p>
<p><b>İki faz:</b> Faz 1 — istemci VPN isteği gönderir, <b>HA (Home Agent)</b> kimliği doğrular. Faz 2 — tünel içinden veri aktarımı başlar.</p>
<div class="table-wrap"><table>
<tr><th>Protokol kategorisi</th><th>Görev</th><th>Örnek</th></tr>
<tr><td>Taşıyıcı</td><td>Tünellenmiş paketleri internette yönlendirir; paketler bunun içine kapsüllenir</td><td>IP</td></tr>
<tr><td>Enkapsüle</td><td>Payload'ı kapsüller, tüneli kurar ve sonlandırır</td><td><b>PPTP, L2TP, IPSec</b></td></tr>
<tr><td>İletim</td><td>Tünelden geçecek orijinal veriyi taşır</td><td><b>PPP, SLIP</b></td></tr>
</table></div>
`
},
{
  id: 7, exam: "vize",
  title: "Sunucu (Windows) Güvenliği",
  short: "Alınacak tedbirler, Nessus · Nmap · Ethereal, Server Core komutları, Windows sunucu kontrol listesi, Linux önerileri.",
  principle: "Açığı saldırgandan önce bul: tara, gereksizi kapat, güncel tut, parolayı ve erişimi sıkılaştır.",
  body: `
<h2>1. Neden önemli?</h2>
<p>Saldırganlar giderek bilgileniyor; siber saldırılar bilgi ve maddi kayba yol açıyor. Sebeplerden biri <b>eski teknoloji</b> kullanımı.</p>
<h3>Genel tedbirler</h3>
<ul>
<li>Güvenlik duvarı</li><li>Güvenli iletişim protokolleri</li><li>Saldırı tespiti</li><li>Zararlı koda karşı yazılım</li><li>Güncel işletim sistemi</li>
<li><b>RDP (3389)</b> ve önemli portların değiştirilmesi</li><li>Ağ ayarlarında yalnızca <b>IPv4</b> aktif</li>
</ul>
<p>Saldırı amaçlı geliştirilen araçlar sistemi izlemeye de yarar: temel fikir <b>açığı saldırgandan önce ortaya çıkarmak</b>.</p>

<h2>2. Güvenlik tarama uygulamaları</h2>
<div class="table-wrap"><table>
<tr><th>Araç</th><th>Özellik</th></tr>
<tr><td><b>Nessus</b></td><td>Uzaktan tarama aracı; Windows ve UNIX; Gtk arayüzü; <b>1200'den fazla</b> açığı raporlar; bilinen kurallara bağlı olmadan tarar</td></tr>
<tr><td><b>Nmap</b></td><td>Açık kaynak; güvenlik denetimi ve ağ araştırması; tek konak ya da geniş ağ; IP paketleriyle <b>canlı bilgisayarları</b>, sunulan uygulamaları, <b>işletim sistemini ve güvenlik duvarını</b> tespit eder</td></tr>
<tr><td><b>Ethereal</b></td><td>Ücretsiz <b>ağ analizcisi</b> (Windows/UNIX); canlı ya da kayıtlı ağ verisi; zengin süzme dili; <b>TCP oturumu birleştirme</b></td></tr>
</table></div>

<h2>3. Windows Server Core yapılandırması</h2>
<div class="formula">sconfig               → Core sunucunun metin tabanlı yapılandırma menüsü
Get-Service           → çalışan servisleri listeler
Get-Process           → sunucudaki işlemleri listeler
Get-WindowsFeature    → kurulu ve kurulabilir rol/özellikler</div>

<h2>4. Windows sunucu kontrol listesi</h2>
<div class="table-wrap"><table>
<tr><th>Alan</th><th>Kural</th></tr>
<tr><td>Sistem</td><td>Desteklenen güncel Windows; BIOS parolalı; otomatik güncelleme (mümkünse SCCM); lisans anahtarı girilmeli; sunucular Active Directory'ye alınmalı</td></tr>
<tr><td>Yetki ve yedek</td><td>Yetki hiyerarşisi listeleri; düzenli yedek</td></tr>
<tr><td>Parola</td><td><b>3–6 ayda</b> bir değiştir; <b>en az 12–14 karakter</b>, büyük/küçük harf, rakam, özel karakter; belli sürede <b>3+ hatalı denemede</b> hesap kilitlenir</td></tr>
<tr><td>İzleme</td><td>Loglar düzenli takip; anti-virüs taraması</td></tr>
<tr><td>Ağ</td><td>Güvenlik duvarı aktif; kullanılmayan portlar kalıcı kapalı; <b>RDP varsayılan portu değiştir</b>; uzak masaüstü ve sunucular arası iletişimde <b>VPN</b></td></tr>
<tr><td>Azaltma</td><td>Kullanılmayan özellikleri kapat (yazıcı/dosya paylaşımı); tarayıcıları kaldır; <b>phishing</b>'e karşı e-posta istemcilerini kaldır</td></tr>
<tr><td>Hesaplar</td><td>UAC etkin; <b>misafir hesabı kapalı</b>; kullanılmayan kullanıcılar devre dışı/silinmiş</td></tr>
<tr><td>Protokoller</td><td>Web'de <b>TLS</b>; <b>Telnet, FTP gibi şifresiz protokoller yok</b>; dosya yükleme <b>SFTP</b>; ncacn_ip_tcp kaldır; TCP/IP üzerinden NetBIOS kapalı</td></tr>
<tr><td>Kimlik doğrulama</td><td>LAN Manager seviyesi yalnızca <b>NTLMv2</b>; LM ve NTLM reddedilir</td></tr>
<tr><td>DNS</td><td>En az <b>iki DNS sunucusu</b>, nslookup ile çift onay; geçerli <b>A</b> kaydı + ters arama için <b>PTR</b> kaydı</td></tr>
<tr><td>Şifreleme</td><td>NTFS şifreleme veya <b>BitLocker</b></td></tr>
<tr><td>Fiziksel</td><td>Su baskını, yüksek ısı, kilitli oda, statik elektrik</td></tr>
</table></div>

<h2>5. Linux için öneriler</h2>
<ul>
<li>Root erişimini kaldır · <b>SSH portunu değiştir</b> · SSH <b>anahtar çifti</b> kullan</li>
<li>Güvenlik duvarı kur · <b>Fail2Ban</b> kullan · gereksiz servisleri kapat · açık portları kontrol et</li>
<li><code>/var</code>, <code>/usr</code>, <code>/home</code> dizinlerini ayrı disklere bağla</li>
<li>Kullanılmayacak bileşenleri sil: rsh, rlogin, telnet sunucusu, X Window, derleyiciler, snmpd, NFS/NIS…</li>
<li>Saldırıların çoğu kullanıcı adı/parola üzerinden → parola politikaları; <code>hosts.allow</code> / <code>hosts.deny</code> ile erişim kısıtla (ör. <code>sshd: 195.244.37.241</code>)</li>
</ul>
`
},
{
  id: 8, exam: "final",
  title: "Konteynerler ve Docker",
  short: "Container tanımı, Docker'ın tarihi, VM ↔ Docker karşılaştırması, 5 bileşen, katmanlı imaj, docker0, temel komutlar.",
  principle: "Konteyner, ana işletim sisteminin kaynaklarını izole ederek uygulamayı her ortamda aynı şekilde çalıştırır.",
  body: `
<h2>1. Container</h2>
<div class="box key">Ana işletim sistemi kaynaklarını <b>izole ederek</b> uygulamalara tahsis eden yapılar. Farklı uygulamalara farklı ortam sağlar; <b>imaj (image)</b> olarak tekrar tekrar kullanılabilir.</div>
<p><b>Faydaları:</b> verimli kaynak kullanımı · kolay dağıtım · hızlı başlama/bitiş · imaj sayesinde standartlaşma.</p>

<h2>2. Docker</h2>
<ul>
<li>PaaS şirketi <b>DotCloud</b>, <b>2013</b>. <b>LXC</b> + yeni iyileştirmeler.</li>
<li><b>Tek konteyner, tek proses</b> önerir. Linux, macOS, Windows'ta çalışır.</li>
<li>Linux tabanlı, açık kaynak <b>uygulama sanallaştırma</b> teknolojisi; konteyner her sistemde beklendiği gibi çalışır → uygulamalar standartlaşır.</li>
<li>Geliştirme ve ortam değişkenleri arasındaki uyumsuzlukları kaldırır; aynı uygulama dizüstünde, veri merkezinde ve bulutta değişmeden çalışır.</li>
<li>Kullandığı teknolojiler: lxc, <b>cgroups</b>, aufs, <b>copy-on-write</b> dosya sistemleri.</li>
</ul>

<h2>3. VM ↔ Docker</h2>
<div class="table-wrap"><table>
<tr><th>Kıyas</th><th>Sanal makine (VM)</th><th>Docker</th></tr>
<tr><td>İşletim sistemi</td><td>Tam işletim sistemi</td><td>Küçültülmüş OS imajı</td></tr>
<tr><td>İzolasyon</td><td><b>Yüksek</b></td><td>Daha düşük</td></tr>
<tr><td>Çalışır hâle gelme</td><td>Dakikalar</td><td><b>Saniyeler</b></td></tr>
<tr><td>Versiyonlama</td><td>Yok</td><td>Yüksek</td></tr>
<tr><td>Paylaşılabilirlik</td><td>Düşük</td><td>Yüksek</td></tr>
</table></div>

<h2>4. Beş bileşen</h2>
<div class="table-wrap"><table>
<tr><th>Bileşen</th><th>Görevi</th></tr>
<tr><td>Docker Servisi (daemon)</td><td>Konteyner ayarlarını yapar, çalışma verisini toplar; sanallaştırma yazılımı <b>değildir</b>; <b>RESTful API</b>'ye sahiptir</td></tr>
<tr><td>Docker İstemcisi</td><td>Aynı ya da farklı makineden servise RESTful API ile bağlanıp yönetir</td></tr>
<tr><td>Docker İmajı</td><td>Yazılım yüklenebilen, özelleştirilebilen <b>portatif sistem imajı</b></td></tr>
<tr><td>Docker Kaynağı (registry)</td><td>İmajların depolandığı, <b>push/pull</b> yapılan depo (Docker Hub)</td></tr>
<tr><td>Docker Konteyneri</td><td>İmaj üzerinde çalışan, diğer servislerden izole sanal ortam</td></tr>
</table></div>
<p><b>İmaj nasıl çalışır?</b> Her imaj <b>katmanlardan</b> oluşur; katmanlar <b>union filesystem</b> ile birleşir. Değişiklik yeni bir katman olarak eklenir → yeni imaj dağıtmaya gerek kalmaz.</p>
<p><b>Konteyner</b> = işletim sistemi + kullanıcı dosyaları + metadata; her konteyner bir imajdan oluşur.</p>
<p><b>Ağ:</b> kurulumda konteynerlere sanal IP için <b>docker0</b> bridge'i oluşturulur. <b>Otomatik başlatma</b> varsayılan olarak yok: süreç yönetim sistemi ya da <code>--restart</code> bayrağı. (Ek notlar: arayüzler <b>Shipyard</b> ve <b>DockerUI</b>.)</p>

<h2>5. Temel komutlar</h2>
<div class="formula">docker -v  /  docker version     → sürüm
sudo docker info                  → sistem bilgisi
docker --help                     → yardım
docker search &lt;imaj&gt;             → registry'de ara
docker pull wordpress             → imaj indir
docker images                     → indirilen imajlar
docker rmi wordpress              → imaj sil (docker image rmi)
docker run ubuntu                 → imajı çalıştır
docker stop                       → konteyneri durdur</div>
<p>Resmî registry: <code>hub.docker.com</code> (eski) / <code>store.docker.com</code> (yeni).</p>
`
},
{
  id: 9, exam: "final",
  title: "Bulut Bilişim",
  short: "IaaS · PaaS · SaaS, avantaj/dezavantaj, sunucu odası koşulları, FM200, güvenlik katmanları, 3-2-1 yedekleme, KVKK/GDPR, SLA.",
  principle: "Bulut esneklik ve maliyet avantajı verir; karşılığında güvenlik, bağlantı ve kontrol riskleri yönetilmelidir.",
  body: `
<h2>1. Bulut bilişim nedir?</h2>
<p>Verilerin internet üzerinden uzak sunucularda depolanması, işlenmesi ve erişilmesi; yerel donanım gerektirmez. Örnek: Google Drive, Dropbox, Netflix.</p>

<h2>2. Hizmet modelleri</h2>
<div class="table-wrap"><table>
<tr><th>Model</th><th>Ne sunar</th><th>Kullanıcının sorumluluğu</th><th>Örnek</th></tr>
<tr><td><b>IaaS</b></td><td>Sanal sunucu, depolama, ağ</td><td>İşletim sistemi, uygulama, veri — <b>en fazla kontrol</b></td><td>AWS</td></tr>
<tr><td><b>PaaS</b></td><td>Uygulama geliştirme/çalıştırma platformu</td><td>Yalnızca uygulama ve veri — ortada</td><td>Google App Engine</td></tr>
<tr><td><b>SaaS</b></td><td>İnternetten kullanılan yazılım</td><td>Yalnızca kullanmak — <b>en az kontrol</b></td><td>Google Docs, Microsoft 365</td></tr>
</table></div>

<h2>3. Avantajlar ↔ dezavantajlar</h2>
<div class="table-wrap"><table>
<tr><th>Avantaj</th><th>Dezavantaj</th></tr>
<tr><td>Maliyet tasarrufu, kullanım bazlı ödeme</td><td>Veri güvenliği ve gizlilik (üçüncü taraf barındırır)</td></tr>
<tr><td>Esneklik ve ölçeklenebilirlik</td><td>Uygunluk / regülasyon (ülke yasaları)</td></tr>
<tr><td>Her yerden erişim, mobilite</td><td>İnternet bağlantısına bağımlılık</td></tr>
<tr><td>İş sürekliliği ve felaket kurtarma</td><td>Altyapı üzerinde kontrol eksikliği</td></tr>
</table></div>
<p>Kullanım alanları: sağlık (tele-tıp), finans, eğitim (Zoom, Google Classroom, Moodle, Canvas), yapay zekâ ve veri analitiği (AWS SageMaker, Azure ML, Google AI Platform).</p>

<h2>4. Sunucu odası ve veri merkezi</h2>
<div class="table-wrap"><table>
<tr><th>Konu</th><th>Önlem</th></tr>
<tr><td>Fiziksel güvenlik</td><td>Biyometrik, kartlı geçiş, CCTV</td></tr>
<tr><td>Güç yedekliliği</td><td><b>UPS</b>, jeneratör, çift enerji beslemesi</td></tr>
<tr><td>İklimlendirme</td><td>Hassas sıcaklık/nem kontrolü; <b>HVAC</b> kesintisiz</td></tr>
<tr><td>Raf ve kablolama</td><td>Standart rack, düzenli kablo (havalandırma, bakım)</td></tr>
<tr><td>Yangın</td><td>Duman/ısı dedektörü; su yerine cihaza zarar vermeyen <b>FM200 gazı</b></td></tr>
<tr><td>Afet</td><td>Acil durum planları; farklı lokasyonda yedek/replikasyon</td></tr>
</table></div>
<div class="box key"><span class="label">Ezberle</span>Sıcaklık <b>18–27 °C</b> · Nem <b>%40–60</b> (düşük → statik elektrik, yüksek → yoğuşma) · Toz filtreleme.</div>

<h2>5. Güvenlik katmanları</h2>
<ul>
<li><b>Şifreleme:</b> aktarımda ve depolamada; <b>AES-256</b></li>
<li><b>Erişim denetimi:</b> rol tabanlı — <b>RBAC</b></li>
<li><b>MFA:</b> şifreye ek SMS, biyometrik, uygulama doğrulama</li>
<li><b>Güvenlik duvarı, IDS/IPS, WAF</b> ve sürekli izleme</li>
</ul>
<p><b>Tehditler:</b> DDoS (trafik filtreleme), veri ihlali/yetkisiz erişim (kötü yapılandırma), <b>ransomware</b> (fidye yazılımı).</p>
<p><b>Otomasyon ve izleme:</b> otomatik kapasite/yedek/güncelleme; Prometheus, Grafana; log analizi; olay müdahale otomasyonu.</p>

<h2>6. Yedekleme</h2>
<p>Türleri: <b>tam</b>, <b>artımlı</b> (incremental), <b>fark</b> (differential). Otomatik zamanlanmış yedekleme insan hatasını azaltır; geri yükleme planları <b>test edilmelidir</b>.</p>
<div class="box key"><span class="label">3-2-1 kuralı</span><b>3</b> kopya veri · <b>2</b> farklı ortam · <b>1</b> kopya farklı fiziksel lokasyonda.</div>

<h2>7. Mevzuat ve SLA</h2>
<div class="table-wrap"><table>
<tr><th>Düzenleme</th><th>Kapsam</th></tr>
<tr><td><b>KVKK</b> (Türkiye)</td><td>Kişisel verilerin işlenmesi ve saklanması</td></tr>
<tr><td><b>GDPR</b> (AB)</td><td>Kullanıcı rızası, <b>unutulma hakkı</b>, veri taşınabilirliği</td></tr>
<tr><td>Veri lokalizasyonu</td><td>Verinin yerel sunucuda tutulma şartı</td></tr>
<tr><td>Sertifikalar</td><td><b>ISO 27001</b>, <b>SOC 2</b></td></tr>
</table></div>
<p><b>SLA (Hizmet Seviyesi Anlaşması):</b> genellikle <b>%99,9+ uptime</b> garantisi, yanıt süresi ve bant genişliği metrikleri, yedekleme/güvenlik standartları; ihlalde hizmet kredisi, para iadesi, fesih.</p>
<p><b>Maliyet:</b> <i>pay-as-you-go</i> (kullandığın kadar öde) → sürekli izleme; rezervasyon/taahhütle <b>%40'a varan</b> indirim; atıl VM ve depolamayı kapatma; AWS Cost Explorer, Azure Cost Management.</p>
`
},
{
  id: 10, exam: "final",
  title: "FTP ve E-posta Protokolleri (ek notlar)",
  short: "FTP port 20/21, dosya tipleri ve iletim modları, SMTP port 25/587, yanıt kodları, IMAP, POP3, e-posta sunucuları.",
  principle: "Bu hafta resmî sunumlarda değil, kaynaktaki ek notlarda geçiyor; finalde sorulabilir diye eklendi.",
  body: `
<div class="box warn">Bu konu repodaki resmî SY sunumlarında yok; "Diğer" klasöründeki anonim ders notlarından derlendi.</div>
<h2>1. FTP</h2>
<p>TCP/IP kullanır. Çözdüğü sorunlar: iki sistemin farklı dosya adı kuralları, farklı metin/veri temsili, farklı dizin yapıları.</p>
<div class="table-wrap"><table>
<tr><th>Bağlantı</th><th>Port</th></tr>
<tr><td>Kontrol bağlantısı</td><td><b>21</b></td></tr>
<tr><td>Veri bağlantısı</td><td><b>20</b></td></tr>
</table></div>
<p>Sunucu 21'de <b>pasif açık</b> (passive open) verip bekler; istemci geçici port kullanıp <b>etkin açık</b> (active open) verir. Birden çok dosyada veri bağlantısı birçok kez açılıp kapanabilir. Kontrol bağlantısında SMTP ile aynı yaklaşım kullanılır.</p>
<p>Heterojenlik, gönderimden önce üç öznitelik tanımlanarak çözülür: <b>dosya tipi</b>, <b>veri yapısı</b>, <b>iletim modu</b>.</p>
<div class="table-wrap"><table>
<tr><th>Dosya tipleri</th><th>İletim modları</th></tr>
<tr><td>ASCII · EBCDIC · Resim (image)</td><td>Akış (stream) · Blok · Sıkıştırılmış</td></tr>
</table></div>
<p>Güvenlik haftasındaki kural: FTP <b>şifresizdir</b>; dosya yüklemede <b>SFTP</b> tercih edilir.</p>

<h2>2. SMTP</h2>
<p>Yalnızca e-posta <b>göndermek</b> için. Port <b>25</b>; <b>587</b> SMTP sunucusu tarafından desteklenir, şifresiz veya <b>TLS</b> bağlantı için.</p>
<p>İletişim: 1) hedef alan adını arar (MX) 2) oturum başlatma 3) istemci başlatma 4) posta işlemleri 5) sonlandırma.</p>
<p><b>Yanıt kodu xyz:</b> x — iyi/kötü/eksik · y — hata türü · z — o hatanın belirli nedeni. Posta nesneleri: <b>zarf (mektup)</b> ve <b>içerik</b>.</p>

<h2>3. Posta alma</h2>
<div class="table-wrap"><table>
<tr><th>Protokol</th><th>Özellik</th></tr>
<tr><td><b>IMAP</b> (IMAP4)</td><td>Uygulama katmanı; yerel kullanıcının <b>uzaktaki sunucudaki</b> posta kutusuna erişmesi</td></tr>
<tr><td><b>POP3</b></td><td>Yalnızca e-postayı <b>almak</b> için, son kullanıcılar tarafından</td></tr>
</table></div>
<p>SMTP ile iletişim için gerekenler: kullanıcı adı, şifre, giden sunucu adresi, gelen sunucu adresi.</p>
<p><b>Yaygın sunucular:</b> Windows — MS Exchange Server, MailEnable, hMailServer · Unix/Linux — Sendmail, Postfix, Qmail, Exim.</p>
`
}
];

// Geçmiş sınavlarda çıkan klasik (yazılı) sorular. Cevaplar slayttaki tanımlardır.
const CLASSIC = [
{
  exam: "vize", week: 5,
  title: "DHCP istemcisinin 4 aşaması ve tanımları",
  question: "DHCP servisi, DHCP istemcisini 4 aşamada yapılandırır. Bu aşamaları sırasıyla yazıp her birini tanımlayınız.",
  hint: "Kısaltma: DORA — Discover, Offer, Request, ACK.",
  items: [
    { name: "1. DHCP Discover (DHCP keşfi)",
      def: "İstemci (client PC) broadcast yaparak ortamda DHCP sunucusu olup olmadığına bakar. Broadcast, herkese gönderilen paketlerdir; paketi alıp bu hizmete cevap verebilecek olan DHCP sunucusudur.",
      extra: "İstemci mesajın içine kendi fiziksel (MAC) adresini ekler. Hedef IP 255.255.255.255, hedef MAC FF-FF-FF-FF-FF-FF, kaynak IP 0.0.0.0." },
    { name: "2. DHCP Offer (IP kiralama teklifi)",
      def: "Bu bir bilgi paketidir. DHCP hizmetini veren makine IP verebileceğini burada belirtir. DHCP sunucusu broadcast yaparak IP teklif eder.",
      extra: "Sunucu, veritabanındaki ilk uygun IP adresini önerir. Mesaj broadcast gider ama içinde istemcinin MAC adresi olduğu için karışıklık olmaz." },
    { name: "3. DHCP Request (Kiralanacak IP isteği)",
      def: "İstemci broadcast yaparak teklif edilen IP'yi kabul ettiğini söyler.",
      extra: "İstemci bu kez mesajın içine DHCP sunucusunun fiziksel (MAC) adresini ekler." },
    { name: "4. DHCP ACK (IP kiralama onayı)",
      def: "DHCP sunucusu broadcast yaparak IP'yi kullanması için izin verir.",
      extra: "Sunucu isteği kabul ettiğini belirten ACK mesajını yayınlar ve istemci IP adresini edinmiş olur." }
  ],
  summary: "İstemci bilgisayar açıldığında ağa DHCPDiscover gönderir. Bunu alan DHCP sunucusu DHCPOffer ile IP sağlayabileceğini belirtir. İstemci DHCPRequest ile IP ister. DHCP sunucusu IP adresini verir ve DHCPAck gönderir."
},
{
  exam: "final", week: 8,
  title: "Docker'ı oluşturan 5 ana parça ve tanımları",
  question: "Docker sistemi 5 ayrı parçadan oluşur. Bu parçaları yazıp her birini tanımlayınız.",
  hint: "Servis · İstemci · İmaj · Kaynak · Konteyner.",
  items: [
    { name: "1. Docker Servisi",
      def: "Docker servisi sadece konteynerlerin ayarlarını yapar ve çalışma zamanı verilerini toplar. Bir sanallaştırma yazılımı değildir ve RESTful API'ye sahiptir.",
      extra: "" },
    { name: "2. Docker İstemcisi",
      def: "Aynı makinede ya da farklı bir makinede çalışan, Docker servisine RESTful API ile bağlanarak onu yöneten bileşendir.",
      extra: "" },
    { name: "3. Docker İmajı",
      def: "Üzerine yazılımlarımızı yükleyebildiğimiz ve kendi istediğimiz şekilde oluşturabildiğimiz portatif sistem imajlarıdır.",
      extra: "Her imaj katmanlardan oluşur; değişiklik yeni bir katman olarak eklenir (union filesystem)." },
    { name: "4. Docker Kaynağı",
      def: "Docker imajlarını depoladığınız, push ve pull işlemlerini yapabildiğiniz depodur.",
      extra: "Docker Hub'ın herkese açık kaynakları kullanılabilir ya da kendi kaynağınızı oluşturabilirsiniz." },
    { name: "5. Docker Konteyneri",
      def: "Bir Docker imajı üzerinde koştuğunuz bir dizi komutun, sistemdeki diğer tüm servislerden izole çalıştığı sanal ortamdır. Sanal sunucu olarak düşünülebilir.",
      extra: "Konteyner; işletim sistemi, kullanıcının eklediği dosyalar ve metadatadan oluşur. Her konteyner bir imajdan meydana gelir." }
  ],
  summary: "Servis konteynerleri yönetir, istemci servise RESTful API ile komut verir, imaj taşınabilir şablondur, kaynak (registry) imajların deposudur, konteyner imajdan çalışan izole ortamdır."
}
];
