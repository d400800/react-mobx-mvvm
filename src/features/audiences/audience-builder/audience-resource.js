class AudienceResource {
    saveAudience(audience) {
        console.log('saving...\n', JSON.stringify(audience, null, 4));
    }
}

export default new AudienceResource();