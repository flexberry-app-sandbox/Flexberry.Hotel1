



CREATE TABLE "Комната"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодКомнаты" NUMBER(10) NULL,

	"Класс" NVARCHAR2(255) NULL,

	"Стоимость" NUMBER(10) NULL,

	"КолвоМест" NUMBER(10) NULL,

	"Отель" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудник"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодCотрудника" NUMBER(10) NULL,

	"Имя" NVARCHAR2(255) NULL,

	"Фамилия" NVARCHAR2(255) NULL,

	"Отчество" NVARCHAR2(255) NULL,

	"Должность" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должность"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодДолжности" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Доступ"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодДоступа" NUMBER(10) NULL,

	"Доступ" NVARCHAR2(255) NULL,

	"Комната" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЗаписьГостя"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодЗаписи" NUMBER(10) NULL,

	"Комментарий" NVARCHAR2(255) NULL,

	"Сотрудник" RAW(16) NOT NULL,

	"Гости" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Гости"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодГостя" NUMBER(10) NULL,

	"Имя" NVARCHAR2(255) NULL,

	"Фамилия" NVARCHAR2(255) NULL,

	"Отчество" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "РегистрЗаписи"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодРегистра" NUMBER(10) NULL,

	"ДатаЗаселения" DATE NULL,

	"ДатаВыезда" DATE NULL,

	"ЗаписьГостя" RAW(16) NOT NULL,

	"Доступ" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Отель"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодОтеля" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Комната"
	ADD CONSTRAINT "Комната_FОтель_0" FOREIGN KEY ("Отель") REFERENCES "Отель" ("primaryKey");

CREATE INDEX "Комната_IОтель" on "Комната" ("Отель");

ALTER TABLE "Сотрудник"
	ADD CONSTRAINT "Сотрудник_FДо_9849" FOREIGN KEY ("Должность") REFERENCES "Должность" ("primaryKey");

CREATE INDEX "Сотрудник_IДо_2523" on "Сотрудник" ("Должность");

ALTER TABLE "Доступ"
	ADD CONSTRAINT "Доступ_FКомната_0" FOREIGN KEY ("Комната") REFERENCES "Комната" ("primaryKey");

CREATE INDEX "Доступ_IКомната" on "Доступ" ("Комната");

ALTER TABLE "ЗаписьГостя"
	ADD CONSTRAINT "ЗаписьГостя_F_2106" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "ЗаписьГостя_I_3549" on "ЗаписьГостя" ("Сотрудник");

ALTER TABLE "ЗаписьГостя"
	ADD CONSTRAINT "ЗаписьГостя_F_3409" FOREIGN KEY ("Гости") REFERENCES "Гости" ("primaryKey");

CREATE INDEX "ЗаписьГостя_I_5081" on "ЗаписьГостя" ("Гости");

ALTER TABLE "РегистрЗаписи"
	ADD CONSTRAINT "РегистрЗапис_6869" FOREIGN KEY ("ЗаписьГостя") REFERENCES "ЗаписьГостя" ("primaryKey");

CREATE INDEX "РегистрЗапис_2599" on "РегистрЗаписи" ("ЗаписьГостя");

ALTER TABLE "РегистрЗаписи"
	ADD CONSTRAINT "РегистрЗапис_5981" FOREIGN KEY ("Доступ") REFERENCES "Доступ" ("primaryKey");

CREATE INDEX "РегистрЗапис_5925" on "РегистрЗаписи" ("Доступ");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


