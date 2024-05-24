PGDMP     2    8                |        	   hollyfood    14.3    14.3 S    v           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            w           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            x           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            y           1262    98317 	   hollyfood    DATABASE     e   CREATE DATABASE hollyfood WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'French_France.1252';
    DROP DATABASE hollyfood;
             	   hollyfood    false            �            1259    147553    comment    TABLE       CREATE TABLE public.comment (
    id integer NOT NULL,
    description text NOT NULL,
    date date NOT NULL,
    recipe_id integer NOT NULL,
    user_id integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.comment;
       public         heap 	   hollyfood    false            �            1259    147552    comment_id_seq    SEQUENCE     �   ALTER TABLE public.comment ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.comment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    226            �            1259    147606    favorite    TABLE     �   CREATE TABLE public.favorite (
    id integer NOT NULL,
    user_id integer NOT NULL,
    recipe_id integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.favorite;
       public         heap 	   hollyfood    false            �            1259    147605    favorite_id_seq    SEQUENCE     �   ALTER TABLE public.favorite ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.favorite_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    232            �            1259    147469 
   ingredient    TABLE     �   CREATE TABLE public.ingredient (
    id integer NOT NULL,
    name text NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.ingredient;
       public         heap 	   hollyfood    false            �            1259    147589    ingredient_has_proportion    TABLE     �   CREATE TABLE public.ingredient_has_proportion (
    id integer NOT NULL,
    ingredient_id integer NOT NULL,
    proportion_id integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
 -   DROP TABLE public.ingredient_has_proportion;
       public         heap 	   hollyfood    false            �            1259    147588     ingredient_has_proportion_id_seq    SEQUENCE     �   ALTER TABLE public.ingredient_has_proportion ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.ingredient_has_proportion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    230            �            1259    114830    ingredient_has_recipe    TABLE     �   CREATE TABLE public.ingredient_has_recipe (
    id integer NOT NULL,
    ingredient_id integer NOT NULL,
    recipe_id integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
 )   DROP TABLE public.ingredient_has_recipe;
       public         heap 	   hollyfood    false            �            1259    114829    ingredient_has_recipe_id_seq    SEQUENCE     �   ALTER TABLE public.ingredient_has_recipe ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.ingredient_has_recipe_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    210            �            1259    147468    ingredient_id_seq    SEQUENCE     �   ALTER TABLE public.ingredient ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.ingredient_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    212            �            1259    147499 
   proportion    TABLE     �   CREATE TABLE public.proportion (
    id integer NOT NULL,
    quantity integer NOT NULL,
    unit text NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.proportion;
       public         heap 	   hollyfood    false            �            1259    147498    proportion_id_seq    SEQUENCE     �   ALTER TABLE public.proportion ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.proportion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    218            �            1259    147534    recipe    TABLE       CREATE TABLE public.recipe (
    id integer NOT NULL,
    slug character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    quote text NOT NULL,
    picture text NOT NULL,
    instruction text NOT NULL,
    total_time time without time zone NOT NULL,
    servings integer NOT NULL,
    difficulty text NOT NULL,
    score integer,
    work_id integer NOT NULL,
    user_id integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.recipe;
       public         heap 	   hollyfood    false            �            1259    147572    recipe_has_ingredient    TABLE     �   CREATE TABLE public.recipe_has_ingredient (
    id integer NOT NULL,
    ingredient_id integer NOT NULL,
    recipe_id integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
 )   DROP TABLE public.recipe_has_ingredient;
       public         heap 	   hollyfood    false            �            1259    147571    recipe_has_ingredient_id_seq    SEQUENCE     �   ALTER TABLE public.recipe_has_ingredient ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.recipe_has_ingredient_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    228            �            1259    147623    recipe_has_tag    TABLE     �   CREATE TABLE public.recipe_has_tag (
    id integer NOT NULL,
    recipe_id integer NOT NULL,
    tag_id integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
 "   DROP TABLE public.recipe_has_tag;
       public         heap 	   hollyfood    false            �            1259    147622    recipe_has_tag_id_seq    SEQUENCE     �   ALTER TABLE public.recipe_has_tag ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.recipe_has_tag_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    234            �            1259    147533    recipe_id_seq    SEQUENCE     �   ALTER TABLE public.recipe ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.recipe_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    224            �            1259    147492    role    TABLE     �   CREATE TABLE public.role (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.role;
       public         heap 	   hollyfood    false            �            1259    147491    role_id_seq    SEQUENCE     �   ALTER TABLE public.role ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.role_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    216            �            1259    147508    tag    TABLE     �   CREATE TABLE public.tag (
    id integer NOT NULL,
    name text NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.tag;
       public         heap 	   hollyfood    false            �            1259    147507 
   tag_id_seq    SEQUENCE     �   ALTER TABLE public.tag ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tag_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    220            �            1259    147517    user    TABLE     �  CREATE TABLE public."user" (
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
       public         heap 	   hollyfood    false            �            1259    147516    user_id_seq    SEQUENCE     �   ALTER TABLE public."user" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    222            �            1259    147478    work    TABLE     �   CREATE TABLE public.work (
    id integer NOT NULL,
    title text NOT NULL,
    synopsis text NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.work;
       public         heap 	   hollyfood    false            �            1259    147477    work_id_seq    SEQUENCE     �   ALTER TABLE public.work ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.work_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   hollyfood    false    214            k          0    147553    comment 
   TABLE DATA           f   COPY public.comment (id, description, date, recipe_id, user_id, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    226   Si       q          0    147606    favorite 
   TABLE DATA           T   COPY public.favorite (id, user_id, recipe_id, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    232   �i       ]          0    147469 
   ingredient 
   TABLE DATA           H   COPY public.ingredient (id, name, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    212   �i       o          0    147589    ingredient_has_proportion 
   TABLE DATA           o   COPY public.ingredient_has_proportion (id, ingredient_id, proportion_id, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    230   ,j       [          0    114830    ingredient_has_recipe 
   TABLE DATA           g   COPY public.ingredient_has_recipe (id, ingredient_id, recipe_id, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    210   nj       c          0    147499 
   proportion 
   TABLE DATA           R   COPY public.proportion (id, quantity, unit, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    218   �j       i          0    147534    recipe 
   TABLE DATA           �   COPY public.recipe (id, slug, name, quote, picture, instruction, total_time, servings, difficulty, score, work_id, user_id, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    224   �j       m          0    147572    recipe_has_ingredient 
   TABLE DATA           g   COPY public.recipe_has_ingredient (id, ingredient_id, recipe_id, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    228   �l       s          0    147623    recipe_has_tag 
   TABLE DATA           Y   COPY public.recipe_has_tag (id, recipe_id, tag_id, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    234   *m       a          0    147492    role 
   TABLE DATA           B   COPY public.role (id, name, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    216   �m       e          0    147508    tag 
   TABLE DATA           A   COPY public.tag (id, name, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    220   �m       g          0    147517    user 
   TABLE DATA           q   COPY public."user" (id, name, firstname, avatar, email, password, role_id, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    222   @n       _          0    147478    work 
   TABLE DATA           M   COPY public.work (id, title, synopsis, "createdAt", "updatedAt") FROM stdin;
    public       	   hollyfood    false    214   �n       z           0    0    comment_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.comment_id_seq', 1, true);
          public       	   hollyfood    false    225            {           0    0    favorite_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.favorite_id_seq', 1, true);
          public       	   hollyfood    false    231            |           0    0     ingredient_has_proportion_id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.ingredient_has_proportion_id_seq', 1, true);
          public       	   hollyfood    false    229            }           0    0    ingredient_has_recipe_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.ingredient_has_recipe_id_seq', 1, true);
          public       	   hollyfood    false    209            ~           0    0    ingredient_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.ingredient_id_seq', 1, true);
          public       	   hollyfood    false    211                       0    0    proportion_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.proportion_id_seq', 1, true);
          public       	   hollyfood    false    217            �           0    0    recipe_has_ingredient_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.recipe_has_ingredient_id_seq', 1, true);
          public       	   hollyfood    false    227            �           0    0    recipe_has_tag_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.recipe_has_tag_id_seq', 8, true);
          public       	   hollyfood    false    233            �           0    0    recipe_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.recipe_id_seq', 4, true);
          public       	   hollyfood    false    223            �           0    0    role_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.role_id_seq', 2, true);
          public       	   hollyfood    false    215            �           0    0 
   tag_id_seq    SEQUENCE SET     8   SELECT pg_catalog.setval('public.tag_id_seq', 4, true);
          public       	   hollyfood    false    219            �           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 4, true);
          public       	   hollyfood    false    221            �           0    0    work_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.work_id_seq', 4, true);
          public       	   hollyfood    false    213            �           2606    147560    comment comment_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.comment DROP CONSTRAINT comment_pkey;
       public         	   hollyfood    false    226            �           2606    147611    favorite favorite_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.favorite
    ADD CONSTRAINT favorite_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.favorite DROP CONSTRAINT favorite_pkey;
       public         	   hollyfood    false    232            �           2606    147594 8   ingredient_has_proportion ingredient_has_proportion_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public.ingredient_has_proportion
    ADD CONSTRAINT ingredient_has_proportion_pkey PRIMARY KEY (id);
 b   ALTER TABLE ONLY public.ingredient_has_proportion DROP CONSTRAINT ingredient_has_proportion_pkey;
       public         	   hollyfood    false    230            �           2606    114835 0   ingredient_has_recipe ingredient_has_recipe_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.ingredient_has_recipe
    ADD CONSTRAINT ingredient_has_recipe_pkey PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.ingredient_has_recipe DROP CONSTRAINT ingredient_has_recipe_pkey;
       public         	   hollyfood    false    210            �           2606    147476    ingredient ingredient_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.ingredient
    ADD CONSTRAINT ingredient_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.ingredient DROP CONSTRAINT ingredient_pkey;
       public         	   hollyfood    false    212            �           2606    147506    proportion proportion_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.proportion
    ADD CONSTRAINT proportion_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.proportion DROP CONSTRAINT proportion_pkey;
       public         	   hollyfood    false    218            �           2606    147577 0   recipe_has_ingredient recipe_has_ingredient_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.recipe_has_ingredient
    ADD CONSTRAINT recipe_has_ingredient_pkey PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.recipe_has_ingredient DROP CONSTRAINT recipe_has_ingredient_pkey;
       public         	   hollyfood    false    228            �           2606    147628 "   recipe_has_tag recipe_has_tag_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.recipe_has_tag
    ADD CONSTRAINT recipe_has_tag_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.recipe_has_tag DROP CONSTRAINT recipe_has_tag_pkey;
       public         	   hollyfood    false    234            �           2606    147541    recipe recipe_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.recipe
    ADD CONSTRAINT recipe_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.recipe DROP CONSTRAINT recipe_pkey;
       public         	   hollyfood    false    224            �           2606    147497    role role_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.role DROP CONSTRAINT role_pkey;
       public         	   hollyfood    false    216            �           2606    147515    tag tag_pkey 
   CONSTRAINT     J   ALTER TABLE ONLY public.tag
    ADD CONSTRAINT tag_pkey PRIMARY KEY (id);
 6   ALTER TABLE ONLY public.tag DROP CONSTRAINT tag_pkey;
       public         	   hollyfood    false    220            �           2606    147527    user user_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_email_key;
       public         	   hollyfood    false    222            �           2606    147525    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public         	   hollyfood    false    222            �           2606    147485    work work_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.work
    ADD CONSTRAINT work_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.work DROP CONSTRAINT work_pkey;
       public         	   hollyfood    false    214            �           2606    147561    comment comment_recipe_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.recipe(id);
 H   ALTER TABLE ONLY public.comment DROP CONSTRAINT comment_recipe_id_fkey;
       public       	   hollyfood    false    224    226    3255            �           2606    147566    comment comment_user_id_fkey    FK CONSTRAINT     |   ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);
 F   ALTER TABLE ONLY public.comment DROP CONSTRAINT comment_user_id_fkey;
       public       	   hollyfood    false    3253    222    226            �           2606    147617     favorite favorite_recipe_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.favorite
    ADD CONSTRAINT favorite_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.recipe(id);
 J   ALTER TABLE ONLY public.favorite DROP CONSTRAINT favorite_recipe_id_fkey;
       public       	   hollyfood    false    3255    224    232            �           2606    147612    favorite favorite_user_id_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.favorite
    ADD CONSTRAINT favorite_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);
 H   ALTER TABLE ONLY public.favorite DROP CONSTRAINT favorite_user_id_fkey;
       public       	   hollyfood    false    222    3253    232            �           2606    147595 F   ingredient_has_proportion ingredient_has_proportion_ingredient_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ingredient_has_proportion
    ADD CONSTRAINT ingredient_has_proportion_ingredient_id_fkey FOREIGN KEY (ingredient_id) REFERENCES public.ingredient(id);
 p   ALTER TABLE ONLY public.ingredient_has_proportion DROP CONSTRAINT ingredient_has_proportion_ingredient_id_fkey;
       public       	   hollyfood    false    3241    212    230            �           2606    147600 F   ingredient_has_proportion ingredient_has_proportion_proportion_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ingredient_has_proportion
    ADD CONSTRAINT ingredient_has_proportion_proportion_id_fkey FOREIGN KEY (proportion_id) REFERENCES public.proportion(id);
 p   ALTER TABLE ONLY public.ingredient_has_proportion DROP CONSTRAINT ingredient_has_proportion_proportion_id_fkey;
       public       	   hollyfood    false    230    218    3247            �           2606    147578 >   recipe_has_ingredient recipe_has_ingredient_ingredient_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.recipe_has_ingredient
    ADD CONSTRAINT recipe_has_ingredient_ingredient_id_fkey FOREIGN KEY (ingredient_id) REFERENCES public.ingredient(id);
 h   ALTER TABLE ONLY public.recipe_has_ingredient DROP CONSTRAINT recipe_has_ingredient_ingredient_id_fkey;
       public       	   hollyfood    false    3241    212    228            �           2606    147583 :   recipe_has_ingredient recipe_has_ingredient_recipe_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.recipe_has_ingredient
    ADD CONSTRAINT recipe_has_ingredient_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.recipe(id);
 d   ALTER TABLE ONLY public.recipe_has_ingredient DROP CONSTRAINT recipe_has_ingredient_recipe_id_fkey;
       public       	   hollyfood    false    3255    224    228            �           2606    147629 ,   recipe_has_tag recipe_has_tag_recipe_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.recipe_has_tag
    ADD CONSTRAINT recipe_has_tag_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.recipe(id);
 V   ALTER TABLE ONLY public.recipe_has_tag DROP CONSTRAINT recipe_has_tag_recipe_id_fkey;
       public       	   hollyfood    false    224    3255    234            �           2606    147634 )   recipe_has_tag recipe_has_tag_tag_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.recipe_has_tag
    ADD CONSTRAINT recipe_has_tag_tag_id_fkey FOREIGN KEY (tag_id) REFERENCES public.tag(id);
 S   ALTER TABLE ONLY public.recipe_has_tag DROP CONSTRAINT recipe_has_tag_tag_id_fkey;
       public       	   hollyfood    false    3249    220    234            �           2606    147547    recipe recipe_user_id_fkey    FK CONSTRAINT     z   ALTER TABLE ONLY public.recipe
    ADD CONSTRAINT recipe_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);
 D   ALTER TABLE ONLY public.recipe DROP CONSTRAINT recipe_user_id_fkey;
       public       	   hollyfood    false    3253    222    224            �           2606    147542    recipe recipe_work_id_fkey    FK CONSTRAINT     x   ALTER TABLE ONLY public.recipe
    ADD CONSTRAINT recipe_work_id_fkey FOREIGN KEY (work_id) REFERENCES public.work(id);
 D   ALTER TABLE ONLY public.recipe DROP CONSTRAINT recipe_work_id_fkey;
       public       	   hollyfood    false    214    3243    224            �           2606    147528    user user_role_id_fkey    FK CONSTRAINT     v   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.role(id);
 B   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_role_id_fkey;
       public       	   hollyfood    false    222    3245    216            k   ?   x�3���/J��4202�50�52�4B�T��X��������H������T���3Ə+F��� ���      q   2   x�3�4B##]S]#cCs+K+S#=#ScCSm#�?�=... �N�      ]   8   x�3���M,I-�4202�50�52V04�2��25�325640�60������� �
-      o   2   x�3�4B##]S]#cCs+K+S#=#ScCSm#�?�=... �N�      [   2   x�3�4B##]S]CSCS+CK+#s=c#3m#�?�=... �g�      c   :   x�3�4�,��M,I-�4202�50�52V04�2��25�325640�60������� (2
�      i   �  x��SMo1=;�bn�H��M" נr)�H{�8����N�����q���琶R�J��Z�=���=��r�Z	�9�F�J]<�>��>g�V��ۤ���3ӭU=������s��7����s��;�o�_?��z^UxT��Y+�(���騚��	�o��w�Y3nf�����u�i�(+��b�+EZe���{u��(g�YL�.Qv��9��,�	��w�8�[���d�=���A�O�i0N`3Q[t���L� �!�2�q�N�'��M��E�*�Y�1��pb,����BMuP�����O��`�@n����D�֪�n�8'��� S˝)���]���y,�~�!ҟ;Gb��N`H��w�ߓ.����&�(T:�]�CB�a;��i���G�{9��#����5��ǽ��I�|<� Z+�:+nn&Aڣ<�P��}��:��^-�cQ�ܱ���2��3:�O	7�8A���`0�/W?      m   2   x�3�4B##]S]#cCs+K+S#=#ScCSm#�?�=... �N�      s   V   x�����0D�3T��I0�"� ��!V@�o���ov���@G�J�Z/#����V�<��,�vjW��o#'�fw��o�3��!9n      a   @   x�3��M�M*J�4202�50�52V04�2��25�325640�60���2�LL���#�0F��� iWy      e   P   x�3�,N-�L�4202�50�52V04�2��25�325640�60���2�L���%�Θ�81��J�
M8�K���Q���� g$�      g   �   x���K
!��u<E�eD�R:���'���Q���
��;�]�B �&DC훟#$���}�[�>9S�G�� *��r�����::��V�p�޹j9,��^��+4b��8��sG������5{�I
!~�Z[      _   �   x���A
�0@������4m�	�nD-n�	��T�T��O��?�چ����x�6����e�L�̷�r�7ZjS��l���,4�,^��b$���b�O3;Gp����*��l��*v#���cZ�l�>�ȴN*�Dؼ&���H�(D��P����j��VmI�     