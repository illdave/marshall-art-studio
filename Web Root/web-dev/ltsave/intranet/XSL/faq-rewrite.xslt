<?xml version="1.0" encoding="ISO-8859-1" ?> 
<!-- faq-rewrite.xslt
	
	Convert an XML FAQ from list of sections plus list of items 
	       to sections containing items.
	Need to delete 'section' attributes afterwards.
-->
<xsl:stylesheet version="1.0"  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
	<xsl:output method="xml" indent="yes"/>
	<xsl:key name="SectionKey" match="/content/section" use="@id"/>
	<xsl:key name="ItemKey" match="/content/item" use="@id"/>
	<xsl:template match="/">
		<xsl:text>&#xa;</xsl:text>
		<xsl:processing-instruction name="xml-stylesheet">
			<xsl:text>type="text/xsl" href="../XSL/lts_internal.xslt"</xsl:text>
		</xsl:processing-instruction>
		<content>
			<xsl:text>&#xa;</xsl:text>
			<xsl:copy-of select="content/topic"/>
			<xsl:for-each select="/content/section">
				<xsl:variable name="section-id" select="@id"/>
				<xsl:if test="count(key('SectionKey', @id)) != 1">
					<xsl:message>Duplicate Section ID <xsl:value-of select="@id"/></xsl:message>
				</xsl:if>
				<section id="{@id}" title="{@title}">
					<xsl:for-each select="/content/item[@section=$section-id]">
						<xsl:sort select="@title" order="ascending"/>
						<xsl:text>&#xa;</xsl:text>
						<xsl:copy-of select="."/>
					</xsl:for-each>
				</section>
			</xsl:for-each>
		</content>
		<xsl:for-each select="/content/item">
			<xsl:if test="count(key('ItemKey', @id)) != 1">
				<xsl:message>Duplicate Item id <xsl:value-of select="@id"/></xsl:message>
			</xsl:if>
			<xsl:if test="count(key('SectionKey', @section)) = 0">
				<xsl:message>Missing section for Item <xsl:value-of select="@id"/></xsl:message>
			</xsl:if>
		</xsl:for-each>
	</xsl:template>
	
</xsl:stylesheet>

