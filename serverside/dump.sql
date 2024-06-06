PGDMP         (                |        	   hollyfood    14.3    14.3 V    {           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            |           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            }           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ~           1262    114843 	   hollyfood    DATABASE     e   CREATE DATABASE hollyfood WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'French_France.1252';
    DROP DATABASE hollyfood;
             	   hollyfood    false            �            1259    197071    comment    TABLE       CREATE TABLE public.comment (
    id integer NOT NULL,
    description text NOT NULL,
    date date NOT NULL,
    recipe_id integer NOT NULL,
    user_id integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.comment;
       public         heap 	   hollyfood    false            �            1259    197070    comment_id_seq    SEQUENCE     �   ALTER TABLE public.comment ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.comment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    224            �            1259    197144    favorite    TABLE     �   CREATE TABLE public.favorite (
    id integer NOT NULL,
    user_id integer NOT NULL,
    recipe_id integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.favorite;
       public         heap 	   hollyfood    false            �            1259    197143    favorite_id_seq    SEQUENCE     �   ALTER TABLE public.favorite ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.favorite_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    232            �            1259    196992 
   ingredient    TABLE     �   CREATE TABLE public.ingredient (
    id integer NOT NULL,
    name text NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.ingredient;
       public         heap 	   hollyfood    false            �            1259    197127    ingredient_has_proportion    TABLE     �   CREATE TABLE public.ingredient_has_proportion (
    id integer NOT NULL,
    ingredient_id integer NOT NULL,
    proportion_id integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
 -   DROP TABLE public.ingredient_has_proportion;
       public         heap 	   hollyfood    false            �            1259    197126     ingredient_has_proportion_id_seq    SEQUENCE     �   ALTER TABLE public.ingredient_has_proportion ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.ingredient_has_proportion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    230            �            1259    196991    ingredient_id_seq    SEQUENCE     �   ALTER TABLE public.ingredient ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.ingredient_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    210            �            1259    197017 
   proportion    TABLE     �   CREATE TABLE public.proportion (
    id integer NOT NULL,
    quantity integer NOT NULL,
    unit text NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.proportion;
       public         heap 	   hollyfood    false            �            1259    197016    proportion_id_seq    SEQUENCE     �   ALTER TABLE public.proportion ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.proportion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    216            �            1259    197052    recipe    TABLE     �  CREATE TABLE public.recipe (
    id integer NOT NULL,
    slug character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    quote text NOT NULL,
    picture text NOT NULL,
    instruction text NOT NULL,
    total_time time without time zone NOT NULL,
    servings integer NOT NULL,
    difficulty text NOT NULL,
    work_id integer NOT NULL,
    user_id integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.recipe;
       public         heap 	   hollyfood    false            �            1259    197110    recipe_has_ingredient    TABLE     �   CREATE TABLE public.recipe_has_ingredient (
    id integer NOT NULL,
    ingredient_id integer NOT NULL,
    recipe_id integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
 )   DROP TABLE public.recipe_has_ingredient;
       public         heap 	   hollyfood    false            �            1259    197109    recipe_has_ingredient_id_seq    SEQUENCE     �   ALTER TABLE public.recipe_has_ingredient ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.recipe_has_ingredient_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    228            �            1259    197161    recipe_has_tag    TABLE     �   CREATE TABLE public.recipe_has_tag (
    id integer NOT NULL,
    recipe_id integer NOT NULL,
    tag_id integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
 "   DROP TABLE public.recipe_has_tag;
       public         heap 	   hollyfood    false            �            1259    197160    recipe_has_tag_id_seq    SEQUENCE     �   ALTER TABLE public.recipe_has_tag ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.recipe_has_tag_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    234            �            1259    197051    recipe_id_seq    SEQUENCE     �   ALTER TABLE public.recipe ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.recipe_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    222            �            1259    197010    role    TABLE     �   CREATE TABLE public.role (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.role;
       public         heap 	   hollyfood    false            �            1259    197009    role_id_seq    SEQUENCE     �   ALTER TABLE public.role ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.role_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    214            �            1259    197090    score    TABLE     \  CREATE TABLE public.score (
    id integer NOT NULL,
    rating numeric(3,2) NOT NULL,
    recipe_id integer NOT NULL,
    user_id integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone,
    CONSTRAINT score_rating_check CHECK (((rating >= 0.5) AND (rating <= (5)::numeric)))
);
    DROP TABLE public.score;
       public         heap 	   hollyfood    false            �            1259    197089    score_id_seq    SEQUENCE     �   ALTER TABLE public.score ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.score_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    226            �            1259    197026    tag    TABLE     �   CREATE TABLE public.tag (
    id integer NOT NULL,
    name text NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.tag;
       public         heap 	   hollyfood    false            �            1259    197025 
   tag_id_seq    SEQUENCE     �   ALTER TABLE public.tag ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tag_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    218            �            1259    197035    user    TABLE     �  CREATE TABLE public."user" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    firstname character varying(255) NOT NULL,
    avatar text,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role_id integer DEFAULT 1 NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public."user";
       public         heap 	   hollyfood    false            �            1259    197034    user_id_seq    SEQUENCE     �   ALTER TABLE public."user" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    220            �            1259    197001    work    TABLE     �   CREATE TABLE public.work (
    id integer NOT NULL,
    title text NOT NULL,
    synopsis text NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.work;
       public         heap 	   hollyfood    false            �            1259    197000    work_id_seq    SEQUENCE     �   ALTER TABLE public.work ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.work_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    212            n          0    197071    comment 
   TABLE DATA           f   COPY public.comment (id, description, date, recipe_id, user_id, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    224   �l       v          0    197144    favorite 
   TABLE DATA           T   COPY public.favorite (id, user_id, recipe_id, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    232   Nm       `          0    196992 
   ingredient 
   TABLE DATA           H   COPY public.ingredient (id, name, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    210   �m       t          0    197127    ingredient_has_proportion 
   TABLE DATA           o   COPY public.ingredient_has_proportion (id, ingredient_id, proportion_id, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    230   �m       f          0    197017 
   proportion 
   TABLE DATA           R   COPY public.proportion (id, quantity, unit, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    216   n       l          0    197052    recipe 
   TABLE DATA           �   COPY public.recipe (id, slug, name, quote, picture, instruction, total_time, servings, difficulty, work_id, user_id, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    222   dn       r          0    197110    recipe_has_ingredient 
   TABLE DATA           g   COPY public.recipe_has_ingredient (id, ingredient_id, recipe_id, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    228   Op       x          0    197161    recipe_has_tag 
   TABLE DATA           Y   COPY public.recipe_has_tag (id, recipe_id, tag_id, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    234   �p       d          0    197010    role 
   TABLE DATA           B   COPY public.role (id, name, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    214   �p       p          0    197090    score 
   TABLE DATA           Y   COPY public.score (id, rating, recipe_id, user_id, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    226   Gq       h          0    197026    tag 
   TABLE DATA           A   COPY public.tag (id, name, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    218   �q       j          0    197035    user 
   TABLE DATA           q   COPY public."user" (id, name, firstname, avatar, email, password, role_id, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    220   r       b          0    197001    work 
   TABLE DATA           M   COPY public.work (id, title, synopsis, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    212   �r                  0    0    comment_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.comment_id_seq', 1, true);
          public       	   hollyfood    false    223            �           0    0    favorite_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.favorite_id_seq', 1, true);
          public       	   hollyfood    false    231            �           0    0     ingredient_has_proportion_id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.ingredient_has_proportion_id_seq', 1, true);
          public       	   hollyfood    false    229            �           0    0    ingredient_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.ingredient_id_seq', 1, true);
          public       	   hollyfood    false    209            �           0    0    proportion_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.proportion_id_seq', 1, true);
          public       	   hollyfood    false    215            �           0    0    recipe_has_ingredient_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.recipe_has_ingredient_id_seq', 1, true);
          public       	   hollyfood    false    227            �           0    0    recipe_has_tag_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.recipe_has_tag_id_seq', 8, true);
          public       	   hollyfood    false    233            �           0    0    recipe_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.recipe_id_seq', 4, true);
          public       	   hollyfood    false    221            �           0    0    role_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.role_id_seq', 2, true);
          public       	   hollyfood    false    213            �           0    0    score_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.score_id_seq', 5, true);
          public       	   hollyfood    false    225            �           0    0 
   tag_id_seq    SEQUENCE SET     8   SELECT pg_catalog.setval('public.tag_id_seq', 4, true);
          public       	   hollyfood    false    217            �           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 4, true);
          public       	   hollyfood    false    219            �           0    0    work_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.work_id_seq', 4, true);
          public       	   hollyfood    false    211            �           2606    197078    comment comment_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.comment DROP CONSTRAINT comment_pkey;
       public         	   hollyfood    false    224            �           2606    197149    favorite favorite_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.favorite
    ADD CONSTRAINT favorite_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.favorite DROP CONSTRAINT favorite_pkey;
       public         	   hollyfood    false    232            �           2606    197132 8   ingredient_has_proportion ingredient_has_proportion_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public.ingredient_has_proportion
    ADD CONSTRAINT ingredient_has_proportion_pkey PRIMARY KEY (id);
 b   ALTER TABLE ONLY public.ingredient_has_proportion DROP CONSTRAINT ingredient_has_proportion_pkey;
       public         	   hollyfood    false    230            �           2606    196999    ingredient ingredient_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.ingredient
    ADD CONSTRAINT ingredient_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.ingredient DROP CONSTRAINT ingredient_pkey;
       public         	   hollyfood    false    210            �           2606    197024    proportion proportion_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.proportion
    ADD CONSTRAINT proportion_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.proportion DROP CONSTRAINT proportion_pkey;
       public         	   hollyfood    false    216            �           2606    197115 0   recipe_has_ingredient recipe_has_ingredient_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.recipe_has_ingredient
    ADD CONSTRAINT recipe_has_ingredient_pkey PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.recipe_has_ingredient DROP CONSTRAINT recipe_has_ingredient_pkey;
       public         	   hollyfood    false    228            �           2606    197166 "   recipe_has_tag recipe_has_tag_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.recipe_has_tag
    ADD CONSTRAINT recipe_has_tag_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.recipe_has_tag DROP CONSTRAINT recipe_has_tag_pkey;
       public         	   hollyfood    false    234            �           2606    197059    recipe recipe_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.recipe
    ADD CONSTRAINT recipe_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.recipe DROP CONSTRAINT recipe_pkey;
       public         	   hollyfood    false    222            �           2606    197015    role role_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.role DROP CONSTRAINT role_pkey;
       public         	   hollyfood    false    214            �           2606    197096    score score_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.score
    ADD CONSTRAINT score_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.score DROP CONSTRAINT score_pkey;
       public         	   hollyfood    false    226            �           2606    197098 !   score score_user_id_recipe_id_key 
   CONSTRAINT     j   ALTER TABLE ONLY public.score
    ADD CONSTRAINT score_user_id_recipe_id_key UNIQUE (user_id, recipe_id);
 K   ALTER TABLE ONLY public.score DROP CONSTRAINT score_user_id_recipe_id_key;
       public         	   hollyfood    false    226    226            �           2606    197033    tag tag_pkey 
   CONSTRAINT     J   ALTER TABLE ONLY public.tag
    ADD CONSTRAINT tag_pkey PRIMARY KEY (id);
 6   ALTER TABLE ONLY public.tag DROP CONSTRAINT tag_pkey;
       public         	   hollyfood    false    218            �           2606    197045    user user_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_email_key;
       public         	   hollyfood    false    220            �           2606    197043    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public         	   hollyfood    false    220            �           2606    197008    work work_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.work
    ADD CONSTRAINT work_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.work DROP CONSTRAINT work_pkey;
       public         	   hollyfood    false    212            �           2606    197079    comment comment_recipe_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.recipe(id);
 H   ALTER TABLE ONLY public.comment DROP CONSTRAINT comment_recipe_id_fkey;
       public       	   hollyfood    false    224    3254    222            �           2606    197084    comment comment_user_id_fkey    FK CONSTRAINT     |   ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);
 F   ALTER TABLE ONLY public.comment DROP CONSTRAINT comment_user_id_fkey;
       public       	   hollyfood    false    220    224    3252            �           2606    197155     favorite favorite_recipe_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.favorite
    ADD CONSTRAINT favorite_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.recipe(id);
 J   ALTER TABLE ONLY public.favorite DROP CONSTRAINT favorite_recipe_id_fkey;
       public       	   hollyfood    false    3254    222    232            �           2606    197150    favorite favorite_user_id_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.favorite
    ADD CONSTRAINT favorite_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);
 H   ALTER TABLE ONLY public.favorite DROP CONSTRAINT favorite_user_id_fkey;
       public       	   hollyfood    false    220    3252    232            �           2606    197133 F   ingredient_has_proportion ingredient_has_proportion_ingredient_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ingredient_has_proportion
    ADD CONSTRAINT ingredient_has_proportion_ingredient_id_fkey FOREIGN KEY (ingredient_id) REFERENCES public.ingredient(id);
 p   ALTER TABLE ONLY public.ingredient_has_proportion DROP CONSTRAINT ingredient_has_proportion_ingredient_id_fkey;
       public       	   hollyfood    false    230    3240    210            �           2606    197138 F   ingredient_has_proportion ingredient_has_proportion_proportion_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ingredient_has_proportion
    ADD CONSTRAINT ingredient_has_proportion_proportion_id_fkey FOREIGN KEY (proportion_id) REFERENCES public.proportion(id);
 p   ALTER TABLE ONLY public.ingredient_has_proportion DROP CONSTRAINT ingredient_has_proportion_proportion_id_fkey;
       public       	   hollyfood    false    216    230    3246            �           2606    197116 >   recipe_has_ingredient recipe_has_ingredient_ingredient_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.recipe_has_ingredient
    ADD CONSTRAINT recipe_has_ingredient_ingredient_id_fkey FOREIGN KEY (ingredient_id) REFERENCES public.ingredient(id);
 h   ALTER TABLE ONLY public.recipe_has_ingredient DROP CONSTRAINT recipe_has_ingredient_ingredient_id_fkey;
       public       	   hollyfood    false    3240    228    210            �           2606    197121 :   recipe_has_ingredient recipe_has_ingredient_recipe_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.recipe_has_ingredient
    ADD CONSTRAINT recipe_has_ingredient_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.recipe(id);
 d   ALTER TABLE ONLY public.recipe_has_ingredient DROP CONSTRAINT recipe_has_ingredient_recipe_id_fkey;
       public       	   hollyfood    false    222    228    3254            �           2606    197167 ,   recipe_has_tag recipe_has_tag_recipe_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.recipe_has_tag
    ADD CONSTRAINT recipe_has_tag_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.recipe(id);
 V   ALTER TABLE ONLY public.recipe_has_tag DROP CONSTRAINT recipe_has_tag_recipe_id_fkey;
       public       	   hollyfood    false    234    222    3254            �           2606    197172 )   recipe_has_tag recipe_has_tag_tag_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.recipe_has_tag
    ADD CONSTRAINT recipe_has_tag_tag_id_fkey FOREIGN KEY (tag_id) REFERENCES public.tag(id);
 S   ALTER TABLE ONLY public.recipe_has_tag DROP CONSTRAINT recipe_has_tag_tag_id_fkey;
       public       	   hollyfood    false    234    3248    218            �           2606    197065    recipe recipe_user_id_fkey    FK CONSTRAINT     z   ALTER TABLE ONLY public.recipe
    ADD CONSTRAINT recipe_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);
 D   ALTER TABLE ONLY public.recipe DROP CONSTRAINT recipe_user_id_fkey;
       public       	   hollyfood    false    220    222    3252            �           2606    197060    recipe recipe_work_id_fkey    FK CONSTRAINT     x   ALTER TABLE ONLY public.recipe
    ADD CONSTRAINT recipe_work_id_fkey FOREIGN KEY (work_id) REFERENCES public.work(id);
 D   ALTER TABLE ONLY public.recipe DROP CONSTRAINT recipe_work_id_fkey;
       public       	   hollyfood    false    222    212    3242            �           2606    197099    score score_recipe_id_fkey    FK CONSTRAINT     |   ALTER TABLE ONLY public.score
    ADD CONSTRAINT score_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.recipe(id);
 D   ALTER TABLE ONLY public.score DROP CONSTRAINT score_recipe_id_fkey;
       public       	   hollyfood    false    226    222    3254            �           2606    197104    score score_user_id_fkey    FK CONSTRAINT     x   ALTER TABLE ONLY public.score
    ADD CONSTRAINT score_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);
 B   ALTER TABLE ONLY public.score DROP CONSTRAINT score_user_id_fkey;
       public       	   hollyfood    false    220    3252    226            �           2606    197046    user user_role_id_fkey    FK CONSTRAINT     v   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.role(id);
 B   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_role_id_fkey;
       public       	   hollyfood    false    220    214    3244            n   ?   x�3���/J��4202�50�52�4B�T��@��������L������T���3Ə+F��� �
�      v   2   x�3�4B##]S]cCS+cK+c3=#Sm#�?�=... ���      `   8   x�3���M,I-�4202�50�56P04�2��26�3�0�01�60������� 6
5      t   2   x�3�4B##]S]cCS+cK+c3=#Sm#�?�=... ���      f   :   x�3�4�,��M,I-�4202�50�56P04�2��26�3�0�01�60������� (s
�      l   �  x��S�n�0<�_����������EzI��1�5��YP���kzխ�~A�c]*N�Fb$j�˝��B�ǭ!�l�5��F\<�>�ǾE����ۅ����L�[������al�	{W��`��2��{"��,�G����ċ\YQͲŬ� _��Ǻ�0ϖŲZ��
q�uRM֤U� �zq�r#�(��&@4 ��Wב��m[2��w�c6�%w��F?ND�>:��q)N�R��:���J�n�)ɠ����U���)I��x攤�x�����?vϨSd�:o��=7?B�<�Z%V;+�� ��&���U1����B��J��Mx]�H�7��;ES��˟;�|`�=�X栬1C2�>�pm�g�@��5�u��p��6f�P����h�/�nӋ/g?���H��G�2��P��ޒ�27X؃8.Q�����:��\I�����g�"��Cv��<�zL��ٮ����Vq      r   2   x�3�4B##]S]cCS+cK+c3=#Sm#�?�=... ���      x   V   x��ι� D�X�¹F'�p�_��
����e`k�M�bߺ��NS��M�E	�9ӿ�3d9s�Jm+|{b�s6������I9�      d   @   x�3��M�M*J�4202�50�56P04�2��26�3�0�01�60���2�LL���#�0F��� k!�      p   T   x��α�0D�ڞ�%:�m2d�9H� D�}�7a�f� ���~w�*[�	�x���rǺĲ�cCr�ر�=���������(2      h   P   x�3�,N-�L�4202�50�56P04�2��26�3�0�01�60���2�L���%�Θ�81��J�
M8�K���Q���� o�%       j   �   x����
� ��s|��G�F]O{�=A/�U����ӯ��@��� =_��I!@d�?0�����R�3xdw �B�)�iu������H5�`�Y�z+ؿS�T!�_6nۭ�����2qru�l,���k�r�B� �#Z{      b   �   x���A
�@����S�}8����B7QAI�6�>��8��t��x���?�������:�&����y��$S�U����T�.�b�4<NB���ų�(B�h6��4�������x��f;bO:��N�	L��K��kr����\�|��E~�+��B� e�I�     