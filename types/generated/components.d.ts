import type { Struct, Schema } from '@strapi/strapi';

export interface NavbarSubMenu extends Struct.ComponentSchema {
  collectionName: 'components_navbar_sub_menus';
  info: {
    displayName: 'subMenu';
    icon: 'grid';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface NavbarNavbarComponents extends Struct.ComponentSchema {
  collectionName: 'components_navbar_navbar_components';
  info: {
    displayName: 'NavbarComponents';
    icon: 'apps';
  };
  attributes: {
    logoImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    menu: Schema.Attribute.Component<'navbar.sub-menu', true>;
  };
}

export interface NavbarMenu extends Struct.ComponentSchema {
  collectionName: 'components_navbar_menus';
  info: {
    displayName: 'Menu';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.Text;
    subMenu: Schema.Attribute.Component<'navbar.sub-menu', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    keywords: Schema.Attribute.Text;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface PageRelatedArticle extends Struct.ComponentSchema {
  collectionName: 'components_page_related_articles';
  info: {
    displayName: 'RelatedArticle';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    IconImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface PageMediaSocial extends Struct.ComponentSchema {
  collectionName: 'components_page_media_socials';
  info: {
    displayName: 'MediaSocial';
    icon: 'earth';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.Text;
    logoImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PageFaq extends Struct.ComponentSchema {
  collectionName: 'components_page_faqs';
  info: {
    displayName: 'faq';
    icon: 'bulletList';
  };
  attributes: {
    question: Schema.Attribute.String;
    answer: Schema.Attribute.Text;
  };
}

export interface PageButton extends Struct.ComponentSchema {
  collectionName: 'components_page_buttons';
  info: {
    displayName: 'button';
    icon: 'bold';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface FooterFooterComponents extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_components';
  info: {
    displayName: 'FooterComponents';
    icon: 'apps';
    description: '';
  };
  attributes: {
    companyAddress: Schema.Attribute.RichText;
    company: Schema.Attribute.Component<'footer.company', false>;
    copyright: Schema.Attribute.Text;
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface FooterCompany extends Struct.ComponentSchema {
  collectionName: 'components_footer_companies';
  info: {
    displayName: 'Company';
    icon: 'briefcase';
  };
  attributes: {
    Text: Schema.Attribute.Text;
    LogoCompany: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'navbar.sub-menu': NavbarSubMenu;
      'navbar.navbar-components': NavbarNavbarComponents;
      'navbar.menu': NavbarMenu;
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'page.related-article': PageRelatedArticle;
      'page.media-social': PageMediaSocial;
      'page.faq': PageFaq;
      'page.button': PageButton;
      'footer.footer-components': FooterFooterComponents;
      'footer.company': FooterCompany;
    }
  }
}
