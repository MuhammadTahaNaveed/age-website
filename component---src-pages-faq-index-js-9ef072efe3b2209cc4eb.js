"use strict";(self.webpackChunkapache_age_website=self.webpackChunkapache_age_website||[]).push([[373],{4119:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var n=a(4578),r=a(7294),o=a(7958),i=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={openItemId:null},t.toggleItem=function(e){t.setState((function(t){return{openItemId:t.openItemId===e?null:e}}))},t}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this,t=[{id:1,question:"Q 1 : What is the graph database, and how is it different from the relational database?",answer:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"A graph database is a specialized type of database designed for storing, managing, and querying highly interconnected data more efficiently than traditional databases. Unlike relational databases that store data in tables with rows and columns, graph databases use graph structures comprising nodes (entities), edges (relationships), and properties (attributes) to represent and store data."),r.createElement("p",null,"The main differences between graph databases and relational databases include:"),r.createElement("p",null,r.createElement("strong",null,"Data Structure:")," Graph databases utilize nodes and edges to represent entities and their relationships, facilitating direct storage of relationship data. Relational databases use tables, where relationships are inferred through joins."),r.createElement("p",null,r.createElement("strong",null,"Query Performance:")," Graph databases excel in scenarios requiring extensive traversal of relationships, making them ideal for complex networks like social networks, recommendation engines, and more. Relational databases can struggle with performance as the complexity and volume of relationships increase."),r.createElement("p",null,r.createElement("strong",null,"Schema Flexibility:")," Graph databases often offer more flexibility with schema-less designs, allowing easier modification of the data model. Relational databases typically require a predefined schema, making alterations more challenging."),r.createElement("p",null,"Apache AGE extends PostgreSQL, enabling it to function as a graph database. This allows users to leverage graph database capabilities within a familiar relational database environment, offering the best of both worlds: the robustness and ACID compliance of PostgreSQL with the flexibility and relationship-handling prowess of graph databases."))}},{id:2,question:"Q 2 : What is the best way for someone to get started with Apache AGE? Are there any recommended resources or tutorials which you could recommend for a comprehensive introduction?",answer:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"The best way to start with Apache AGE is by exploring the official documentation on the Apache AGE website."),r.createElement("p",null,"For a comprehensive introduction, visit the Apache AGE documentation and the GitHub repository for in-depth guides, examples, and community resources."))}},{id:3,question:"Q 3 : How does the integration of Apache AGE with PostgreSQL benefit developers and organizations?",answer:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"The integration of Apache AGE with PostgreSQL offers developers and organizations the ability to manage both graph and relational data within a single, powerful database system."),r.createElement("p",null,"This facilitates complex data analyses and relationships with the efficiency and reliability of PostgreSQL."))}},{id:4,question:"Q 4 : Is Apache AGE compatible with all PostgreSQL versions?",answer:function(){return r.createElement(r.Fragment,null,"Apache AGE is compatible with PostgreSQL versions up to 16. Please check",r.createElement("a",{href:"https://github.com/apache/age/releases",target:"_blank",rel:"noopener noreferrer"}," the releases on GitHub"),".")}},{id:5,question:"Q 5 : What is the reason for people to use Apache AGE when there are other graph databases?",answer:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"People use Apache AGE for its seamless integration with PostgreSQL, allowing them to leverage graph database capabilities alongside relational data within a familiar SQL environment, without the need to adopt a separate graph database system."))}},{id:6,question:"Q 6 : What query language does Apache AGE use for graph operations?",answer:function(){return r.createElement(r.Fragment,null,"openCypher")}},{id:7,question:"Q 7 : Do I need to pay to use Apache AGE?",answer:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"Apache AGE is an open source project and free to use."),r.createElement("p",null,"But there are some vendors providing commercial support such as AGEDB in Canada."))}},{id:8,question:"Q 8 : How can I install Apache AGE?",answer:function(){return r.createElement(r.Fragment,null,"Source codes and binaries are available at",r.createElement("a",{href:"https://github.com/apache/age/releases",target:"_blank",rel:"noopener noreferrer"},"GitHub"),".",r.createElement("a",{href:"https://hub.docker.com/r/apache/age",target:"_blank",rel:"noopener noreferrer"},"Docker Hub"),". Please refer to",r.createElement("a",{href:"https://age.apache.org/age-manual/master/intro/overview.html",target:"_blank",rel:"noopener noreferrer"},"the official AGE manual")," for more details.")}},{id:9,question:"Q 9 : How does Apache AGE stand out compared to other similar tools?",answer:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"Apache AGE stands out by integrating graph database capabilities directly into PostgreSQL, allowing users to manage graph and relational data within the same database system. "),r.createElement("p",null,"This unique approach offers the robustness, scalability, and familiarity of PostgreSQL while enabling complex graph queries and analyses without the need for separate graph database solutions."))}},{id:10,question:"Q 10 : Could you provide instances of industries wherein Apache AGE could be utilized?",answer:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"pache AGE is beneficial in industries like social networking, for analyzing relationships; finance, for fraud detection and customer insights; healthcare, for patient data and relationships; telecommunications, for network infrastructure management; and logistics, for route optimization and supply chain analysis."))}},{id:11,question:"Q 11 : How often is Apache AGE updated, and how can I stay informed about new releases?",answer:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"Apache AGE updates vary based on development progress and community contributions."),r.createElement("p",null,"To stay informed about new releases, follow the Apache AGE project on GitHub, subscribe to their mailing list, or join their community forums."))}},{id:12,question:"Q 12 : Is there a community or support forum for Apache AGE?",answer:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"Apache AGE GitHub"),r.createElement("p",null,r.createElement("a",{href:"https://github.com/apache/age/discussions"},"Discussions")),r.createElement("p",null,r.createElement("a",{href:"https://github.com/apache/age/issues"},"Issues")),r.createElement("p",null,"mailing lists:"),r.createElement("p",null,r.createElement("a",{href:"mailto:dev@age.apache.org"},"dev@age.apache.org")),r.createElement("p",null,r.createElement("a",{href:"mailto:users@age.apache.org"},"users@age.apache.org")))}},{id:13,question:"Q 13 : How can I contribute to the development of Apache AGE?",answer:function(){return r.createElement(r.Fragment,null,"Please refer to ",r.createElement("a",{href:"https://age.apache.org/contribution/how",target:"_blank",rel:"noopener noreferrer"},"the contribution guidelines"),".")}},{id:14,question:"Q 14 : Is there any ongoing research or development related to features or capabilities of Apache AGE?",answer:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"Yes, being an open-source project, Apache AGE benefits from a vibrant community of dedicated developers who are passionate about using their skills to improve its features and capabilities. This collaborative environment fosters continuous research and development efforts focused on enhancing the functionality of Apache AGE and addressing emerging needs in the GDB field. With contributors from various backgrounds using their expertise to innovate and improve the platform, Apache AGE continuously evolves itself, granting users access to cutting-edge innovations and expanded functionalities for graph-based data management and analysis."))}},{id:15,question:"Q 15 : Does Apache AGE support ACID(Atomicity, Consistency, Isolation, and Durability) transactions?",answer:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"Yes, Apache AGE supports ACID transactions for Graph, Relational and JSON Document."))}},{id:16,question:"Q 16 : Are there any limitations to the size or scale of graphs that Apache AGE can handle?",answer:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"Yes. The capacity for both vertices and edges is 281474976710655. This limitation only applies to one particular graph. AGE allows creating multiple graphs."))}},{id:17,question:"Q 17 : How does Apache AGE handle indexing and optimization for graph queries?",answer:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,'AGE uses PostrgreSQL\'s indexes. It stores properties of elements (vertices and edges) as a custom type called "agtype". The structure of properties is comparable to JSON objects. Therefore, properties can be indexed in a similar way a "JSONB" column is indexed. For example, BTree, Hash and GIN etc. indexes are supported.'))}},{id:18,question:"Q 18 : Can Apache AGE be used alongside other PostgreSQL extensions?",answer:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,'Yes. AGE uses its own namespace for tables, functions, and other database objects to avoid potential conflicts. Cypher queries are invoked by the "cypher()" function which returns a set of rows. The column values of those rows are usually in "agtype". AGE provides the functionality to cast "agtype" to a PostgreSQL type in most cases. So, AGE can be used together with other extensions.'))}},{id:19,question:"Q 19 : Does Apache AGE provide support for data replication and synchronization in distributed environments?",answer:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"Apache AGE has been tested with Citus. Due to inherited tables not being supported by Citus, Apache AGE tables cannot be distributed with Citus yet. However, it may be supported in future."))}},{id:20,question:"Q 20 : Are there any known interoperability issues between Apache AGE and other PostgreSQL extensions or tools?",answer:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"No interoperability issue has been reported so far."))}},{id:21,question:"Q 21 : How does Apache AGE handle schema-less data or semi-structured data?",answer:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"Apache AGE follows labeled-property graph model. Each vertex\\edge stores its properties in a JSON-like object. As long as, your data can be prepresented in JSON object, Apache AGE can handle it."))}},{id:22,question:"Q 22 : Does Apache AGE support data encryption at rest and in transit?",answer:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"Since Apache AGE is a PostgreSQL extension, a network connection to AGE and its internal storage is entirely based on PostgreSQL. Therefore, Postgres' encryption mechanism applies to AGE."))}},{id:23,question:"Q 23 : Are there any known limitations or trade-offs when using Apache AGE compared to other graph databases?",answer:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"Apache AGE uses relational models under the hood. Some limitations of relation model applies to AGE, for example large amount of table joins. Though, in some cases, AGE implements custom table scan node to gain performance."))}}],a=this.state.openItemId;return r.createElement("div",null,t.map((function(t){var n=t.id,o=t.question,i=t.answer;return r.createElement("div",{key:n,className:"faq-item"},r.createElement("div",{className:"accordion-header "+(a===n?"active":""),onClick:function(){return e.toggleItem(n)}},o),r.createElement("div",{className:"accordion-content "+(a===n?"open":"closed")},"function"==typeof i?i():i))})))},t}(r.Component),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){return r.createElement(o.Z,null,r.createElement("div",{className:"full-width-image-container margin-top-0",style:{backgroundImage:"url('')"}},r.createElement("h1",{className:"has-text-weight-bold is-size-1",style:{boxShadow:"0.5rem 0 0 #f40, -0.5rem 0 0 #f40",backgroundColor:"rgb(184, 20, 90)",color:"white",padding:"1rem",textAlign:"center"}},"Frequently Asked Questions")),r.createElement("section",{className:"section"},r.createElement("div",{className:"container"},r.createElement("div",{className:"faq-content-page"},r.createElement("br",null),r.createElement("h2",null,"Thank you for visiting our FAQ page. If you can't find the question you're looking for, please leave your comments or questions in the",r.createElement("strong",null,r.createElement("a",{href:"https://github.com/apache/age/issues",target:"_blank"}," issues"))," or",r.createElement("strong",null,r.createElement("a",{href:"https://github.com/apache/age/discussions",target:"_blank"}," discussions"))," section on the",r.createElement("strong",null,r.createElement("a",{href:"https://github.com/apache/age",target:"_blank"}," Apache AGE GitHub page")),". We look forward to hearing from you."),r.createElement("hr",null),r.createElement("br",null),r.createElement(i,null)))))},t}(r.Component)}}]);
//# sourceMappingURL=component---src-pages-faq-index-js-9ef072efe3b2209cc4eb.js.map