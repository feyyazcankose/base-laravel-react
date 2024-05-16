export class ERole {
    static readonly Public = "Public";
    static readonly DashboardView = "DashboardView";

    // Kullanici İstekleri Rolleri
    static readonly ContactView = "ContactView";
    static readonly ContactMessage = "ContactMessage";
    static readonly ContactAssign = "ContactAssign";
    static readonly ContactMessageSuper = "ContactMessageSuper";
    static readonly ContactMessageView = "ContactMessageView";
    static readonly ContactMessageUpdate = "ContactMessageUpdate";

    // Tedarikçiler Rolleri
    static readonly ProviderView = "ProviderView";
    static readonly ProviderCreate = "ProviderCreate";
    static readonly ProviderUpdate = "ProviderUpdate";
    static readonly ProviderDelete = "ProviderDelete";

    // Tedarikci Faturalari Rolleri
    static readonly ProviderInvoiceView = "ProviderInvoiceView";
    static readonly ProviderInvoiceCreate = "ProviderInvoiceCreate";
    static readonly ProviderInvoiceUpdate = "ProviderInvoiceUpdate";
    static readonly ProviderInvoiceDelete = "ProviderInvoiceDelete";

    // Tedarikci Official Rolleri
    static readonly ProviderOfficialView = "ProviderOfficialView";
    static readonly ProviderOfficialCreate = "ProviderOfficialCreate";
    static readonly ProviderOfficialUpdate = "ProviderOfficialUpdate";
    static readonly ProviderOfficialDelete = "ProviderOfficialDelete";

    // Tedarikci Tipleri Rolleri
    static readonly ProviderTypeView = "ProviderTypeView";
    static readonly ProviderTypeCreate = "ProviderTypeCreate";
    static readonly ProviderTypeUpdate = "ProviderTypeUpdate";
    static readonly ProviderTypeDelete = "ProviderTypeDelete";

    // Tedarikci Adminleri Rolleri
    static readonly ProviderAdminView = "ProviderAdminView";
    static readonly ProviderAdminCreate = "ProviderAdminCreate";
    static readonly ProviderAdminUpdate = "ProviderAdminUpdate";
    static readonly ProviderAdminDelete = "ProviderAdminDelete";

    // Üyeler Rolleri
    static readonly UserView = "UserView";
    static readonly UserCreate = "UserCreate";
    static readonly UserUpdate = "UserUpdate";
    static readonly UserDelete = "UserDelete";

    // Yöneticiler Rolleri
    static readonly AdminView = "AdminView";
    static readonly AdminRole = "AdminRole";
    static readonly AdminCreate = "AdminCreate";
    static readonly AdminUpdate = "AdminUpdate";
    static readonly AdminDelete = "AdminDelete";

    // Müşteriler Rolleri
    static readonly CustomerView = "CustomerView";
    static readonly CustomerCreate = "CustomerCreate";
    static readonly CustomerUpdate = "CustomerUpdate";
    static readonly CustomerDelete = "CustomerDelete";

    // İçerikler
    // Sözleşmeler Rolleri
    static readonly ContractView = "ContractView";
    static readonly ContractCreate = "ContractCreate";
    static readonly ContractUpdate = "ContractUpdate";
    static readonly ContractDelete = "ContractDelete";
    // Sayfalar Rolleri
    static readonly DynamicComponentView = "DynamicComponentView";
    static readonly DynamicComponentUpdate = "DynamicComponentUpdate";
    static readonly DynamicComponentDelete = "DynamicComponentDelete";
    // Blog Rolleri
    static readonly BlogView = "BlogView";
    static readonly BlogCreate = "BlogCreate";
    static readonly BlogUpdate = "BlogUpdate";
    static readonly BlogDelete = "BlogDelete";
    // Dinamik Sayfalar Rolleri
    static readonly DynamicPageView = "DynamicPageView";
    static readonly DynamicPageCreate = "DynamicPageCreate";
    static readonly DynamicPageUpdate = "DynamicPageUpdate";
    static readonly DynamicPageDelete = "DynamicPageDelete";
    // SSS Rolleri
    static readonly FaqView = "FaqView";
    static readonly FaqCreate = "FaqCreate";
    static readonly FaqUpdate = "FaqUpdate";
    static readonly FaqDelete = "FaqDelete";

    // Ön Tanımlamalar Rolleri
    // Sektörler Rolleri
    static readonly SectorView = "SectorView";
    static readonly SectorCreate = "SectorCreate";
    static readonly SectorUpdate = "SectorUpdate";
    static readonly SectorDelete = "SectorDelete";
    // Adımlar Rolleri
    static readonly StepView = "StepView";
    static readonly StepUpdate = "StepUpdate";
    // Birimler Rolleri
    static readonly UnitView = "UnitView";
    static readonly UnitCreate = "UnitCreate";
    static readonly UnitUpdate = "UnitUpdate";
    static readonly UnitDelete = "UnitDelete";
    //Bankalar Rolleri
    static readonly BankView = "BankView";
    static readonly BankCreate = "BankCreate";
    static readonly BankUpdate = "BankUpdate";
    static readonly BankDelete = "BankDelete";

    // Değişkenler Rolleri
    static readonly VariableView = "VariableView";
    static readonly VariableCreate = "VariableCreate";
    static readonly VariableUpdate = "VariableUpdate";
    static readonly VariableDelete = "VariableDelete";

    // İş Kolları Rolleri
    static readonly BusinessLineView = "BusinessLineView";
    static readonly BusinessLineCreate = "BusinessLineCreate";
    static readonly BusinessLineUpdate = "BusinessLineUpdate";
    static readonly BusinessLineDelete = "BusinessLineDelete";
    static readonly BusinessLineCopy = "BusinessLineCopy";
    static readonly BusinessLineVariable = "BusinessLineVariable";

    // Hizmet Grupları Rolleri
    static readonly ServiceGroupView = "ServiceGroupView";
    static readonly ServiceGroupCreate = "ServiceGroupCreate";
    static readonly ServiceGroupUpdate = "ServiceGroupUpdate";
    static readonly ServiceGroupDelete = "ServiceGroupDelete";
    static readonly ServiceGroupCopy = "ServiceGroupCopy";
    static readonly ServiceGroupVariable = "ServiceGroupVariable";

    // Hizmetler Rolleri
    static readonly ServiceView = "ServiceView";
    static readonly ServiceCreate = "ServiceCreate";
    static readonly ServiceUpdate = "ServiceUpdate";
    static readonly ServiceDelete = "ServiceDelete";
    static readonly ServiceCopy = "ServiceCopy";
    static readonly ServiceVariable = "ServiceVariable";

    // Ürünler Rolleri
    static readonly ProductView = "ProductView";
    static readonly ProductCreate = "ProductCreate";
    static readonly ProductUpdate = "ProductUpdate";
    static readonly ProductDelete = "ProductDelete";
    static readonly ProductCopy = "ProductCopy";
    static readonly ProductVariable = "ProductVariable";

    // Agreement Category Roles
    static readonly AgreementCategoryView = "AgreementCategoryView";
    static readonly AgreementCategoryCreate = "AgreementCategoryCreate";
    static readonly AgreementCategoryUpdate = "AgreementCategoryUpdate";
    static readonly AgreementCategoryDelete = "AgreementCategoryDelete";
    static readonly AgreementCategoryAssign = "AgreementCategoryAssign";
    static readonly AgreementCategoryAgreementDelete =
        "AgreementCategoryAgreementDelete";
    static readonly AgreementCategoryAgreementSortUpdate =
        "AgreementCategoryAgreementSortUpdate";
    // Agreement Roles
    static readonly AgreementView = "AgreementView";
    static readonly AgreementCreate = "AgreementCreate";
    static readonly AgreementUpdate = "AgreementUpdate";
    static readonly AgreementDelete = "AgreementDelete";
    static readonly AgreementCopy = "AgreementCopy";
    static readonly AgreementVariable = "AgreementVariable";
    static readonly AgreementVersionUpdate = "AgreementVersionUpdate";

    // Agreement Step
    static readonly AgreementStepView = "AgreementStepView";
    static readonly AgreementStepCreate = "AgreementStepCreate";
    static readonly AgreementStepUpdate = "AgreementStepUpdate";
    static readonly AgreementStepDelete = "AgreementStepDelete";

    // Ayarlar
    // Genel Ayarlar Rolleri
    static readonly GeneralSettingView = "GeneralSettingView";
    static readonly GeneralSettingUpdate = "GeneralSettingUpdate";
    // E-Ticaret Ayarları Rolleri
    static readonly EcommerceSettingView = "EcommerceSettingView";
    static readonly EcommerceSettingUpdate = "EcommerceSettingUpdate";
    // Dosya Yönetimi Rolleri
    static readonly FileManagerManegment = "FileManagerManegment";

    // Campaign Roles
    static readonly CampaignView = "CampaignView";
    static readonly CampaignCreate = "CampaignCreate";
    static readonly CampaignUpdate = "CampaignUpdate";
    static readonly CampaignDelete = "CampaignDelete";
    static readonly CouponView = "CouponView";
    static readonly CouponCreate = "CouponCreate";
    static readonly CouponUpdate = "CouponUpdate";
    static readonly CouponDelete = "CouponDelete";
    static readonly OrderView = "OrderView";

    // Log Rolleri
    static readonly LogView = "LogView";
    static readonly LanguageView = "LanguageView";
    static readonly LanguageUpdate = "LanguageUpdate";

    // Long Term Rolleri
    static readonly LongTermUpdate = "LongTermUpdate";
    static readonly LongTermCreate = "LongTermCreate";
    static readonly LongTermView = "LongTermView";
    static readonly LongTermDelete = "LongTermDelete";

    // Coporate Term Rolleri
    static readonly CorporateTermUpdate = "CorporateTermUpdate";
    static readonly CorporateTermCreate = "CorporateTermCreate";
    static readonly CorporateTermView = "CorporateTermView";

    // Customer Accounting Rolleri
    static readonly LogoCustomerView = "LogoCustomerView";
    static readonly LogoCustomerSend = "LogoCustomerSend";
    static readonly LogoCustomerCancel = "LogoCustomerCancel";

    // Ek Hizmetler Rolleri
    static readonly AdditionalCreate = "AdditionalCreate";
    static readonly AdditionalUpdate = "AdditionalUpdate";
    static readonly AdditionalView = "AdditionalView";
    static readonly AdditionalDelete = "AdditionalDelete";
}
