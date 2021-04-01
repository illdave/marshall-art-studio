<?xml version="1.0" encoding="ISO-8859-1" ?> 
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:include href="../XSL/html.xslt" />
   	<xsl:include href="../XSL/nav.xslt" />
	<xsl:include href="../XSL/banner.xslt" />
	<xsl:variable name="topics" select="document('../content/topics.xml')" />
	<xsl:variable name="p4web-url"></xsl:variable>
	<xsl:variable name="bug-url"></xsl:variable>
	<xsl:key name="ItemKey" match="/content/section/item" use="@id" />
	
	<!-- html output -->
	<xsl:template match="/">
		<html>
		<head>
			<title><xsl:value-of select="/content/topic/@title"/></title>
			<link rel="stylesheet" type="text/css" href="../css/lts_internal.css" />
			<script type="text/javascript" src="../scripts/lts_internal.js"></script>
		</head>
		<body>
		<div id="page">		
			<xsl:call-template name="banner" />
			<xsl:call-template name="nav" />
			
			<div id="content">
				<h2 id="TOP"><xsl:value-of select="/content/topic/@title"/></h2>
				<xsl:apply-templates select="/content/topic" />
				
				<!-- table of contents -->
				<xsl:for-each select="/content/section">
					<xsl:variable name="section-id" select="@id" />
					<div class="sectionheader">
						<h4 id="{@id}"><a href="#TOP"><img src="../images/nav/up.gif" class="uparrow" width="11" height="9" border="0" alt="UP" /></a><xsl:value-of select="@title" /></h4>
					</div>
					<div class="sectionbody">
						<p><xsl:value-of select="text()"/></p>
					</div>
					<div class="sectionitems">
						<ul>
							<xsl:choose>
								<xsl:when test="@order='sorted'">
									<xsl:for-each select="./item">
										<xsl:sort select="@title" order="ascending" />
										<li><a href="#{@id}"><xsl:value-of select="@title" /></a></li>
									</xsl:for-each>
								</xsl:when>
								<xsl:otherwise>
									<xsl:for-each select="./item">
										<li><a href="#{@id}"><xsl:value-of select="@title" /></a></li>
									</xsl:for-each>
								</xsl:otherwise>
							</xsl:choose>
						</ul>
					</div>
				</xsl:for-each>

				<p>Updated: <xsl:value-of select="concat(substring(/content/topic/@fileChange, 42), ' ', substring(/content/topic/@fileChange, 12, 10))"/></p>
				<!-- answers -->
			     	<div id="answers">
			     		<xsl:for-each select="/content/section">
			     			<xsl:variable name="section-id" select="@id" />
			     			<div class="sectionheader">
			     				<h4><xsl:value-of select="@title" /></h4>
			     			</div>
			     			<xsl:choose>
			     				<xsl:when test="@order='sorted'">
			     					<xsl:for-each select="./item">
			     						<xsl:sort select="@title" order="ascending" />
			     						<xsl:call-template name="item-contents" />
			     					</xsl:for-each>
			     				</xsl:when>
			     				<xsl:otherwise>
			     					<xsl:for-each select="./item">
			     						<xsl:call-template name="item-contents" />
			     					</xsl:for-each>
			     				</xsl:otherwise>
			     			</xsl:choose>
			     		</xsl:for-each>
				</div>
			</div>
		</div>
		</body>
		</html>
	</xsl:template>

	<xsl:template name="item-contents">
		<div class="faq-title">
		<h5 id="{@id}"><a href="#TOP">
			<img src="../images/nav/up.gif" class="uparrow" width="11" height="9" border="0" alt="UP" /></a>
			<xsl:value-of select="@title" />		
			<xsl:if test="@author or @date">
				[<xsl:value-of select="@author"/>&#32;<xsl:value-of select="@date"/>]
			</xsl:if>
		</h5>
	</div>
	<div class="faq-body">
		<xsl:apply-templates />
	</div>
	</xsl:template>
	<!-- unused material
		<xsl:copy-of select="." />
	-->

	<xsl:template match="iref">
		<xsl:choose>
			<xsl:when test="@item">
				<xsl:if test="@p4 or @bug">
					<xsl:message>Attributes 'p4' and 'bug' are not usable with  '&lt;iref item=>' in '<xsl:value-of select="ancestor::item/@id"/>'</xsl:message>
				</xsl:if>
				<xsl:choose>
					<xsl:when test="@page and @file">
						[<a href="{@file}#{@item}"><xsl:value-of select="@item"/></a>, page <xsl:value-of select="@page"/>]
					</xsl:when>
					<xsl:when test="@file and @title">
						<a href="{@file}#{@item}"><xsl:value-of select="@title"/></a>
					</xsl:when>
					<xsl:when test="@file">
						<a href="{@file}#{@item}"><xsl:value-of select="@item"/></a>
					</xsl:when>
					<xsl:when test="@page">
						[<a href="#{@item}"><xsl:value-of select="@item"/></a>, page <xsl:value-of select="@page"/>]
					</xsl:when>
					<xsl:when test="@title">
						<a href="#{@item}"><xsl:value-of select="@title"/></a>
					</xsl:when>
					<xsl:when test="count(key('ItemKey', @item)) = 0">
						<a href="#{@item}"><xsl:value-of select="@item"/> UNDEFINED</a>
					</xsl:when>
					<xsl:otherwise>
						
						<a href="#{@item}"><xsl:value-of select="key('ItemKey', @item)/@title"/></a>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:when>
			<xsl:when test="@p4">
				<xsl:if test="@file or @bug">
					<xsl:message>Attributes 'file' or 'bug' are not usable with  '&lt;iref p4=>' in '<xsl:value-of select="ancestor::item/@id"/>'</xsl:message>
				</xsl:if>
				<xsl:choose>
					<xsl:when test="@title">
						<a href="{$p4web-url}/{@p4}"><xsl:value-of select="@title"/></a>
					</xsl:when>
					<xsl:otherwise>
						<a href="{$p4web-url}/{@p4}"><xsl:value-of select="@p4"/></a>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:when>
			<xsl:when test="@bug">
				<xsl:if test="@file">
					<xsl:message>Attribute 'file' is not usable with  '&lt;iref p4=>'  in '<xsl:value-of select="ancestor::item/@id"/>'</xsl:message>
				</xsl:if>
				<xsl:choose>
					<xsl:when test="@title">
						<a href="{$bug-url}{@bug}"><xsl:value-of select="@title"/></a>
					</xsl:when>
					<xsl:otherwise>
						<a href="{$bug-url}{@bug}">Bug <xsl:value-of select="@bug"/></a>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:when>
			<xsl:otherwise>
				<xsl:message>An <b>iref</b> in '<xsl:value-of select="ancestor::item/@id"/>' requires an 'item' or 'p4' attribute.</xsl:message>
			</xsl:otherwise>
		</xsl:choose>
		
		<xsl:variable name="ref_id">
			<xsl:value-of select="@id" />
		</xsl:variable>
		<xsl:variable name="ref_page">
			<xsl:value-of select="@page" />
		</xsl:variable>
	</xsl:template>

	<xsl:template match="top-of-page">
		<div class="body-text">
		<xsl:value-of select="." />
		</div>	
	</xsl:template>

</xsl:stylesheet>



