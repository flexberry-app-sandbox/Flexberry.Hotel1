﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Hotel
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Регистр записи.
    /// </summary>
    // *** Start programmer edit section *** (РегистрЗаписи CustomAttributes)

    // *** End programmer edit section *** (РегистрЗаписи CustomAttributes)
    [AutoAltered()]
    [Caption("Регистр записи")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РегистрЗаписиE", new string[] {
            "КодРегистра as \'Код регистра\'",
            "ЗаписьГостя as \'Запись гостя\'",
            "ЗаписьГостя.Гости as \'Гости\'",
            "ЗаписьГостя.Гости.Имя as \'Имя\'",
            "ЗаписьГостя.Гости.Фамилия as \'Фамилия\'",
            "ЗаписьГостя.Гости.Отчество as \'Отчество\'",
            "ДатаЗаселения as \'Дата заселения\'",
            "ДатаВыезда as \'Дата выезда\'",
            "ЗаписьГостя.Комментарий as \'Комментарий\'",
            "ЗаписьГостя.Сотрудник as \'Сотрудник\'",
            "ЗаписьГостя.Сотрудник.КодCотрудника as \'Код сотрудника\'"}, Hidden=new string[] {
            "ЗаписьГостя.Гости.Имя",
            "ЗаписьГостя.Гости.Фамилия",
            "ЗаписьГостя.Гости.Отчество",
            "ЗаписьГостя.Комментарий",
            "ЗаписьГостя.Сотрудник.КодCотрудника"})]
    [MasterViewDefineAttribute("РегистрЗаписиE", "ЗаписьГостя", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Комментарий")]
    public class РегистрЗаписи : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодРегистра;
        
        private System.DateTime fДатаЗаселения;
        
        private System.DateTime fДатаВыезда;
        
        private IIS.Hotel.ЗаписьГостя fЗаписьГостя;
        
        private IIS.Hotel.Доступ fДоступ;
        
        // *** Start programmer edit section *** (РегистрЗаписи CustomMembers)

        // *** End programmer edit section *** (РегистрЗаписи CustomMembers)

        
        /// <summary>
        /// ДатаВыезда.
        /// </summary>
        // *** Start programmer edit section *** (РегистрЗаписи.ДатаВыезда CustomAttributes)

        // *** End programmer edit section *** (РегистрЗаписи.ДатаВыезда CustomAttributes)
        public virtual System.DateTime ДатаВыезда
        {
            get
            {
                // *** Start programmer edit section *** (РегистрЗаписи.ДатаВыезда Get start)

                // *** End programmer edit section *** (РегистрЗаписи.ДатаВыезда Get start)
                System.DateTime result = this.fДатаВыезда;
                // *** Start programmer edit section *** (РегистрЗаписи.ДатаВыезда Get end)

                // *** End programmer edit section *** (РегистрЗаписи.ДатаВыезда Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрЗаписи.ДатаВыезда Set start)

                // *** End programmer edit section *** (РегистрЗаписи.ДатаВыезда Set start)
                this.fДатаВыезда = value;
                // *** Start programmer edit section *** (РегистрЗаписи.ДатаВыезда Set end)

                // *** End programmer edit section *** (РегистрЗаписи.ДатаВыезда Set end)
            }
        }
        
        /// <summary>
        /// ДатаЗаселения.
        /// </summary>
        // *** Start programmer edit section *** (РегистрЗаписи.ДатаЗаселения CustomAttributes)

        // *** End programmer edit section *** (РегистрЗаписи.ДатаЗаселения CustomAttributes)
        public virtual System.DateTime ДатаЗаселения
        {
            get
            {
                // *** Start programmer edit section *** (РегистрЗаписи.ДатаЗаселения Get start)

                // *** End programmer edit section *** (РегистрЗаписи.ДатаЗаселения Get start)
                System.DateTime result = this.fДатаЗаселения;
                // *** Start programmer edit section *** (РегистрЗаписи.ДатаЗаселения Get end)

                // *** End programmer edit section *** (РегистрЗаписи.ДатаЗаселения Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрЗаписи.ДатаЗаселения Set start)

                // *** End programmer edit section *** (РегистрЗаписи.ДатаЗаселения Set start)
                this.fДатаЗаселения = value;
                // *** Start programmer edit section *** (РегистрЗаписи.ДатаЗаселения Set end)

                // *** End programmer edit section *** (РегистрЗаписи.ДатаЗаселения Set end)
            }
        }
        
        /// <summary>
        /// КодРегистра.
        /// </summary>
        // *** Start programmer edit section *** (РегистрЗаписи.КодРегистра CustomAttributes)

        // *** End programmer edit section *** (РегистрЗаписи.КодРегистра CustomAttributes)
        public virtual int КодРегистра
        {
            get
            {
                // *** Start programmer edit section *** (РегистрЗаписи.КодРегистра Get start)

                // *** End programmer edit section *** (РегистрЗаписи.КодРегистра Get start)
                int result = this.fКодРегистра;
                // *** Start programmer edit section *** (РегистрЗаписи.КодРегистра Get end)

                // *** End programmer edit section *** (РегистрЗаписи.КодРегистра Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрЗаписи.КодРегистра Set start)

                // *** End programmer edit section *** (РегистрЗаписи.КодРегистра Set start)
                this.fКодРегистра = value;
                // *** Start programmer edit section *** (РегистрЗаписи.КодРегистра Set end)

                // *** End programmer edit section *** (РегистрЗаписи.КодРегистра Set end)
            }
        }
        
        /// <summary>
        /// Регистр записи.
        /// </summary>
        // *** Start programmer edit section *** (РегистрЗаписи.ЗаписьГостя CustomAttributes)

        // *** End programmer edit section *** (РегистрЗаписи.ЗаписьГостя CustomAttributes)
        [PropertyStorage(new string[] {
                "ЗаписьГостя"})]
        [NotNull()]
        public virtual IIS.Hotel.ЗаписьГостя ЗаписьГостя
        {
            get
            {
                // *** Start programmer edit section *** (РегистрЗаписи.ЗаписьГостя Get start)

                // *** End programmer edit section *** (РегистрЗаписи.ЗаписьГостя Get start)
                IIS.Hotel.ЗаписьГостя result = this.fЗаписьГостя;
                // *** Start programmer edit section *** (РегистрЗаписи.ЗаписьГостя Get end)

                // *** End programmer edit section *** (РегистрЗаписи.ЗаписьГостя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрЗаписи.ЗаписьГостя Set start)

                // *** End programmer edit section *** (РегистрЗаписи.ЗаписьГостя Set start)
                this.fЗаписьГостя = value;
                // *** Start programmer edit section *** (РегистрЗаписи.ЗаписьГостя Set end)

                // *** End programmer edit section *** (РегистрЗаписи.ЗаписьГостя Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Hotel.Доступ.
        /// </summary>
        // *** Start programmer edit section *** (РегистрЗаписи.Доступ CustomAttributes)

        // *** End programmer edit section *** (РегистрЗаписи.Доступ CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Доступ"})]
        public virtual IIS.Hotel.Доступ Доступ
        {
            get
            {
                // *** Start programmer edit section *** (РегистрЗаписи.Доступ Get start)

                // *** End programmer edit section *** (РегистрЗаписи.Доступ Get start)
                IIS.Hotel.Доступ result = this.fДоступ;
                // *** Start programmer edit section *** (РегистрЗаписи.Доступ Get end)

                // *** End programmer edit section *** (РегистрЗаписи.Доступ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрЗаписи.Доступ Set start)

                // *** End programmer edit section *** (РегистрЗаписи.Доступ Set start)
                this.fДоступ = value;
                // *** Start programmer edit section *** (РегистрЗаписи.Доступ Set end)

                // *** End programmer edit section *** (РегистрЗаписи.Доступ Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РегистрЗаписиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РегистрЗаписиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РегистрЗаписиE", typeof(IIS.Hotel.РегистрЗаписи));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of РегистрЗаписи.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfРегистрЗаписи CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfРегистрЗаписи CustomAttributes)
    public class DetailArrayOfРегистрЗаписи : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Hotel.DetailArrayOfРегистрЗаписи members)

        // *** End programmer edit section *** (IIS.Hotel.DetailArrayOfРегистрЗаписи members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type РегистрЗаписи by index.
        /// </summary>
        /// <summary>
        /// Adds object with type РегистрЗаписи.
        /// </summary>
        public DetailArrayOfРегистрЗаписи(IIS.Hotel.Доступ fДоступ) : 
                base(typeof(РегистрЗаписи), ((ICSSoft.STORMNET.DataObject)(fДоступ)))
        {
        }
        
        public IIS.Hotel.РегистрЗаписи this[int index]
        {
            get
            {
                return ((IIS.Hotel.РегистрЗаписи)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Hotel.РегистрЗаписи dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
